import { NextResponse } from "next/server";
import {
  createCollection,
  getCollections,
} from "@/src/services/collection.service";
import { createCollectionSchema } from "@/src/schemas/collection.schema";
import { isPrismaUniqueConstraintError } from "@/src/lib/prisma-error";

export async function GET() {
  try {
    const collections = await getCollections();

    return NextResponse.json({
      success: true,
      collections,
    });
  } catch (error) {
    console.error("Erro ao buscar coleções:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar coleções.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = createCollectionSchema.safeParse(body);

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

    const collection = await createCollection(result.data);

    return NextResponse.json(
      {
        success: true,
        collection,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar coleção:", error);

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
        message: "Erro ao criar coleção.",
      },
      { status: 500 }
    );
  }
}