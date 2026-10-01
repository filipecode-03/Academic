import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import {
  createHomeBannerSchema,
} from "@/src/schemas/home-banner.schema";
import {
  createHomeBanner,
  listHomeBanners,
} from "@/src/services/home-banner.service";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";

export async function GET() {
  try {
    const banners = await listHomeBanners();

    return NextResponse.json(banners);
  } catch (error) {
    console.error("GET /api/banners:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const token = await getAuthenticatedToken(request);

  if (!token) {
    return NextResponse.json(
      { error: "Não autenticado." },
      { status: 401 },
    );
  }

  try {
    const body = await request.json();

    const data = createHomeBannerSchema.parse(body);

    const banner = await createHomeBanner(data);

    return NextResponse.json(banner, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Dados inválidos.",
          details: error.issues,
        },
        { status: 400 },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 },
      );
    }

    console.error("POST /api/banners:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}