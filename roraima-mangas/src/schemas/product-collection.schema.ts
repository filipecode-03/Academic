import { z } from "zod";

export const addProductToCollectionSchema = z.object({
  productId: z.string().min(1, "O ID do produto é obrigatório."),
});

export type AddProductToCollectionInput = z.infer<
  typeof addProductToCollectionSchema
>;