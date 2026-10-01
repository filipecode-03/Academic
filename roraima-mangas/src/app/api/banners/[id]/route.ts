import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { updateHomeBannerSchema } from "@/src/schemas/home-banner.schema";
import {
  deleteHomeBanner,
  getHomeBannerById,
  updateHomeBanner,
} from "@/src/services/home-banner.service";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  context: RouteContext,
) {
  try {
    const { id } = await context.params;

    const banner = await getHomeBannerById(id);

    if (!banner) {
      return NextResponse.json(
        { error: "Banner não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json(banner);
  } catch (error) {
    console.error("GET /api/banners/[id]:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext,
) {
  const token = await getAuthenticatedToken(request);

  if (!token) {
    return NextResponse.json(
      { error: "Não autenticado." },
      { status: 401 },
    );
  }

  try {
    const { id } = await context.params;

    const body = await request.json();

    const data = updateHomeBannerSchema.parse(body);

    const banner = await updateHomeBanner(id, data);

    if (!banner) {
      return NextResponse.json(
        { error: "Banner não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json(banner);
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

    console.error("PATCH /api/banners/[id]:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext,
) {
  const token = await getAuthenticatedToken(request);

  if (!token) {
    return NextResponse.json(
      { error: "Não autenticado." },
      { status: 401 },
    );
  }

  try {
    const { id } = await context.params;

    const banner = await deleteHomeBanner(id);

    if (!banner) {
      return NextResponse.json(
        { error: "Banner não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Banner excluído com sucesso.",
    });
  } catch (error) {
    console.error("DELETE /api/banners/[id]:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}