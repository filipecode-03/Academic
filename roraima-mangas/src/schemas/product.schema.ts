import { z } from "zod";

const productImageSchema = z.object({ image: z.string().min(1), order: z.number().int().min(0) });
const detailsSchema = z.array(z.object({ title: z.string().trim().min(1).max(100), value: z.string().trim().min(1).max(500) })).max(50);
const productFields = {
  name: z.string().trim().min(1, "O nome do produto é obrigatório."),
  description: z.string().optional(),
  price: z.number().positive("O preço deve ser maior que zero."),
  stock: z.number().int().min(0, "O estoque não pode ser negativo."),
  details: detailsSchema.default([]),
  image: z.string().optional(),
  images: z.array(productImageSchema).min(1, "O produto deve possuir pelo menos uma imagem."),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
  featured: z.boolean().default(false),
  isNew: z.boolean().default(false),
  collectionIds: z.array(z.string()).default([]),
};

export const createProductSchema = z.object(productFields);
export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: productFields.name.optional(), description: productFields.description,
  price: productFields.price.optional(), stock: productFields.stock.optional(),
  details: detailsSchema.optional(), image: productFields.image,
  images: productFields.images.optional(), status: productFields.status.optional(),
  featured: z.boolean().optional(), isNew: z.boolean().optional(),
  collectionIds: z.array(z.string()).optional(),
}).refine((data) => Object.keys(data).length > 0, { message: "Informe pelo menos um campo para atualizar." });
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
