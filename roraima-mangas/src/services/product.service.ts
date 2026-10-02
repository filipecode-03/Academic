import { prisma } from "@/src/lib/prisma";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "@/src/schemas/product.schema";

const productInclude = {
  images: {
    orderBy: {
      order: "asc" as const,
    },
  },
};

export async function createProduct(data: CreateProductInput) {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      price: data.price,
      compareAtPrice: data.compareAtPrice,
      sku: data.sku,
      image: data.image,
      status: data.status,
      featured: data.featured,
      isNew: data.isNew,
      categoryId: data.categoryId,

      images: {
        create: data.images.map((image) => ({
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
  const { images, ...productData } = data;

  const product = await prisma.$transaction(async (tx) => {
    if (images !== undefined) {
      await tx.productImage.deleteMany({
        where: {
          productId: id,
        },
      });
    }

    return tx.product.update({
      where: {
        id,
      },
      data: {
        ...productData,

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