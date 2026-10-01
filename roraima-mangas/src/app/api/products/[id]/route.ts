import { NextRequest, NextResponse } from "next/server";
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "@/src/services/product.service";
import { updateProductSchema } from "@/src/schemas/product.schema";
import { isPrismaUniqueConstraintError } from "@/src/lib/prisma-error";
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

    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Produto não encontrado.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Erro ao buscar produto:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar produto.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
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

    const result = updateProductSchema.safeParse(body);

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

    const existingProduct = await getProductById(id);

    if (!existingProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Produto não encontrado.",
        },
        { status: 404 }
      );
    }

    const product = await updateProduct(id, result.data);

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);

    if (isPrismaUniqueConstraintError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug ou SKU já está sendo utilizado.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao atualizar produto.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
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

    const existingProduct = await getProductById(id);

    if (!existingProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Produto não encontrado.",
        },
        { status: 404 }
      );
    }

    await deleteProduct(id);

    return NextResponse.json({
      success: true,
      message: "Produto excluído com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao excluir produto:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao excluir produto.",
      },
      { status: 500 }
    );
  }
}