import { prisma } from "@/src/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";
import { cache } from "react";

const publicProductInclude = {
  images: { orderBy: { order: "asc" as const } },
  collections: { include: { collection: true } },
};
const homeSectionInclude = {
  collection: { include: { products: { orderBy: [{ product: { featured: "desc" as const } }, { product: { createdAt: "desc" as const } }], take: 10, include: { product: { include: publicProductInclude } } } } },
  products: { orderBy: { order: "asc" as const }, take: 10, include: { product: { include: publicProductInclude } } },
};
type HomeSectionRecord = Prisma.HomeSectionGetPayload<{ include: typeof homeSectionInclude }>;

function toPublicHomeSection(section: HomeSectionRecord) {
  const displayProducts = section.type === "MANUAL"
    ? section.products.map(({ product }) => product)
    : section.collection?.products.map(({ product }) => product) ?? [];
  return {
    ...section,
    collection: section.collection ? { id: section.collection.id, name: section.collection.name, slug: section.collection.slug, description: section.collection.description, image: section.collection.image } : null,
    displayProducts,
  };
}

export async function getActiveHomeSections() {
  const sections = await prisma.homeSection.findMany({ where: { active: true }, orderBy: { order: "asc" }, include: homeSectionInclude });
  return sections.map(toPublicHomeSection);
}
export const getPublicHomeSectionById = cache(async (id: string) => {
  const section = await prisma.homeSection.findFirst({ where: { id, active: true }, include: homeSectionInclude });
  return section ? toPublicHomeSection(section) : null;
});
export async function getPublicProductBySlug(slug: string) {
  return prisma.product.findFirst({ where: { slug: decodePathSegment(slug) }, include: publicProductInclude });
}
export async function getPublicCollectionBySlug(slug: string) {
  return prisma.collection.findUnique({ where: { slug: decodePathSegment(slug) }, include: {
    products: { orderBy: [{ product: { featured: "desc" } }, { product: { createdAt: "desc" } }], include: { product: { include: publicProductInclude } } },
  } });
}
export async function searchCatalog(query: string) {
  const term = query.trim();
  if (term.length < 2) return { products: [], collections: [] };
  const [products, collections] = await Promise.all([
    prisma.product.findMany({ where: { name: { contains: term, mode: "insensitive" } }, take: 48, orderBy: [{ featured: "desc" }, { createdAt: "desc" }], include: publicProductInclude }),
    prisma.collection.findMany({ where: { name: { contains: term, mode: "insensitive" } }, take: 12, orderBy: { name: "asc" } }),
  ]);
  return { products, collections };
}
function decodePathSegment(value: string) { try { return decodeURIComponent(value); } catch { return value; } }

export async function getHomeData() {
  const now = new Date();
  const [promoNotices, banners, sections, collectionBlocks] = await Promise.all([
    prisma.promoNotice.findMany({ where: { active: true, startAt: { lte: now }, endAt: { gte: now } }, orderBy: [{ position: "asc" }, { order: "asc" }] }),
    prisma.homeBanner.findMany({ where: { active: true }, orderBy: { order: "asc" }, include: { product: true, collection: true } }).then((items) => items.map(({ title, description, ...banner }) => banner)),
    getActiveHomeSections(),
    prisma.homeCollectionBlock.findMany({ where: { active: true }, orderBy: { order: "asc" }, include: { collection: { select: { slug: true } } } }),
  ]);
  return { promoNotices, banners, sections, collectionBlocks };
}
