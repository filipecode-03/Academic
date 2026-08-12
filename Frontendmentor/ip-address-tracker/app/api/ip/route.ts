import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const ip = request.nextUrl.searchParams.get("ip");

    if (!ip) {
      return NextResponse.json(
        { error: "IP address is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.IPIFY_API_KEY;

    if (!apiKey) {
      console.error("IPIFY_API_KEY is not configured");

      return NextResponse.json(
        { error: "IPify API key is not configured" },
        { status: 500 }
      );
    }

    const url = new URL("https://geo.ipify.org/api/v2/country,city");

    url.searchParams.set("apiKey", apiKey);
    url.searchParams.set("ipAddress", ip);

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("IPify error:", data);

      return NextResponse.json(
        {
          error: data.messages || "IPify request failed",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}