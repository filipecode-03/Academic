import { z } from "zod";

export const createHomeCollectionBlockSchema = z.object({
  title: z.string().trim().min(1).max(80),
  image: z.string().min(1),
  collectionId: z.string().min(1),
  active: z.boolean().default(true),
});
export const updateHomeCollectionBlockSchema = createHomeCollectionBlockSchema.partial().refine((data) => Object.keys(data).length > 0, { message: "Informe pelo menos um campo para atualizar." });
export const reorderHomeCollectionBlocksSchema = z.object({ blockIds: z.array(z.string().min(1)) }).refine(({ blockIds }) => new Set(blockIds).size === blockIds.length, { path: ["blockIds"], message: "A lista não pode conter blocos repetidos." });
