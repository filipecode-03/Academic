import { prisma } from "@/src/lib/prisma";
import { createNavbarItemSchema, existingNavbarItemSchema, type CreateNavbarItemInput, type UpdateNavbarItemInput } from "@/src/schemas/navbar-item.schema";
import type { Prisma } from "@/generated/prisma/client";

const adminInclude = {
  collection: { select: { id: true, name: true, slug: true } },
  children: { orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: { collection: { select: { id: true, name: true, slug: true } } } },
} satisfies Prisma.NavbarItemInclude;

export async function listNavbarItems() {
  return prisma.navbarItem.findMany({ where: { parentId: null }, orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: adminInclude });
}

export async function getPublicNavbarItems() {
  const items = await prisma.navbarItem.findMany({
    where: { active: true, parentId: null },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    include: { collection: { select: { slug: true } }, children: { where: { active: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: { collection: { select: { slug: true } } } } },
  });

  const result: ({ id: string; title: string; type: "DROPDOWN"; children: { id: string; title: string; href: string; external: boolean }[] } | { id: string; title: string; type: "LINK"; href: string; external: boolean; children: [] })[] = [];
  for (const item of items) {
    if (item.type === "DROPDOWN") {
      const children = item.children.flatMap((child) => {
        const href = destinationHref(child.destinationType, child.collection?.slug, child.externalUrl);
        return href ? [{ id: child.id, title: child.title, href, external: child.destinationType === "EXTERNAL" }] : [];
      });
      if (children.length) result.push({ id: item.id, title: item.title, type: "DROPDOWN", children });
      continue;
    }
    const href = destinationHref(item.destinationType, item.collection?.slug, item.externalUrl);
    if (href) result.push({ id: item.id, title: item.title, type: "LINK", href, external: item.destinationType === "EXTERNAL", children: [] });
  }
  return result;
}

function destinationHref(type: string | null, collectionSlug?: string | null, externalUrl?: string | null) {
  if (type === "COLLECTION") return collectionSlug ? `/colecoes/${collectionSlug}` : null;
  if (type === "ALL_PRODUCTS") return "/produtos";
  if (type === "NEW_PRODUCTS") return "/produtos/novos";
  if (type === "FEATURED_PRODUCTS") return "/produtos/destaques";
  if (type === "EXTERNAL" && externalUrl && /^https?:\/\//i.test(externalUrl)) {
    try {
      if (/^\/admin(?:\/|$)/i.test(decodeURIComponent(new URL(externalUrl).pathname))) return null;
      return externalUrl;
    } catch { return null; }
  }
  return null;
}

export async function createNavbarItem(data: CreateNavbarItemInput) {
  const result = createNavbarItemSchema.safeParse(data);
  if (!result.success) throw new Error(result.error.issues[0]?.message ?? "Dados inválidos.");
  if (result.data.destinationType === "COLLECTION") await assertCollectionExists(result.data.collectionId);
  return prisma.navbarItem.create({ data: result.data as Prisma.NavbarItemUncheckedCreateInput, include: adminInclude });
}

export async function updateNavbarItem(id: string, data: UpdateNavbarItemInput) {
  const existing = await prisma.navbarItem.findUnique({ where: { id }, include: { children: { select: { id: true } } } });
  if (!existing || existing.parentId) throw new Error("Item da Navbar não encontrado.");
  const nextType = data.type ?? existing.type;
  if (nextType === "LINK" && existing.children.length) throw new Error("Remova os itens filhos antes de transformar este dropdown em link.");
  const merged = {
    title: data.title ?? existing.title,
    type: nextType,
    active: data.active ?? existing.active,
    order: data.order ?? existing.order,
    destinationType: nextType === "DROPDOWN" ? null : (data.destinationType !== undefined ? data.destinationType : existing.destinationType),
    collectionId: nextType === "DROPDOWN" ? null : (data.collectionId !== undefined ? data.collectionId : existing.collectionId),
    externalUrl: nextType === "DROPDOWN" ? null : (data.externalUrl !== undefined ? data.externalUrl : existing.externalUrl),
  };
  const result = existingNavbarItemSchema.safeParse(merged);
  if (!result.success) throw new Error(result.error.issues[0]?.message ?? "Dados inválidos.");
  if (result.data.destinationType === "COLLECTION") {
    if (result.data.collectionId) await assertCollectionExists(result.data.collectionId);
    else if (existing.destinationType !== "COLLECTION" || existing.collectionId !== null || data.collectionId !== undefined) throw new Error("Selecione uma coleção.");
  }
  return prisma.navbarItem.update({ where: { id }, data: result.data as Prisma.NavbarItemUncheckedUpdateInput, include: adminInclude });
}

export async function deleteNavbarItem(id: string) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.navbarItem.findUnique({ where: { id }, select: { parentId: true } });
    if (!existing || existing.parentId) throw new Error("Item principal da Navbar não encontrado.");
    const item = await tx.navbarItem.delete({ where: { id } });
    await normalizeNavbarOrder(tx, null);
    return item;
  });
}

