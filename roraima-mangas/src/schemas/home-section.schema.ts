import { z } from "zod";

const fields = {
  title: z.string().trim().min(1, "O título da seção é obrigatório."),
  type: z.enum(["MANUAL", "COLLECTION"]),
  order: z.number().int().min(0),
  active: z.boolean().default(true),
  collectionId: z.string().nullable().optional(),
};

function validate(data: { type?: "MANUAL" | "COLLECTION"; collectionId?: string | null }, ctx: z.RefinementCtx) {
  if (data.type === "COLLECTION" && !data.collectionId) ctx.addIssue({ code: "custom", path: ["collectionId"], message: "Selecione uma coleção para esta seção." });
  if (data.type === "MANUAL" && data.collectionId) ctx.addIssue({ code: "custom", path: ["type"], message: "Uma seção manual não pode possuir uma coleção de origem." });
}

export const createHomeSectionSchema = z.object(fields).superRefine(validate);
export type CreateHomeSectionInput = z.infer<typeof createHomeSectionSchema>;

export const updateHomeSectionSchema = z.object({
  title: fields.title.optional(), type: fields.type.optional(), order: fields.order.optional(),
  active: fields.active.optional(), collectionId: fields.collectionId,
}).superRefine(validate).refine((data) => Object.keys(data).length > 0, { message: "Informe pelo menos um campo para atualizar." });
export type UpdateHomeSectionInput = z.infer<typeof updateHomeSectionSchema>;

export const reorderHomeSectionsSchema = z.object({ sectionIds: z.array(z.string().min(1)) }).superRefine(({ sectionIds }, ctx) => {
  if (new Set(sectionIds).size !== sectionIds.length) ctx.addIssue({ code: "custom", path: ["sectionIds"], message: "A lista não pode conter seções duplicadas." });
});
