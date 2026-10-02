import { z } from "zod";

const homeSectionTypeSchema = z.enum([
  "MANUAL",
  "CATEGORY",
  "COLLECTION",
]);

const homeSectionFields = {
  title: z
    .string()
    .min(1, "O título da seção é obrigatório."),

  type: homeSectionTypeSchema,

  order: z
    .number()
    .int()
    .min(0),

  active: z
    .boolean()
    .default(true),

  categoryId: z
    .string()
    .nullable()
    .optional(),

  collectionId: z
    .string()
    .nullable()
    .optional(),
};

function validateHomeSectionRelations(
  data: {
    type?: "MANUAL" | "CATEGORY" | "COLLECTION";
    categoryId?: string | null;
    collectionId?: string | null;
  },
  ctx: z.RefinementCtx
) {
  if (data.type === "MANUAL") {
    if (data.categoryId || data.collectionId) {
      ctx.addIssue({
        code: "custom",
        path: ["type"],
        message:
          "Uma seção MANUAL não pode possuir categoryId ou collectionId.",
      });
    }
  }

  if (data.type === "CATEGORY") {
    if (!data.categoryId) {
      ctx.addIssue({
        code: "custom",
        path: ["categoryId"],
        message:
          "categoryId é obrigatório quando o tipo é CATEGORY.",
      });
    }

    if (data.collectionId) {
      ctx.addIssue({
        code: "custom",
        path: ["type"],
        message:
          "Uma seção CATEGORY não pode possuir collectionId.",
      });
    }
  }

  if (data.type === "COLLECTION") {
    if (!data.collectionId) {
      ctx.addIssue({
        code: "custom",
        path: ["collectionId"],
        message:
          "collectionId é obrigatório quando o tipo é COLLECTION.",
      });
    }

    if (data.categoryId) {
      ctx.addIssue({
        code: "custom",
        path: ["type"],
        message:
          "Uma seção COLLECTION não pode possuir categoryId.",
      });
    }
  }
}

export const createHomeSectionSchema = z
  .object(homeSectionFields)
  .superRefine(validateHomeSectionRelations);

export type CreateHomeSectionInput = z.infer<
  typeof createHomeSectionSchema
>;

export const updateHomeSectionSchema = z
  .object({
    title: homeSectionFields.title.optional(),

    type: homeSectionFields.type.optional(),

    order: homeSectionFields.order.optional(),

    active: homeSectionFields.active.optional(),

    categoryId: homeSectionFields.categoryId,

    collectionId: homeSectionFields.collectionId,
  })
  .superRefine(validateHomeSectionRelations)
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "Informe pelo menos um campo para atualizar.",
    }
  );

export type UpdateHomeSectionInput = z.infer<
  typeof updateHomeSectionSchema
>;