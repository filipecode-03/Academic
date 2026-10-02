import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { reorderHomeBannersSchema } from "@/src/schemas/home-banner.schema";
import { reorderHomeBanners } from "@/src/services/home-banner.service";

export async function PATCH(request: NextRequest) {
  const token = await getAuthenticatedToken(request);
  if (!token?.id) {
    return NextResponse.json(
      { success: false, message: "Não autorizado." },
      { status: 401 },
    );
  }

  try {
    const body = await request.json();
    const result = reorderHomeBannersSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Lista de banners inválida.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const banners = await reorderHomeBanners(result.data.bannerIds);
    return NextResponse.json({ success: true, banners });
  } catch (error) {
    console.error("Erro ao reordenar banners:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error
          ? error.message
          : "Não foi possível salvar a ordem dos banners.",
      },
      { status: 409 },
    );
  }
}
