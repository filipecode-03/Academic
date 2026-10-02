import { z } from "zod";

const promoNoticePositionSchema = z.enum([
  "TOP",
  "BELOW_CAROUSEL",
]);

const promoNoticeFields = {
  content: z
    .string()
    .min(1, "O conteúdo do aviso é obrigatório."),

  position: promoNoticePositionSchema,

  order: z
    .number()
    .int()
    .min(0),

  active: z
    .boolean()
    .default(true),

  startAt: z
    .string()
    .datetime({
      message: "A data inicial deve estar em formato ISO válido.",
    }),

  endAt: z
    .string()
    .datetime({
      message: "A data final deve estar em formato ISO válido.",
    }),
};

export const createPromoNoticeSchema = z
  .object(promoNoticeFields)
  .refine(
    (data) => new Date(data.startAt) < new Date(data.endAt),
    {
      path: ["endAt"],
      message: "A data final deve ser posterior à data inicial.",
    }
  );

export type CreatePromoNoticeInput = z.infer<
  typeof createPromoNoticeSchema
>;

export const updatePromoNoticeSchema = z
  .object({
    content: promoNoticeFields.content.optional(),

    position: promoNoticeFields.position.optional(),

    order: promoNoticeFields.order.optional(),

    active: promoNoticeFields.active.optional(),

    startAt: promoNoticeFields.startAt.optional(),

    endAt: promoNoticeFields.endAt.optional(),
  })
  .refine(
    (data) => {
      if (!data.startAt || !data.endAt) {
        return true;
      }

      return new Date(data.startAt) < new Date(data.endAt);
    },
    {
      path: ["endAt"],
      message: "A data final deve ser posterior à data inicial.",
    }
  )
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "Informe pelo menos um campo para atualizar.",
    }
  );

export type UpdatePromoNoticeInput = z.infer<
  typeof updatePromoNoticeSchema
>;