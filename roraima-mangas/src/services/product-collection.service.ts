import { prisma } from "@/src/lib/prisma";

export async function addProductToCollection(
  collectionId: string,
  productId: string
) {
  const productCollection = await prisma.productCollection.create({
    data: {
      collectionId,
      productId,
    },
  });

  return productCollection;
}

export async function getProductsByCollectionId(collectionId: string) {
  const products = await prisma.productCollection.findMany({
    where: {
      collectionId,
    },
    include: {
      product: true,
    },
  });

  return products;
}

export async function removeProductFromCollection(
  collectionId: string,
  productId: string
) {
  const productCollection = await prisma.productCollection.delete({
    where: {
      productId_collectionId: {
        productId,
        collectionId,
      },
    },
  });

  return productCollection;
}