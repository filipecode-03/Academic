import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedToken } from "@/src/lib/auth-guard";
import { reorderNavbarItemsSchema } from "@/src/schemas/navbar-item.schema";
import { reorderNavbarItems } from "@/src/services/navbar-item.service";

export async function PATCH(request: NextRequest) {
  if (!(await getAuthenticatedToken(request))?.id) return NextResponse.json({ message: "Não autorizado." }, { status: 401 });
  const result = reorderNavbarItemsSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  try { return NextResponse.json({ items: await reorderNavbarItems(result.data.itemIds) }); }
  catch (error) { return NextResponse.json({ message: error instanceof Error ? error.message : "Não foi possível reordenar os itens." }, { status: 400 }); }
}
