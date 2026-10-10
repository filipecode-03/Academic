import { NextResponse } from "next/server";
import { getPublicNavbarItems } from "@/src/services/navbar-item.service";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ items: await getPublicNavbarItems() });
}
