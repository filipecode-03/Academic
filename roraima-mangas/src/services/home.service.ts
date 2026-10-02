import { prisma } from "@/src/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";
import { cache } from "react";

const publicProductInclude = {
  images: { orderBy: { order: "asc" as const } },
  category: true,
  collections: { include: { collection: true } },
};

type HomeSectionRecord = Prisma.HomeSectionGetPayload<{
  include: typeof homeSectionInclude;
}>;

function toPublicHomeSection(section: HomeSectionRecord) {
  const displayProducts = section.type === "MANUAL"
    ? section.products.map(({ product }) => product)
    : section.type === "CATEGORY"
      ? section.category?.products ?? []
      : section.collection?.products.map(({ product }) => product) ?? [];

  return {
    ...section,
    category: section.category
      ? {
          id: section.category.id,
          name: section.category.name,
          slug: section.category.slug,
        }
      : null,
    collection: section.collection
      ? {
          id: section.collection.id,
          name: section.collection.name,
          slug: section.collection.slug,
          description: section.collection.description,
          image: section.collection.image,
        }
      : null,
    displayProducts,
  };
}

const homeSectionInclude = {
  category: {
    include: {
      products: {
        where: { status: { not: "INACTIVE" as const } },
        orderBy: [{ featured: "desc" as const }, { createdAt: "desc" as const }],
        include: publicProductInclude,
      },
    },
  },
  collection: {
    include: {
      products: {
        where: { product: { status: { not: "INACTIVE" as const } } },
        orderBy: [
          { product: { featured: "desc" as const } },
          { product: { createdAt: "desc" as const } },
        ],
        include: { product: { include: publicProductInclude } },
      },
    },
  },
  products: {
    where: { product: { status: { not: "INACTIVE" as const } } },
    orderBy: { order: "asc" as const },
    include: {
      product: { include: publicProductInclude },
    },
  },
};

export async function getActiveHomeSections() {
  const sections = await prisma.homeSection.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
    include: homeSectionInclude,
  });

  return sections.map(toPublicHomeSection);
}

export const getPublicHomeSectionById = cache(async (id: string) => {
  const section = await prisma.homeSection.findFirst({
    where: { id, active: true },
    include: homeSectionInclude,
  });
  return section ? toPublicHomeSection(section) : null;
});

export async function getPublicProductBySlug(slug: string) {
  const decodedSlug = decodePathSegment(slug);
  return prisma.product.findFirst({
    where: { slug: decodedSlug, status: { not: "INACTIVE" } },
    include: publicProductInclude,
  });
}

export async function getPublicCategoryBySlug(slug: string) {
  const decodedSlug = decodePathSegment(slug);
  return prisma.category.findUnique({
    where: { slug: decodedSlug },
    include: {
      products: {
        where: { status: { not: "INACTIVE" } },
        orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
        include: publicProductInclude,
      },
    },
  });
}

export async function getPublicCollectionBySlug(slug: string) {
  const decodedSlug = decodePathSegment(slug);
  return prisma.collection.findUnique({
    where: { slug: decodedSlug },
    include: {
      products: {
        where: { product: { status: { not: "INACTIVE" } } },
        orderBy: [
          { product: { featured: "desc" } },
          { product: { createdAt: "desc" } },
        ],
        include: { product: { include: publicProductInclude } },
      },
    },
  });
}

function decodePathSegment(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function getHomeData() {
  const now = new Date();

  const [promoNotices, banners, sections] = await Promise.all([
    prisma.promoNotice.findMany({
      where: {
        active: true,
        startAt: { lte: now },
        endAt: { gte: now },
      },
      orderBy: [{ position: "asc" }, { order: "asc" }],
    }),
    prisma.homeBanner.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
      include: { product: true, category: true, collection: true },
    }).then((items) => items.map(({ title, description, ...banner }) => banner)),
    getActiveHomeSections(),
  ]);

  return { promoNotices, banners, sections };
}
