import { prisma } from "@/src/lib/prisma";

const blockInclude = { collection: { select: { id: true, name: true, slug: true } } };

export async function listHomeCollectionBlocks() {
  return prisma.homeCollectionBlock.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: blockInclude });
}
export async function createHomeCollectionBlock(data: { title: string; image: string; collectionId: string; active: boolean }) {
  return prisma.$transaction(async (tx) => {
    const last = await tx.homeCollectionBlock.aggregate({ _max: { order: true } });
    return tx.homeCollectionBlock.create({ data: { ...data, order: (last._max.order ?? -1) + 1 }, include: blockInclude });
  }, { isolationLevel: "Serializable" });
}
export async function updateHomeCollectionBlock(id: string, data: { title?: string; image?: string; collectionId?: string; active?: boolean }) {
  return prisma.homeCollectionBlock.update({ where: { id }, data, include: blockInclude });
}
export async function deleteHomeCollectionBlock(id: string) {
  return prisma.$transaction(async (tx) => {
    const deleted = await tx.homeCollectionBlock.delete({ where: { id } });
    const remaining = await tx.homeCollectionBlock.findMany({ select: { id: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
    for (const [order, block] of remaining.entries()) await tx.homeCollectionBlock.update({ where: { id: block.id }, data: { order } });
    return deleted;
  });
}
export async function reorderHomeCollectionBlocks(blockIds: string[]) {
  return prisma.$transaction(async (tx) => {
    const current = await tx.homeCollectionBlock.findMany({ select: { id: true } });
    const ids = new Set(current.map(({ id }) => id));
    if (ids.size !== blockIds.length || blockIds.length !== current.length || blockIds.some((id) => !ids.has(id))) throw new Error("A lista de blocos mudou. Atualize a página e tente novamente.");
    for (const [order, id] of blockIds.entries()) await tx.homeCollectionBlock.update({ where: { id }, data: { order } });
    return tx.homeCollectionBlock.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }], include: blockInclude });
  }, { isolationLevel: "Serializable" });
}
