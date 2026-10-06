import { z } from "zod";

export const createCollectionSchema = z.object({
  name: z
    .string()
    .min(1, "O nome da coleção é obrigatório."),

  description: z
    .string()
    .optional(),

  image: z
    .string()
    .optional(),
});

export type CreateCollectionInput = z.infer<
  typeof createCollectionSchema
>;

export const updateCollectionSchema = createCollectionSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "Informe pelo menos um campo para atualizar.",
    }
  );

export type UpdateCollectionInput = z.infer<
  typeof updateCollectionSchema
>;
