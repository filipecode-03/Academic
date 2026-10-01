import { NextResponse } from "next/server";
import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "@/src/services/category.service";
import { updateCategorySchema } from "@/src/schemas/category.schema";
import { isPrismaUniqueConstraintError } from "@/src/lib/prisma-error";

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

    const category = await getCategoryById(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Categoria não encontrada.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar categoria.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const result = updateCategorySchema.safeParse(body);

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

    const existingCategory = await getCategoryById(id);

    if (!existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Categoria não encontrada.",
        },
        { status: 404 }
      );
    }

    const category = await updateCategory(id, result.data);

    return NextResponse.json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);

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
        message: "Erro ao atualizar categoria.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const existingCategory = await getCategoryById(id);

    if (!existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Categoria não encontrada.",
        },
        { status: 404 }
      );
    }

    await deleteCategory(id);

    return NextResponse.json({
      success: true,
      message: "Categoria excluída com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao excluir categoria.",
      },
      { status: 500 }
    );
  }
}