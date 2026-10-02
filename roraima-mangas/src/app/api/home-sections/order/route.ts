import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { reorderHomeSectionsSchema } from "@/src/schemas/home-section.schema";
import { reorderHomeSections } from "@/src/services/home-section.service";

export async function PATCH(request: NextRequest) {
  const token = await getAuthenticatedToken(request);
  if (!token?.id) {
    return NextResponse.json(
      { success: false, message: "Não autorizado." },
      { status: 401 },
    );
  }

  try {
    const result = reorderHomeSectionsSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Lista de seções inválida.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const homeSections = await reorderHomeSections(result.data.sectionIds);
    return NextResponse.json({ success: true, homeSections });
  } catch (error) {
    console.error("Erro ao reordenar seções da Home:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error
          ? error.message
          : "Não foi possível salvar a ordem das seções.",
      },
      { status: 409 },
    );
  }
}
