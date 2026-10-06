import { prisma } from "@/src/lib/prisma";
import type {
  CreateHomeSectionProductInput,
} from "@/src/schemas/home-section-product.schema";

export async function getHomeSectionProducts(
  homeSectionId: string
) {
  const products =
    await prisma.homeSectionProduct.findMany({
      where: {
        homeSectionId,
      },
      orderBy: {
        order: "asc",
      },
      include: {
        product: true,
      },
    });

  return products;
}

export async function addProductToHomeSection(
  homeSectionId: string,
  data: CreateHomeSectionProductInput
) {
  return prisma.$transaction(async (tx) => {
    const homeSection = await tx.homeSection.findUnique({ where: { id: homeSectionId } });
    if (!homeSection) throw new Error("Seção da Home não encontrada.");
    if (homeSection.type !== "MANUAL") throw new Error("Produtos só podem ser adicionados manualmente em seções do tipo MANUAL.");
    const product = await tx.product.findUnique({ where: { id: data.productId } });
    if (!product) throw new Error("Produto não encontrado.");
    const existing = await tx.homeSectionProduct.findUnique({ where: { homeSectionId_productId: { homeSectionId, productId: data.productId } } });
    if (!existing && await tx.homeSectionProduct.count({ where: { homeSectionId } }) >= 10) throw new Error("Cada seção pode ter no máximo 10 produtos.");
    return tx.homeSectionProduct.upsert({
      where: { homeSectionId_productId: { homeSectionId, productId: data.productId } },
      create: { homeSectionId, productId: data.productId, order: data.order },
      update: { order: data.order },
      include: { product: true },
    });
  }, { isolationLevel: "Serializable" });
}

export async function removeProductFromHomeSection(
  homeSectionId: string,
  productId: string
) {
  const relation =
    await prisma.homeSectionProduct.findUnique({
      where: {
        homeSectionId_productId: {
          homeSectionId,
          productId,
        },
      },
    });

  if (!relation) {
    return null;
  }

  await prisma.homeSectionProduct.delete({
    where: {
      homeSectionId_productId: {
        homeSectionId,
        productId,
      },
    },
  });

  return relation;
}