export async function createNavbarChild(parentId: string, data: CreateNavbarItemInput) {
  const parent = await prisma.navbarItem.findUnique({ where: { id: parentId }, select: { type: true, parentId: true } });
  if (!parent || parent.parentId || parent.type !== "DROPDOWN") throw new Error("Escolha um dropdown válido para adicionar itens filhos.");
  if (data.type !== "LINK") throw new Error("Submenus aceitam apenas links simples.");
  const result = createNavbarItemSchema.safeParse(data);
  if (!result.success) throw new Error(result.error.issues[0]?.message ?? "Dados inválidos.");
  if (result.data.destinationType === "COLLECTION") await assertCollectionExists(result.data.collectionId);
  return prisma.navbarItem.create({ data: { ...result.data, parentId }, include: adminInclude });
}

export async function updateNavbarChild(parentId: string, childId: string, data: UpdateNavbarItemInput) {
  const child = await prisma.navbarItem.findFirst({ where: { id: childId, parentId }, include: { collection: { select: { id: true, name: true, slug: true } }, children: true } });
  if (!child) throw new Error("Link filho não encontrado.");
  if (data.type === "DROPDOWN") throw new Error("Submenus não podem conter novos níveis.");
  const merged = { title: data.title ?? child.title, type: "LINK" as const, active: data.active ?? child.active, order: data.order ?? child.order,
    destinationType: data.destinationType !== undefined ? data.destinationType : child.destinationType,
    collectionId: data.collectionId !== undefined ? data.collectionId : child.collectionId,
    externalUrl: data.externalUrl !== undefined ? data.externalUrl : child.externalUrl };
  const result = existingNavbarItemSchema.safeParse(merged);
  if (!result.success) throw new Error(result.error.issues[0]?.message ?? "Dados inválidos.");
  if (result.data.destinationType === "COLLECTION") {
    if (result.data.collectionId) await assertCollectionExists(result.data.collectionId);
    else if (child.destinationType !== "COLLECTION" || child.collectionId !== null || data.collectionId !== undefined) throw new Error("Selecione uma coleção.");
  }
  return prisma.navbarItem.update({ where: { id: childId }, data: result.data as Prisma.NavbarItemUncheckedUpdateInput, include: adminInclude });
}

export async function deleteNavbarChild(parentId: string, childId: string) {
  return prisma.$transaction(async (tx) => {
    const item = await tx.navbarItem.delete({ where: { id: childId, parentId } });
    await normalizeNavbarOrder(tx, parentId);
    return item;
  });
}

export async function reorderNavbarItems(itemIds: string[], parentId: string | null = null) {
  return prisma.$transaction(async (tx) => {
    const current = await tx.navbarItem.findMany({ where: { parentId }, select: { id: true } });
    const ids = new Set(current.map(({ id }) => id));
    if (itemIds.length !== current.length || new Set(itemIds).size !== itemIds.length || itemIds.some((id) => !ids.has(id))) throw new Error("A lista de links mudou. Atualize a página e tente novamente.");
    for (const [order, id] of itemIds.entries()) await tx.navbarItem.update({ where: { id }, data: { order } });
    return tx.navbarItem.findMany({ where: { parentId }, orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: adminInclude });
  }, { isolationLevel: "Serializable" });
}

async function assertCollectionExists(collectionId?: string | null): Promise<void> {
  if (!collectionId || !await prisma.collection.findUnique({ where: { id: collectionId }, select: { id: true } })) throw new Error("A coleção selecionada não existe mais.");
}

async function normalizeNavbarOrder(tx: Prisma.TransactionClient, parentId: string | null) {
  const remaining = await tx.navbarItem.findMany({ where: { parentId }, orderBy: [{ order: "asc" }, { createdAt: "asc" }], select: { id: true } });
  for (const [order, item] of remaining.entries()) await tx.navbarItem.update({ where: { id: item.id }, data: { order } });
}
