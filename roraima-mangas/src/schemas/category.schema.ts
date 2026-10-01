import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(1, "O nome da categoria é obrigatório."),

  slug: z
    .string()
    .min(1, "O slug da categoria é obrigatório."),
});

export type CreateCategoryInput = z.infer<
  typeof createCategorySchema
>;

export const updateCategorySchema = createCategorySchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "Informe pelo menos um campo para atualizar.",
    }
  );

export type UpdateCategoryInput = z.infer<
  typeof updateCategorySchema
>;