import { prisma } from "@/src/lib/prisma";
import type {
  CreateCollectionInput,
  UpdateCollectionInput,
} from "@/src/schemas/collection.schema";
import { createUniqueSlug } from "@/src/lib/slug";

export async function createCollection(
  data: CreateCollectionInput
) {
  const collection = await prisma.collection.create({
    data: {
      name: data.name,
      slug: await createUniqueSlug("collection", data.name),
      description: data.description,
      image: data.image,
    },
  });

  return collection;
}

export async function getCollections() {
  const collections = await prisma.collection.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return collections;
}

export async function getCollectionById(id: string) {
  const collection = await prisma.collection.findUnique({
    where: {
      id,
    },
  });

  return collection;
}

export async function updateCollection(
  id: string,
  data: UpdateCollectionInput
) {
  const { name, ...rest } = data;
  const collection = await prisma.collection.update({
    where: {
      id,
    },
    data: { ...rest, ...(name !== undefined && { name }) },
  });

  return collection;
}

export async function deleteCollection(id: string) {
  const collection = await prisma.collection.delete({
    where: {
      id,
    },
  });

  return collection;
}
