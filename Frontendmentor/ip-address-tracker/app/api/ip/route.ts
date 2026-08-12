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
      return NextResponse.json(
        { error: "IPify API key is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch IP information" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}