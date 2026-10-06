import { prisma } from "@/src/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";
import { cache } from "react";
import { serializePublicProduct } from "@/src/types/storefront";

const publicProductInclude = {
  images: { orderBy: { order: "asc" as const } },
  collections: { include: { collection: true } },
};
const homeSectionInclude = {
  collection: { include: { products: { orderBy: { product: { createdAt: "desc" as const } }, include: { product: { include: publicProductInclude } } } } },
  products: { orderBy: { order: "asc" as const }, take: 10, include: { product: { include: publicProductInclude } } },
};
type HomeSectionRecord = Prisma.HomeSectionGetPayload<{ include: typeof homeSectionInclude }>;

function toPublicHomeSection(section: HomeSectionRecord) {
  const now = new Date();
  const visible = (product: HomeSectionRecord["products"][number]["product"]) => ({
    ...product,
    isNew: Boolean(product.newUntil && product.newUntil > now),
    featured: product.featured && (!product.featuredStartAt || product.featuredStartAt <= now) && (!product.featuredEndAt || product.featuredEndAt > now),
  });
  const displayProducts = section.type === "MANUAL"
    ? section.products.map(({ product }) => visible(product))
    : section.collection?.products.map(({ product }) => visible(product)).sort((a, b) => Number(b.featured) - Number(a.featured) || b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 10) ?? [];
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
    prisma.product.findMany({ where: { name: { contains: term, mode: "insensitive" } }, take: 48, orderBy: { createdAt: "desc" }, include: publicProductInclude }),
    prisma.collection.findMany({ where: { name: { contains: term, mode: "insensitive" } }, take: 12, orderBy: { name: "asc" } }),
  ]);
  return { products, collections };
}

export async function getPublicProductsForListing(kind: "ALL" | "NEW" | "FEATURED") {
  const now = new Date();
  const products = await prisma.product.findMany({
    where: kind === "NEW" ? { newUntil: { gt: now } } : kind === "FEATURED" ? {
      featured: true,
      AND: [{ OR: [{ featuredStartAt: null }, { featuredStartAt: { lte: now } }] }, { OR: [{ featuredEndAt: null }, { featuredEndAt: { gt: now } }] }],
    } : {},
    orderBy: [{ createdAt: "desc" }],
    include: publicProductInclude,
  });
  const result = products.map(serializePublicProduct);
  return kind === "ALL" ? result.sort((a, b) => Number(b.featured) - Number(a.featured) || Date.parse(b.createdAt) - Date.parse(a.createdAt)) : result;
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
