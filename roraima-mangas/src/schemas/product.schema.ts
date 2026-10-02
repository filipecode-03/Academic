import { z } from "zod";

const productImageSchema = z.object({
  image: z.string().min(1, "A imagem é obrigatória."),
  order: z.number().int().min(0),
});

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

  images: z
    .array(productImageSchema)
    .min(1, "O produto deve possuir pelo menos uma imagem."),

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

export const updateProductSchema = z
  .object({
    name: z
      .string()
      .min(1, "O nome do produto é obrigatório.")
      .optional(),

    slug: z
      .string()
      .min(1, "O slug do produto é obrigatório.")
      .optional(),

    description: z
      .string()
      .optional(),

    price: z
      .number()
      .positive("O preço deve ser maior que zero.")
      .optional(),

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

    images: z
      .array(productImageSchema)
      .min(1, "O produto deve possuir pelo menos uma imagem.")
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
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "Informe pelo menos um campo para atualizar.",
    }
  );

export type UpdateProductInput = z.infer<typeof updateProductSchema>;