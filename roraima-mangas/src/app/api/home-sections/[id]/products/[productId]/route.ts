import { NextRequest, NextResponse } from "next/server";

import {
  removeProductFromHomeSection,
} from "@/src/services/home-section-product.service";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

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

    const { id, productId } = await context.params;

    const relation =
      await removeProductFromHomeSection(
        id,
        productId
      );

    if (!relation) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Produto não está associado a esta seção.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Produto removido da seção com sucesso.",
    });
  } catch (error) {
    console.error(
      "Erro ao remover produto da seção:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao remover produto da seção.",
      },
      { status: 500 }
    );
  }
}