import { prisma } from "@/src/lib/prisma";
import {
  createHomeBannerSchema,
  updateHomeBannerSchema,
} from "@/src/schemas/home-banner.schema";
import { z } from "zod";

type CreateHomeBannerInput = z.infer<typeof createHomeBannerSchema>;
type UpdateHomeBannerInput = z.infer<typeof updateHomeBannerSchema>;

const bannerInclude = {
  product: true,
  category: true,
  collection: true,
} as const;

export async function listHomeBanners() {
  return prisma.homeBanner.findMany({
    include: bannerInclude,
    orderBy: {
      order: "asc",
    },
  });
}

export async function getHomeBannerById(id: string) {
  return prisma.homeBanner.findUnique({
    where: { id },
    include: bannerInclude,
  });
}

export async function createHomeBanner(data: CreateHomeBannerInput) {
  await validateDestination(data.destinationType, {
    productId: data.productId,
    categoryId: data.categoryId,
    collectionId: data.collectionId,
  });

  return prisma.homeBanner.create({
    data: {
      image: data.image,
      order: data.order,
      active: data.active,
      destinationType: data.destinationType,
      productId: data.productId ?? null,
      categoryId: data.categoryId ?? null,
      collectionId: data.collectionId ?? null,
    },
    include: bannerInclude,
  });
}

export async function updateHomeBanner(
  id: string,
  data: UpdateHomeBannerInput,
) {
  const existingBanner = await prisma.homeBanner.findUnique({
    where: { id },
  });

  if (!existingBanner) {
    return null;
  }

  const destinationType =
    data.destinationType ?? existingBanner.destinationType;

  const productId =
    data.productId !== undefined
      ? data.productId
      : existingBanner.productId;

  const categoryId =
    data.categoryId !== undefined
      ? data.categoryId
      : existingBanner.categoryId;

  const collectionId =
    data.collectionId !== undefined
      ? data.collectionId
      : existingBanner.collectionId;

  await validateDestination(destinationType, {
    productId,
    categoryId,
    collectionId,
  });

  const destinationData =
    destinationType === "PRODUCT"
      ? {
          productId,
          categoryId: null,
          collectionId: null,
        }
      : destinationType === "CATEGORY"
        ? {
            productId: null,
            categoryId,
            collectionId: null,
          }
        : destinationType === "COLLECTION"
          ? {
              productId: null,
              categoryId: null,
              collectionId,
            }
          : {
              productId: null,
              categoryId: null,
              collectionId: null,
            };

  return prisma.homeBanner.update({
    where: { id },
    data: {
      ...(data.image !== undefined && {
        image: data.image,
      }),
      ...(data.order !== undefined && {
        order: data.order,
      }),
      ...(data.active !== undefined && {
        active: data.active,
      }),
      destinationType,
      ...destinationData,
    },
    include: bannerInclude,
  });
}

export async function deleteHomeBanner(id: string) {
  const existingBanner = await prisma.homeBanner.findUnique({
    where: { id },
  });

  if (!existingBanner) {
    return null;
  }

  await prisma.homeBanner.delete({
    where: { id },
  });

  return existingBanner;
}

async function validateDestination(
  destinationType: CreateHomeBannerInput["destinationType"],
  ids: {
    productId?: string | null;
    categoryId?: string | null;
    collectionId?: string | null;
  },
) {
  if (destinationType === "NONE") {
    if (ids.productId || ids.categoryId || ids.collectionId) {
      throw new Error(
        "Um banner sem destino não pode possuir relacionamento.",
      );
    }

    return;
  }

  if (destinationType === "PRODUCT") {
    if (!ids.productId) {
      throw new Error("productId é obrigatório.");
    }

    const product = await prisma.product.findUnique({
      where: { id: ids.productId },
      select: { id: true },
    });

    if (!product) {
      throw new Error("Produto não encontrado.");
    }

    return;
  }

  if (destinationType === "CATEGORY") {
    if (!ids.categoryId) {
      throw new Error("categoryId é obrigatório.");
    }

    const category = await prisma.category.findUnique({
      where: { id: ids.categoryId },
      select: { id: true },
    });

    if (!category) {
      throw new Error("Categoria não encontrada.");
    }

    return;
  }

  if (destinationType === "COLLECTION") {
    if (!ids.collectionId) {
      throw new Error("collectionId é obrigatório.");
    }

    const collection = await prisma.collection.findUnique({
      where: { id: ids.collectionId },
      select: { id: true },
    });

    if (!collection) {
      throw new Error("Coleção não encontrada.");
    }
  }
}