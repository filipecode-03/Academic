import { z } from "zod";

const destinationTypeSchema = z.enum(["NONE", "PRODUCT", "COLLECTION"]);
const bannerPositionSchema = z.enum(["FIRST", "LAST"]);
const fields = {
  title: z.string().trim().min(1, "O título do banner é obrigatório."),
  description: z.string().optional(), image: z.string().min(1, "A imagem é obrigatória"),
  active: z.boolean().default(true), destinationType: destinationTypeSchema.default("NONE"),
  position: bannerPositionSchema.optional(), productId: z.string().nullable().optional(), collectionId: z.string().nullable().optional(),
};
function validate(data: { destinationType?: "NONE" | "PRODUCT" | "COLLECTION"; productId?: string | null; collectionId?: string | null }, ctx: z.RefinementCtx) {
  if (data.destinationType === "PRODUCT" && !data.productId) ctx.addIssue({ code: "custom", path: ["productId"], message: "Selecione um produto." });
  if (data.destinationType === "COLLECTION" && !data.collectionId) ctx.addIssue({ code: "custom", path: ["collectionId"], message: "Selecione uma coleção." });
  if (data.destinationType === "NONE" && (data.productId || data.collectionId)) ctx.addIssue({ code: "custom", path: ["destinationType"], message: "Remova o destino ou limpe a referência." });
  if (data.destinationType === "PRODUCT" && data.collectionId || data.destinationType === "COLLECTION" && data.productId) ctx.addIssue({ code: "custom", path: ["destinationType"], message: "Escolha apenas um destino." });
}
export const createHomeBannerSchema = z.object(fields).superRefine(validate);
export const updateHomeBannerSchema = z.object({
  title: fields.title.optional(), description: fields.description, image: fields.image.optional(), active: fields.active.optional(),
  destinationType: destinationTypeSchema.optional(), position: bannerPositionSchema.optional(), productId: fields.productId, collectionId: fields.collectionId,
}).refine((data) => Object.keys(data).length > 0, { message: "Informe pelo menos um campo para atualizar." }).superRefine(validate);
export const reorderHomeBannersSchema = z.object({ bannerIds: z.array(z.string().min(1, "ID de banner inválido.")) }).refine(({ bannerIds }) => new Set(bannerIds).size === bannerIds.length, { path: ["bannerIds"], message: "A lista não pode conter banners duplicados." });
