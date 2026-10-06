import { prisma } from "@/src/lib/prisma";

type SlugModel = "product" | "category" | "collection";

export async function createUniqueSlug(
  model: SlugModel,
  name: string,
  excludeId?: string,
) {
  const base = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR").trim().replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "item";
  let slug = base;
  let suffix = 2;

  while (true) {
    const existing = model === "product"
      ? await prisma.product.findUnique({ select: { id: true }, where: { slug } })
      : model === "category"
        ? await prisma.category.findUnique({ select: { id: true }, where: { slug } })
        : await prisma.collection.findUnique({ select: { id: true }, where: { slug } });
    if (!existing || existing.id === excludeId) return slug;
    slug = `${base}-${suffix++}`;
  }
}
