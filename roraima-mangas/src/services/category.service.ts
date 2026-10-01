import { prisma } from "@/src/lib/prisma";
import type {
  CreateCategoryInput,
  UpdateCategoryInput,
} from "@/src/schemas/category.schema";

export async function createCategory(data: CreateCategoryInput) {
  const category = await prisma.category.create({
    data: {
      name: data.name,
      slug: data.slug,
    },
  });

  return category;
}

export async function getCategories() {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return categories;
}

export async function getCategoryById(id: string) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return category;
}

export async function updateCategory(
  id: string,
  data: UpdateCategoryInput
) {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data,
  });

  return category;
}

export async function deleteCategory(id: string) {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });

  return category;
}