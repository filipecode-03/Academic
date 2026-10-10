import { z } from "zod";

const destinationTypes = ["COLLECTION", "ALL_PRODUCTS", "NEW_PRODUCTS", "FEATURED_PRODUCTS", "EXTERNAL"] as const;

const commonFields = {
  title: z.string().trim().min(1, "Informe o título.").max(60),
  active: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
};

function validateDestination(
  value: { type: "LINK" | "DROPDOWN"; destinationType?: typeof destinationTypes[number] | null; collectionId?: string | null; externalUrl?: string | null },
  context: z.RefinementCtx,
  allowDeletedCollection = false,
) {
  if (value.type === "DROPDOWN") {
    if (value.destinationType || value.collectionId || value.externalUrl) {
      context.addIssue({ code: "custom", path: ["destinationType"], message: "Dropdowns não recebem destino; configure os links filhos." });
    }
    return;
  }

  if (!value.destinationType) {
    context.addIssue({ code: "custom", path: ["destinationType"], message: "Selecione o destino do link." });
  } else if (value.destinationType === "COLLECTION" && !value.collectionId && !allowDeletedCollection) {
    context.addIssue({ code: "custom", path: ["collectionId"], message: "Selecione uma coleção." });
  } else if (value.destinationType === "EXTERNAL") {
    if (!value.externalUrl || !/^https?:\/\//i.test(value.externalUrl)) {
      context.addIssue({ code: "custom", path: ["externalUrl"], message: "Informe uma URL externa HTTP ou HTTPS válida." });
    } else {
      try {
        const pathname = decodeURIComponent(new URL(value.externalUrl).pathname);
        if (/^\/admin(?:\/|$)/i.test(pathname)) context.addIssue({ code: "custom", path: ["externalUrl"], message: "A navegação pública não pode apontar para a área administrativa." });
      } catch {
        context.addIssue({ code: "custom", path: ["externalUrl"], message: "URL externa inválida." });
      }
    }
  }

  if (value.destinationType !== "COLLECTION" && value.collectionId) {
    context.addIssue({ code: "custom", path: ["collectionId"], message: "Este destino não utiliza coleção." });
  }
  if (value.destinationType !== "EXTERNAL" && value.externalUrl) {
    context.addIssue({ code: "custom", path: ["externalUrl"], message: "Este destino não utiliza URL externa." });
  }
}

const navbarItemObjectSchema = z.object({
  ...commonFields,
  type: z.enum(["LINK", "DROPDOWN"]),
  destinationType: z.enum(destinationTypes).nullable().optional(),
  collectionId: z.string().nullable().optional(),
  externalUrl: z.string().url().nullable().optional(),
});

export const createNavbarItemSchema = navbarItemObjectSchema.superRefine(validateDestination);
export const existingNavbarItemSchema = navbarItemObjectSchema.superRefine((value, context) => validateDestination(value, context, true));

export const updateNavbarItemSchema = z.object({
  title: commonFields.title.optional(),
  active: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
  type: z.enum(["LINK", "DROPDOWN"]).optional(),
  destinationType: z.enum(destinationTypes).nullable().optional(),
  collectionId: z.string().nullable().optional(),
  externalUrl: z.string().url().nullable().optional(),
});
export const reorderNavbarItemsSchema = z.object({ itemIds: z.array(z.string().min(1)) }).refine(({ itemIds }) => new Set(itemIds).size === itemIds.length, { path: ["itemIds"], message: "A lista não pode conter itens duplicados." });

export type CreateNavbarItemInput = z.infer<typeof createNavbarItemSchema>;
export type UpdateNavbarItemInput = z.infer<typeof updateNavbarItemSchema>;
