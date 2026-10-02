import { z } from "zod";

export const createHomeSectionProductSchema = z.object({
  productId: z
    .string()
    .min(1, "productId é obrigatório."),

  order: z
    .number()
    .int()
    .min(0),
});

export type CreateHomeSectionProductInput = z.infer<
  typeof createHomeSectionProductSchema
>;