import { prisma } from "@/src/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import type { CreateHomeSectionInput, UpdateHomeSectionInput } from "@/src/schemas/home-section.schema";

const homeSectionInclude = {
  collection: true,
  products: { orderBy: { order: "asc" as const }, take: 10, include: { product: true } },
};

export async function createHomeSection(data: CreateHomeSectionInput) {
  return prisma.homeSection.create({ data: { title: data.title, type: data.type, order: data.order, active: data.active, collectionId: data.type === "COLLECTION" ? data.collectionId : null }, include: homeSectionInclude });
}
export async function getHomeSections() {
  return prisma.homeSection.findMany({ orderBy: { order: "asc" }, include: homeSectionInclude });
}
export async function getHomeSectionById(id: string) {
  return prisma.homeSection.findUnique({ where: { id }, include: homeSectionInclude });
}
export async function updateHomeSection(id: string, data: UpdateHomeSectionInput) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.homeSection.findUnique({ where: { id } });
    if (!existing) return null;
    const type = data.type ?? existing.type;
    if (type !== "MANUAL" && existing.type === "MANUAL") await tx.homeSectionProduct.deleteMany({ where: { homeSectionId: id } });
    return tx.homeSection.update({ where: { id }, data: {
      ...(data.title !== undefined && { title: data.title }), ...(data.type !== undefined && { type: data.type }),
      ...(data.order !== undefined && { order: data.order }), ...(data.active !== undefined && { active: data.active }),
      collectionId: type === "COLLECTION" ? (data.collectionId !== undefined ? data.collectionId : existing.collectionId) : null,
    }, include: homeSectionInclude });
  }, { isolationLevel: "Serializable" });
}
export async function deleteHomeSection(id: string) {
  return prisma.$transaction(async (tx) => {
    const section = await tx.homeSection.delete({ where: { id } });
    const remaining = await tx.homeSection.findMany({ select: { id: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }, { id: "asc" }] });
    await assignSequentialOrders(tx, remaining);
    return section;
  });
}
export async function reorderHomeSections(sectionIds: string[]) {
  return prisma.$transaction(async (tx) => {
    const current = await tx.homeSection.findMany({ select: { id: true } });
    const currentIds = new Set(current.map(({ id }) => id));
    if (sectionIds.length !== current.length || new Set(sectionIds).size !== sectionIds.length || sectionIds.some((id) => !currentIds.has(id))) throw new Error("A lista de seções mudou. Atualize a página e tente novamente.");
    await assignSequentialOrders(tx, sectionIds.map((id) => ({ id })));
    return tx.homeSection.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }, { id: "asc" }], include: homeSectionInclude });
  }, { isolationLevel: "Serializable" });
}
async function assignSequentialOrders(tx: Prisma.TransactionClient, sections: { id: string }[]) {
  for (const [order, section] of sections.entries()) await tx.homeSection.update({ where: { id: section.id }, data: { order } });
}
