import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { reorderHomeCollectionBlocksSchema } from "@/src/schemas/home-collection-block.schema";
import { reorderHomeCollectionBlocks } from "@/src/services/home-collection-block.service";

export async function PATCH(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const parsed = reorderHomeCollectionBlocksSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ message: "Ordem inválida." }, { status: 400 });
  try { return NextResponse.json({ blocks: await reorderHomeCollectionBlocks(parsed.data.blockIds) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível reordenar os blocos." }, { status: 400 }); }
}
