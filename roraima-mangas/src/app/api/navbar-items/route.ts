import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { createNavbarItemSchema } from "@/src/schemas/navbar-item.schema";
import { createNavbarItem, listNavbarItems } from "@/src/services/navbar-item.service";

export async function GET(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  return NextResponse.json({ items: await listNavbarItems() });
}

export async function POST(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = createNavbarItemSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  try { return NextResponse.json({ item: await createNavbarItem(result.data) }, { status: 201 }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível criar o item." }, { status: 400 }); }
}
