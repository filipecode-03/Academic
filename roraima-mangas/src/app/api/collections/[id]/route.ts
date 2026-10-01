import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import {
  getCollectionById,
  updateCollection,
  deleteCollection,
} from "@/src/services/collection.service";
import { updateCollectionSchema } from "@/src/schemas/collection.schema";
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

    const collection = await getCollectionById(id);

    if (!collection) {
      return NextResponse.json(
        {
          success: false,
          message: "Coleção não encontrada.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      collection,
    });
  } catch (error) {
    console.error("Erro ao buscar coleção:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar coleção.",
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
  
      const result = updateCollectionSchema.safeParse(body);
  
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
  
      const existingCollection = await getCollectionById(id);
  
      if (!existingCollection) {
        return NextResponse.json(
          {
            success: false,
            message: "Coleção não encontrada.",
          },
          { status: 404 }
        );
      }
  
      const collection = await updateCollection(id, result.data);
  
      return NextResponse.json({
        success: true,
        collection,
      });
    } catch (error) {
      console.error("Erro ao atualizar coleção:", error);
  
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
          message: "Erro ao atualizar coleção.",
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
  
      const existingCollection = await getCollectionById(id);
  
      if (!existingCollection) {
        return NextResponse.json(
          {
            success: false,
            message: "Coleção não encontrada.",
          },
          { status: 404 }
        );
      }
  
      await deleteCollection(id);
  
      return NextResponse.json({
        success: true,
        message: "Coleção excluída com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao excluir coleção:", error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Erro ao excluir coleção.",
        },
        { status: 500 }
      );
    }
  }