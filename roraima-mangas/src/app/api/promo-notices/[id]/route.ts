import { NextRequest, NextResponse } from "next/server";

import {
  getPromoNoticeById,
  updatePromoNotice,
  deletePromoNotice,
} from "@/src/services/promo-notice.service";

import {
  updatePromoNoticeSchema,
} from "@/src/schemas/promo-notice.schema";

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

    const promoNotice = await getPromoNoticeById(id);

    if (!promoNotice) {
      return NextResponse.json(
        {
          success: false,
          message: "Aviso promocional não encontrado.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      promoNotice,
    });
  } catch (error) {
    console.error(
      "Erro ao buscar aviso promocional:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar aviso promocional.",
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

    const result = updatePromoNoticeSchema.safeParse(body);

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

    const promoNotice = await updatePromoNotice(
      id,
      result.data
    );

    if (!promoNotice) {
      return NextResponse.json(
        {
          success: false,
          message: "Aviso promocional não encontrado.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      promoNotice,
    });
  } catch (error) {
    console.error(
      "Erro ao atualizar aviso promocional:",
      error
    );

    if (
      error instanceof Error &&
      error.message ===
        "A data final deve ser posterior à data inicial."
    ) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao atualizar aviso promocional.",
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

    const existingPromoNotice = await getPromoNoticeById(id);

    if (!existingPromoNotice) {
      return NextResponse.json(
        {
          success: false,
          message: "Aviso promocional não encontrado.",
        },
        { status: 404 }
      );
    }

    await deletePromoNotice(id);

    return NextResponse.json({
      success: true,
      message: "Aviso promocional excluído com sucesso.",
    });
  } catch (error) {
    console.error(
      "Erro ao excluir aviso promocional:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao excluir aviso promocional.",
      },
      { status: 500 }
    );
  }
}