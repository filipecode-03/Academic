import { prisma } from "@/src/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import {
  createHomeBannerSchema,
  updateHomeBannerSchema,
} from "@/src/schemas/home-banner.schema";
import { z } from "zod";

type CreateHomeBannerInput = z.infer<typeof createHomeBannerSchema>;
type UpdateHomeBannerInput = z.infer<typeof updateHomeBannerSchema>;
type BannerPosition = "FIRST" | "LAST";
type BannerTransaction = Prisma.TransactionClient;

const bannerInclude = {
  product: true,
  collection: true,
} as const;

export async function listHomeBanners() {
  return prisma.homeBanner.findMany({
    include: bannerInclude,
    orderBy: [
      { order: "asc" },
      { createdAt: "asc" },
      { id: "asc" },
    ],
  });
}

export async function getHomeBannerById(id: string) {
  return prisma.homeBanner.findUnique({
    where: { id },
    include: bannerInclude,
  });
}

export async function createHomeBanner(data: CreateHomeBannerInput) {
  return withSerializableTransaction(async (tx) => {
    await validateDestination(tx, data.destinationType, {
      productId: data.productId,
      collectionId: data.collectionId,
    });

    const currentBanners = await normalizeBannerOrders(tx);
    const position: BannerPosition =
      currentBanners.length === 0
        ? "FIRST"
        : data.position ?? "LAST";

    if (position === "FIRST") {
      for (let index = currentBanners.length - 1; index >= 0; index -= 1) {
        await tx.homeBanner.update({
          where: { id: currentBanners[index].id },
          data: { order: index + 1 },
        });
      }
    }

    return tx.homeBanner.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        image: data.image,
        order: position === "FIRST" ? 0 : currentBanners.length,
        active: data.active,
        destinationType: data.destinationType,
        productId: data.productId ?? null,
        collectionId: data.collectionId ?? null,
      },
      include: bannerInclude,
    });
  });
}

export async function updateHomeBanner(
  id: string,
  data: UpdateHomeBannerInput,
) {
  return withSerializableTransaction(async (tx) => {
    const existingBanner = await tx.homeBanner.findUnique({ where: { id } });
    if (!existingBanner) return null;

    const destinationType = data.destinationType ?? existingBanner.destinationType;
    const productId = data.productId !== undefined ? data.productId : existingBanner.productId;
    const collectionId = data.collectionId !== undefined ? data.collectionId : existingBanner.collectionId;

    await validateDestination(tx, destinationType, {
      productId,
      collectionId,
    });

    const destinationData = destinationType === "PRODUCT"
      ? { productId, collectionId: null }
      : destinationType === "COLLECTION"
        ? { productId: null, collectionId }
        : { productId: null, collectionId: null };

    const orderedBanners = await normalizeBannerOrders(tx);
    if (data.position) {
      const currentIndex = orderedBanners.findIndex((banner) => banner.id === id);
      const [movingBanner] = orderedBanners.splice(currentIndex, 1);
      if (data.position === "FIRST") {
        orderedBanners.unshift(movingBanner);
      } else {
        orderedBanners.push(movingBanner);
      }
      await assignSequentialOrders(tx, orderedBanners);
    }

    return tx.homeBanner.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.image !== undefined && { image: data.image }),
        ...(data.active !== undefined && { active: data.active }),
        destinationType,
        ...destinationData,
      },
      include: bannerInclude,
    });
  });
}

export async function reorderHomeBanners(bannerIds: string[]) {
  return withSerializableTransaction(async (tx) => {
    const currentBanners = await tx.homeBanner.findMany({
      select: { id: true },
    });
    const currentIds = new Set(currentBanners.map((banner) => banner.id));
    const requestedIds = new Set(bannerIds);

    if (
      bannerIds.length !== currentBanners.length ||
      requestedIds.size !== bannerIds.length ||
      bannerIds.some((id) => !currentIds.has(id))
    ) {
      throw new Error("A lista de banners mudou. Atualize a página e tente novamente.");
    }

    const orderedBanners = bannerIds.map((id) => ({ id }));
    await assignSequentialOrders(tx, orderedBanners);
    return tx.homeBanner.findMany({
      include: bannerInclude,
      orderBy: [{ order: "asc" }, { createdAt: "asc" }, { id: "asc" }],
    });
  });
}

export async function deleteHomeBanner(id: string) {
  return withSerializableTransaction(async (tx) => {
    const existingBanner = await tx.homeBanner.findUnique({ where: { id } });
    if (!existingBanner) return null;

    await tx.homeBanner.delete({ where: { id } });
    await normalizeBannerOrders(tx);
    return existingBanner;
  });
}

async function normalizeBannerOrders(tx: BannerTransaction) {
  const banners = await tx.homeBanner.findMany({
    select: { id: true },
    orderBy: [
      { order: "asc" },
      { createdAt: "asc" },
      { id: "asc" },
    ],
  });

  await assignSequentialOrders(tx, banners);
  return banners;
}

async function assignSequentialOrders(
  tx: BannerTransaction,
  banners: { id: string }[],
) {
  for (const [order, banner] of banners.entries()) {
    await tx.homeBanner.update({
      where: { id: banner.id },
      data: { order },
    });
  }
}

async function withSerializableTransaction<T>(
  operation: (tx: BannerTransaction) => Promise<T>,
): Promise<T> {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await prisma.$transaction(operation, {
        isolationLevel: "Serializable",
      });
    } catch (error) {
      const isSerializationConflict =
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "P2034";

      if (!isSerializationConflict || attempt >= 2) throw error;
    }
  }
}

async function validateDestination(
  db: Pick<BannerTransaction, "product" | "collection">,
  destinationType: CreateHomeBannerInput["destinationType"],
  ids: {
    productId?: string | null;
    collectionId?: string | null;
  },
) {
  if (destinationType === "NONE") {
    if (ids.productId || ids.collectionId) {
      throw new Error("Um banner sem destino não pode possuir relacionamento.");
    }
    return;
  }

  if (destinationType === "PRODUCT") {
    if (!ids.productId) throw new Error("productId é obrigatório.");
    const product = await db.product.findUnique({
      where: { id: ids.productId },
      select: { id: true },
    });
    if (!product) throw new Error("Produto não encontrado.");
    return;
  }

  if (!ids.collectionId) throw new Error("collectionId é obrigatório.");
  const collection = await db.collection.findUnique({
    where: { id: ids.collectionId },
    select: { id: true },
  });
  if (!collection) throw new Error("Coleção não encontrada.");
}
