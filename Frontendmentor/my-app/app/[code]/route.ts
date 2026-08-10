import { NextResponse } from "next/server";
import { getOriginalUrl } from "@/lib/shortener";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  console.log("Código recebido:", code);

  const originalUrl = getOriginalUrl(code);

  console.log("URL original encontrada:", originalUrl);

  if (!originalUrl) {
    return new NextResponse("Short link not found.", {
      status: 404,
    });
  }

  return NextResponse.redirect(originalUrl, {
    status: 307,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
