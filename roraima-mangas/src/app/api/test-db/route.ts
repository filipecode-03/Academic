import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Erro ao consultar o banco:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao conectar com o banco de dados.",
      },
      { status: 500 }
    );
  }
}