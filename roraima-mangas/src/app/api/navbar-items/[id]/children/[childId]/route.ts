import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { updateNavbarItemSchema } from "@/src/schemas/navbar-item.schema";
import { deleteNavbarChild, updateNavbarChild } from "@/src/services/navbar-item.service";

type RouteContext = { params: Promise<{ id: string; childId: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = updateNavbarItemSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  try { const { id, childId } = await context.params; return NextResponse.json({ item: await updateNavbarChild(id, childId, result.data) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível atualizar o link." }, { status: 400 }); }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  try { const { id, childId } = await context.params; await deleteNavbarChild(id, childId); return NextResponse.json({ success: true }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível excluir o link." }, { status: 400 }); }
}
