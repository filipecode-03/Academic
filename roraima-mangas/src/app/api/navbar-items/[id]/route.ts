import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { updateNavbarItemSchema } from "@/src/schemas/navbar-item.schema";
import { deleteNavbarItem, updateNavbarItem } from "@/src/services/navbar-item.service";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = updateNavbarItemSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  try { const { id } = await context.params; return NextResponse.json({ item: await updateNavbarItem(id, result.data) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível atualizar o item." }, { status: 400 }); }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  try { const { id } = await context.params; await deleteNavbarItem(id); return NextResponse.json({ success: true }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível excluir o item." }, { status: 400 }); }
}
