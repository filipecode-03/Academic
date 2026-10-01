import { NextResponse } from "next/server";
import {
  createCategory,
  getCategories,
} from "@/src/services/category.service";
import { createCategorySchema } from "@/src/schemas/category.schema";
import { isPrismaUniqueConstraintError } from "@/src/lib/prisma-error";

export async function GET() {
  try {
    const categories = await getCategories();

    return NextResponse.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar categorias.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = createCategorySchema.safeParse(body);

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

    const category = await createCategory(result.data);

    return NextResponse.json(
      {
        success: true,
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar categoria:", error);

    if (isPrismaUniqueConstraintError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug já está sendo utilizado.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao criar categoria.",
      },
      { status: 500 }
    );
  }
}