import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { createNavbarItemSchema, reorderNavbarItemsSchema } from "@/src/schemas/navbar-item.schema";
import { createNavbarChild, reorderNavbarItems } from "@/src/services/navbar-item.service";

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = createNavbarItemSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  try { const { id } = await context.params; return NextResponse.json({ item: await createNavbarChild(id, result.data) }, { status: 201 }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível criar o link." }, { status: 400 }); }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = reorderNavbarItemsSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  try { const { id } = await context.params; return NextResponse.json({ items: await reorderNavbarItems(result.data.itemIds, id) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível reordenar os links." }, { status: 400 }); }
}
