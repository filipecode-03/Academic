import { NextRequest, NextResponse } from "next/server";

import {
  getHomeSectionProducts,
  addProductToHomeSection,
} from "@/src/services/home-section-product.service";

import {
  createHomeSectionProductSchema,
} from "@/src/schemas/home-section-product.schema";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const products = await getHomeSectionProducts(id);

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(
      "Erro ao buscar produtos da seção:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar produtos da seção.",
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const token = await getAuthenticatedToken(request);

    if (!token?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Não autorizado.",
        },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    const body = await request.json();

    const result =
      createHomeSectionProductSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const homeSectionProduct =
      await addProductToHomeSection(id, result.data);

    return NextResponse.json(
      {
        success: true,
        homeSectionProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Erro ao adicionar produto à seção:",
      error
    );

    if (
      error instanceof Error &&
      (
        error.message ===
          "Seção da Home não encontrada." ||
        error.message === "Produto não encontrado." ||
        error.message.includes(
          "Produtos só podem ser adicionados"
        )
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    if (
      error instanceof Error &&
      error.message.includes("Unique constraint")
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "O produto já está associado a esta seção.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao adicionar produto à seção.",
      },
      { status: 500 }
    );
  }
}