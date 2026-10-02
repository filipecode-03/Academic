import { NextRequest, NextResponse } from "next/server";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

import {
  createImageUploadUrl,
} from "@/src/services/storage.service";

function createObjectKey(
  folder: string,
  fileName: string
) {
  const extension =
    fileName.split(".").pop()?.toLowerCase() ?? "jpg";

  const id = crypto.randomUUID();

  return `${folder}/${id}.${extension}`;
}

export async function POST(
  request: NextRequest
) {
  try {
    const token =
      await getAuthenticatedToken(request);

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

    const {
      fileName,
      contentType,
      folder = "products",
    } = body;

    if (
      typeof fileName !== "string" ||
      !fileName.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "fileName é obrigatório.",
        },
        { status: 400 }
      );
    }

    if (
      typeof contentType !== "string" ||
      !contentType.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "contentType é obrigatório.",
        },
        { status: 400 }
      );
    }

    const allowedFolders = [
      "products",
      "banners",
    ];

    if (!allowedFolders.includes(folder)) {
      return NextResponse.json(
        {
          success: false,
          message: "Pasta de upload inválida.",
        },
        { status: 400 }
      );
    }

    const key = createObjectKey(
      folder,
      fileName
    );

    const result =
      await createImageUploadUrl(
        key,
        contentType
      );

    return NextResponse.json({
      success: true,
      ...result,
      key,
    });
  } catch (error) {
    console.error(
      "Erro ao gerar URL de upload:",
      error
    );

    if (
      error instanceof Error &&
      error.message ===
        "Tipo de imagem não permitido."
    ) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Erro ao preparar upload da imagem.",
      },
      { status: 500 }
    );
  }
}