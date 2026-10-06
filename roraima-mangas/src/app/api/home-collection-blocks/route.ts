import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { createHomeCollectionBlockSchema } from "@/src/schemas/home-collection-block.schema";
import { createHomeCollectionBlock, listHomeCollectionBlocks } from "@/src/services/home-collection-block.service";

export async function GET(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  return NextResponse.json({ blocks: await listHomeCollectionBlocks() });
}
export async function POST(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = createHomeCollectionBlockSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos.", errors: result.error.flatten().fieldErrors }, { status: 400 });
  try { return NextResponse.json({ block: await createHomeCollectionBlock(result.data) }, { status: 201 }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível criar o bloco." }, { status: 400 }); }
}
