import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  createHomeSection,
  getHomeSections,
} from "@/src/services/home-section.service";

import {
  createHomeSectionSchema,
} from "@/src/schemas/home-section.schema";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

export async function GET() {
  try {
    const homeSections = await getHomeSections();

    return NextResponse.json({
      success: true,
      homeSections,
    });
  } catch (error) {
    console.error("Erro ao buscar seções da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar seções da Home.",
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

    const result = createHomeSectionSchema.safeParse(body);

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

    const homeSection = await createHomeSection(result.data);

    return NextResponse.json(
      {
        success: true,
        homeSection,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar seção da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao criar seção da Home.",
      },
      { status: 500 }
    );
  }
}