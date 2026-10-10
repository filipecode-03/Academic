import { prisma } from "@/src/lib/prisma";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "@/src/schemas/product.schema";
import { createUniqueSlug } from "@/src/lib/slug";
import type { Prisma } from "@/generated/prisma/client";

const productInclude = {
  images: {
    orderBy: {
      order: "asc" as const,
    },
  },
  collections: { include: { collection: true } },
};

export async function createProduct(data: CreateProductInput) {
  const { collectionIds, images, details, ...fields } = data;
  const slug = await createUniqueSlug("product", data.name);
  const product = await prisma.product.create({
    data: {
      ...fields,
      slug,
      details: details as Prisma.InputJsonValue,
      collections: { create: collectionIds.map((collectionId) => ({ collectionId })) },

      images: {
        create: images.map((image) => ({
          image: image.image,
          order: image.order,
        })),
      },
    },
    include: productInclude,
  });

  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: productInclude,
  });

  return products;
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: productInclude,
  });

  return product;
}

export async function updateProduct(
  id: string,
  data: UpdateProductInput
) {
  const { images, collectionIds, details, ...productData } = data;

  const product = await prisma.$transaction(async (tx) => {
    if (images !== undefined) {
      await tx.productImage.deleteMany({
        where: {
          productId: id,
        },
      });
    }
    if (collectionIds !== undefined) {
      await tx.productCollection.deleteMany({ where: { productId: id } });
    }

    return tx.product.update({
      where: {
        id,
      },
      data: {
        ...productData,
        ...(details !== undefined && { details: details as Prisma.InputJsonValue }),
        ...(collectionIds !== undefined && { collections: { create: collectionIds.map((collectionId) => ({ collectionId })) } }),

        ...(images !== undefined && {
          images: {
            create: images.map((image) => ({
              image: image.image,
              order: image.order,
            })),
          },
        }),
      },
      include: productInclude,
    });
  });

  return product;
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.delete({
    where: {
      id,
    },
  });

  return product;
}
