import { prisma } from "@/src/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import type {
  CreateHomeSectionInput,
  UpdateHomeSectionInput,
} from "@/src/schemas/home-section.schema";

const homeSectionInclude = {
  category: true,
  collection: true,
  products: {
    orderBy: {
      order: "asc" as const,
    },
    include: {
      product: true,
    },
  },
};

export async function createHomeSection(
  data: CreateHomeSectionInput
) {
  const homeSection = await prisma.homeSection.create({
    data: {
      title: data.title,
      type: data.type,
      order: data.order,
      active: data.active,
      categoryId: data.categoryId,
      collectionId: data.collectionId,
    },
    include: homeSectionInclude,
  });

  return homeSection;
}

export async function getHomeSections() {
  const homeSections = await prisma.homeSection.findMany({
    orderBy: {
      order: "asc",
    },
    include: homeSectionInclude,
  });

  return homeSections;
}

export async function getHomeSectionById(id: string) {
  const homeSection = await prisma.homeSection.findUnique({
    where: {
      id,
    },
    include: homeSectionInclude,
  });

  return homeSection;
}

export async function updateHomeSection(
  id: string,
  data: UpdateHomeSectionInput
) {
  return prisma.$transaction(async (tx) => {
    const existingHomeSection = await tx.homeSection.findUnique({
      where: { id },
    });

    if (!existingHomeSection) {
      return null;
    }

    const type = data.type ?? existingHomeSection.type;
    let categoryId = data.categoryId !== undefined
      ? data.categoryId
      : existingHomeSection.categoryId;
    let collectionId = data.collectionId !== undefined
      ? data.collectionId
      : existingHomeSection.collectionId;

    if (type === "MANUAL") {
      categoryId = null;
      collectionId = null;
    }
    if (type === "CATEGORY") collectionId = null;
    if (type === "COLLECTION") categoryId = null;

    if (type !== "MANUAL" && existingHomeSection.type === "MANUAL") {
      await tx.homeSectionProduct.deleteMany({ where: { homeSectionId: id } });
    }

    return tx.homeSection.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.type !== undefined && { type: data.type }),
        ...(data.order !== undefined && { order: data.order }),
        ...(data.active !== undefined && { active: data.active }),
        categoryId,
        collectionId,
      },
      include: homeSectionInclude,
    });
  }, { isolationLevel: "Serializable" });
}

export async function deleteHomeSection(id: string) {
  return prisma.$transaction(async (tx) => {
    const homeSection = await tx.homeSection.delete({ where: { id } });
    const sections = await tx.homeSection.findMany({
      select: { id: true },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }, { id: "asc" }],
    });
    await assignSequentialOrders(tx, sections);
    return homeSection;
  });
}

export async function reorderHomeSections(sectionIds: string[]) {
  return prisma.$transaction(async (tx) => {
    const sections = await tx.homeSection.findMany({ select: { id: true } });
    const currentIds = new Set(sections.map(({ id }) => id));

    if (
      sectionIds.length !== sections.length ||
      new Set(sectionIds).size !== sectionIds.length ||
      sectionIds.some((id) => !currentIds.has(id))
    ) {
      throw new Error("A lista de seções mudou. Atualize a página e tente novamente.");
    }

    await assignSequentialOrders(tx, sectionIds.map((id) => ({ id })));
    return tx.homeSection.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }, { id: "asc" }],
      include: homeSectionInclude,
    });
  }, { isolationLevel: "Serializable" });
}

async function assignSequentialOrders(
  tx: Prisma.TransactionClient,
  sections: { id: string }[],
) {
  for (const [order, section] of sections.entries()) {
    await tx.homeSection.update({ where: { id: section.id }, data: { order } });
  }
}
