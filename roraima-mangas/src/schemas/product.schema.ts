import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(1, "O nome do produto é obrigatório."),

  slug: z
    .string()
    .min(1, "O slug do produto é obrigatório."),

  description: z
    .string()
    .optional(),

  price: z
    .number()
    .positive("O preço deve ser maior que zero."),

  compareAtPrice: z
    .number()
    .positive("O preço anterior deve ser maior que zero.")
    .optional(),

  sku: z
    .string()
    .optional(),

  image: z
    .string()
    .optional(),

  status: z
    .enum(["ACTIVE", "INACTIVE", "OUT_OF_STOCK"])
    .optional(),

  featured: z
    .boolean()
    .optional(),

  isNew: z
    .boolean()
    .optional(),

  categoryId: z
    .string()
    .optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;