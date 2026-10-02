import { prisma } from "@/src/lib/prisma";
import type {
  CreatePromoNoticeInput,
  UpdatePromoNoticeInput,
} from "@/src/schemas/promo-notice.schema";

export async function createPromoNotice(
  data: CreatePromoNoticeInput
) {
  const promoNotice = await prisma.promoNotice.create({
    data: {
      content: data.content,
      position: data.position,
      order: data.order,
      active: data.active,
      startAt: new Date(data.startAt),
      endAt: new Date(data.endAt),
    },
  });

  return promoNotice;
}

export async function getPromoNotices() {
  const promoNotices = await prisma.promoNotice.findMany({
    orderBy: [
      {
        position: "asc",
      },
      {
        order: "asc",
      },
      {
        startAt: "asc",
      },
    ],
  });

  return promoNotices;
}

export async function getPromoNoticeById(id: string) {
  const promoNotice = await prisma.promoNotice.findUnique({
    where: {
      id,
    },
  });

  return promoNotice;
}

export async function updatePromoNotice(
  id: string,
  data: UpdatePromoNoticeInput
) {
  const existingPromoNotice = await prisma.promoNotice.findUnique({
    where: {
      id,
    },
  });

  if (!existingPromoNotice) {
    return null;
  }

  const startAt = data.startAt
    ? new Date(data.startAt)
    : existingPromoNotice.startAt;

  const endAt = data.endAt
    ? new Date(data.endAt)
    : existingPromoNotice.endAt;

  if (startAt >= endAt) {
    throw new Error(
      "A data final deve ser posterior à data inicial."
    );
  }

  const promoNotice = await prisma.promoNotice.update({
    where: {
      id,
    },
    data: {
      ...(data.content !== undefined && {
        content: data.content,
      }),

      ...(data.position !== undefined && {
        position: data.position,
      }),

      ...(data.order !== undefined && {
        order: data.order,
      }),

      ...(data.active !== undefined && {
        active: data.active,
      }),

      ...(data.startAt !== undefined && {
        startAt,
      }),

      ...(data.endAt !== undefined && {
        endAt,
      }),
    },
  });

  return promoNotice;
}

export async function deletePromoNotice(id: string) {
  const promoNotice = await prisma.promoNotice.delete({
    where: {
      id,
    },
  });

  return promoNotice;
}