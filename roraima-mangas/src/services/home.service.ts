import { prisma } from "@/src/lib/prisma";

export async function getHomeData() {
  const now = new Date();

  const [promoNotices, banners, sections] =
    await Promise.all([
      prisma.promoNotice.findMany({
        where: {
          active: true,
          startAt: {
            lte: now,
          },
          endAt: {
            gte: now,
          },
        },
        orderBy: [
          {
            position: "asc",
          },
          {
            order: "asc",
          },
        ],
      }),

      prisma.homeBanner.findMany({
        where: {
          active: true,
        },
        orderBy: {
          order: "asc",
        },
        include: {
          product: true,
          category: true,
          collection: true,
        },
      }),

      prisma.homeSection.findMany({
        where: {
          active: true,
        },
        orderBy: {
          order: "asc",
        },
        include: {
          category: true,
          collection: true,
          products: {
            orderBy: {
              order: "asc",
            },
            include: {
              product: {
                include: {
                  images: {
                    orderBy: {
                      order: "asc",
                    },
                  },
                  category: true,
                  collections: {
                    include: {
                      collection: true,
                    },
                  },
                },
              },
            },
          },
        },
      }),
    ]);

  return {
    promoNotices,
    banners,
    sections,
  };
}