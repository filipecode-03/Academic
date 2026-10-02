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
  const homeSection = await prisma.homeSection.findUnique({
    where: {
      id: homeSectionId,
    },
  });

  if (!homeSection) {
    throw new Error("Seção da Home não encontrada.");
  }

  if (homeSection.type !== "MANUAL") {
    throw new Error(
      "Produtos só podem ser adicionados manualmente em seções do tipo MANUAL."
    );
  }

  const product = await prisma.product.findUnique({
    where: {
      id: data.productId,
    },
  });

  if (!product) {
    throw new Error("Produto não encontrado.");
  }

  const homeSectionProduct =
    await prisma.homeSectionProduct.create({
      data: {
        homeSectionId,
        productId: data.productId,
        order: data.order,
      },
      include: {
        product: true,
      },
    });

  return homeSectionProduct;
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