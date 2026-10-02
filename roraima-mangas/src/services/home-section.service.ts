import { prisma } from "@/src/lib/prisma";
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
  const existingHomeSection =
    await prisma.homeSection.findUnique({
      where: {
        id,
      },
    });

  if (!existingHomeSection) {
    return null;
  }

  const type = data.type ?? existingHomeSection.type;

  let categoryId =
    data.categoryId !== undefined
      ? data.categoryId
      : existingHomeSection.categoryId;

  let collectionId =
    data.collectionId !== undefined
      ? data.collectionId
      : existingHomeSection.collectionId;

  if (type === "MANUAL") {
    categoryId = null;
    collectionId = null;
  }

  if (type === "CATEGORY") {
    collectionId = null;
  }

  if (type === "COLLECTION") {
    categoryId = null;
  }

  const homeSection = await prisma.homeSection.update({
    where: {
      id,
    },
    data: {
      ...(data.title !== undefined && {
        title: data.title,
      }),

      ...(data.type !== undefined && {
        type: data.type,
      }),

      ...(data.order !== undefined && {
        order: data.order,
      }),

      ...(data.active !== undefined && {
        active: data.active,
      }),

      categoryId,
      collectionId,
    },
    include: homeSectionInclude,
  });

  return homeSection;
}

export async function deleteHomeSection(id: string) {
  const homeSection = await prisma.homeSection.delete({
    where: {
      id,
    },
  });

  return homeSection;
}