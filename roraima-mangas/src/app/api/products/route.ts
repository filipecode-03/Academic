import { getAuthenticatedSession } from "@/src/lib/auth-guard";
import { NextResponse } from "next/server";
import { createProduct, getProducts } from "@/src/services/product.service";
import { createProductSchema } from "@/src/schemas/product.schema";
import { isPrismaUniqueConstraintError } from "@/src/lib/prisma-error";

export async function GET() {
  try {
    const products = await getProducts();

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar produtos.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAuthenticatedSession();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Não autorizado.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const result = createProductSchema.safeParse(body);

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

    const product = await createProduct(result.data);

    return NextResponse.json(
      {
        success: true,
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar produto:", error);

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
        message: "Erro ao criar produto.",
      },
      { status: 500 }
    );
  }
}