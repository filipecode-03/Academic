import { NextResponse } from "next/server";

import {
  addProductToCollection,
  getProductsByCollectionId,
} from "@/src/services/product-collection.service";

import { getCollectionById } from "@/src/services/collection.service";
import { getProductById } from "@/src/services/product.service";

import { addProductToCollectionSchema } from "@/src/schemas/product-collection.schema";

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
    const { id: collectionId } = await context.params;

    const collection = await getCollectionById(collectionId);

    if (!collection) {
      return NextResponse.json(
        {
          success: false,
          message: "Coleção não encontrada.",
        },
        { status: 404 }
      );
    }

    const products = await getProductsByCollectionId(collectionId);

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Erro ao buscar produtos da coleção:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar produtos da coleção.",
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  context: RouteContext
) {
  try {
    const { id: collectionId } = await context.params;

    const body = await request.json();

    const result = addProductToCollectionSchema.safeParse(body);

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

    const { productId } = result.data;

    const collection = await getCollectionById(collectionId);

    if (!collection) {
      return NextResponse.json(
        {
          success: false,
          message: "Coleção não encontrada.",
        },
        { status: 404 }
      );
    }

    const product = await getProductById(productId);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Produto não encontrado.",
        },
        { status: 404 }
      );
    }

    const productCollection = await addProductToCollection(
      collectionId,
      productId
    );

    return NextResponse.json(
      {
        success: true,
        productCollection,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao adicionar produto à coleção:", error);

    if (isPrismaUniqueConstraintError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: "O produto já está associado a esta coleção.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao adicionar produto à coleção.",
      },
      { status: 500 }
    );
  }
}