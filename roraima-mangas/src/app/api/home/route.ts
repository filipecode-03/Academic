import { NextResponse } from "next/server";

import { getHomeData } from "@/src/services/home.service";

export async function GET() {
  try {
    const home = await getHomeData();

    return NextResponse.json({
      success: true,
      home,
    });
  } catch (error) {
    console.error("Erro ao buscar dados da Home:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar dados da Home.",
      },
      { status: 500 }
    );
  }
}