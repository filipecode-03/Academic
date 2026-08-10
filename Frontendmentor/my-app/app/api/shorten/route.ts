import { NextResponse } from "next/server";
import { createShortLink } from "@/lib/shortener";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const url =
      typeof body.url === "string"
        ? body.url.trim()
        : "";

    if (!url) {
      return NextResponse.json(
        {
          error: "URL is required.",
        },
        {
          status: 400,
        }
      );
    }

    let parsedUrl: URL;

    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json(
        {
          error: "Invalid URL.",
        },
        {
          status: 400,
        }
      );
    }

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return NextResponse.json(
        {
          error: "Only HTTP and HTTPS URLs can be shortened.",
        },
        {
          status: 400,
        }
      );
    }

    const code = createShortLink(parsedUrl.toString());

    const baseUrl = new URL(request.url).origin;

    const shortenedUrl = `${baseUrl}/${code}`;

    return NextResponse.json(
      {
        result_url: shortenedUrl,
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Shorten API error:", error);

    return NextResponse.json(
      {
        error: "Unable to shorten the URL.",
      },
      {
        status: 500,
      }
    );
  }
}
