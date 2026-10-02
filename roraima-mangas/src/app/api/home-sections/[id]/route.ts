import { NextRequest, NextResponse } from "next/server";

import {
  getHomeSectionById,
  updateHomeSection,
  deleteHomeSection,
} from "@/src/services/home-section.service";

import {
  updateHomeSectionSchema,
} from "@/src/schemas/home-section.schema";

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

    const homeSection = await getHomeSectionById(id);

    if (!homeSection) {
      return NextResponse.json(
        {
          success: false,
          message: "Seção da Home não encontrada.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      homeSection,
    });
  } catch (error) {
    console.error("Erro ao buscar seção da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar seção da Home.",
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

    const result = updateHomeSectionSchema.safeParse(body);

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

    const homeSection = await updateHomeSection(
      id,
      result.data
    );

    if (!homeSection) {
      return NextResponse.json(
        {
          success: false,
          message: "Seção da Home não encontrada.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      homeSection,
    });
  } catch (error) {
    console.error("Erro ao atualizar seção da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao atualizar seção da Home.",
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

    const existingHomeSection =
      await getHomeSectionById(id);

    if (!existingHomeSection) {
      return NextResponse.json(
        {
          success: false,
          message: "Seção da Home não encontrada.",
        },
        { status: 404 }
      );
    }

    await deleteHomeSection(id);

    return NextResponse.json({
      success: true,
      message: "Seção da Home excluída com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao excluir seção da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao excluir seção da Home.",
      },
      { status: 500 }
    );
  }
}