import { prisma } from "@/src/lib/prisma";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "@/src/schemas/product.schema";

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
    },
  });

  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
}

export async function updateProduct(
  id: string,
  data: UpdateProductInput
) {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data,
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