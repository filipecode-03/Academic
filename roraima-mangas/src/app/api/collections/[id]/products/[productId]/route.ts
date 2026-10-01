import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { getCollectionById } from "@/src/services/collection.service";
import { getProductById } from "@/src/services/product.service";
import { removeProductFromCollection } from "@/src/services/product-collection.service";

type RouteContext = {
  params: Promise<{
    id: string;
    productId: string;
  }>;
};

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
    
    const { id: collectionId, productId } = await context.params;

    const collection = await getCollectionById(collectionId);

    if (!collection) {
      return NextResponse.json(
        {
          success: false,
          message: "Coleção não encontrada.",
        },
        { status: 404 }
      );
    }

    const product = await getProductById(productId);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Produto não encontrado.",
        },
        { status: 404 }
      );
    }

    const products = await removeProductFromCollection(
      collectionId,
      productId
    );

    return NextResponse.json({
      success: true,
      message: "Produto removido da coleção com sucesso.",
      productCollection: products,
    });
  } catch (error) {
    console.error("Erro ao remover produto da coleção:", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "O produto não está associado a esta coleção.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao remover produto da coleção.",
      },
      { status: 500 }
    );
  }
}