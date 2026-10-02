import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  createPromoNotice,
  getPromoNotices,
} from "@/src/services/promo-notice.service";

import {
  createPromoNoticeSchema,
} from "@/src/schemas/promo-notice.schema";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

export async function GET() {
  try {
    const promoNotices = await getPromoNotices();

    return NextResponse.json({
      success: true,
      promoNotices,
    });
  } catch (error) {
    console.error("Erro ao buscar avisos promocionais:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar avisos promocionais.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const body = await request.json();

    const result = createPromoNoticeSchema.safeParse(body);

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

    const promoNotice = await createPromoNotice(result.data);

    return NextResponse.json(
      {
        success: true,
        promoNotice,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar aviso promocional:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao criar aviso promocional.",
      },
      { status: 500 }
    );
  }
}