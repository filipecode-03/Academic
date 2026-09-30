import { NextResponse } from "next/server";
import { getProductById } from "@/src/services/product.service";

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