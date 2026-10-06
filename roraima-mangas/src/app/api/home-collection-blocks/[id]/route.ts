import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { updateHomeCollectionBlockSchema } from "@/src/schemas/home-collection-block.schema";
import { deleteHomeCollectionBlock, updateHomeCollectionBlock } from "@/src/services/home-collection-block.service";

type Context = { params: Promise<{ id: string }> };
export async function PATCH(request: NextRequest, context: Context) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const parsed = updateHomeCollectionBlockSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ message: "Dados inválidos.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  try { const { id } = await context.params; return NextResponse.json({ block: await updateHomeCollectionBlock(id, parsed.data) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível atualizar o bloco." }, { status: 400 }); }
}
export async function DELETE(request: NextRequest, context: Context) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  try { const { id } = await context.params; await deleteHomeCollectionBlock(id); return NextResponse.json({ success: true }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível excluir o bloco." }, { status: 400 }); }
}
