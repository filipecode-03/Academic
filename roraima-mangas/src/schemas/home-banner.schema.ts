import { z } from "zod";

const destinationTypeSchema = z.enum([
  "NONE",
  "PRODUCT",
  "CATEGORY",
  "COLLECTION",
]);

const homeBannerFields = {
  image: z.string().min(1, "A imagem é obrigatória"),
  order: z.number().int().min(0),
  active: z.boolean().default(true),
  destinationType: destinationTypeSchema.default("NONE"),
  productId: z.string().nullable().optional(),
  categoryId: z.string().nullable().optional(),
  collectionId: z.string().nullable().optional(),
};

export const createHomeBannerSchema = z
  .object(homeBannerFields)
  .superRefine((data, ctx) => {
    if (data.destinationType === "PRODUCT" && !data.productId) {
      ctx.addIssue({
        code: "custom",
        path: ["productId"],
        message: "productId é obrigatório quando o destino é PRODUCT",
      });
    }

    if (data.destinationType === "CATEGORY" && !data.categoryId) {
      ctx.addIssue({
        code: "custom",
        path: ["categoryId"],
        message: "categoryId é obrigatório quando o destino é CATEGORY",
      });
    }

    if (data.destinationType === "COLLECTION" && !data.collectionId) {
      ctx.addIssue({
        code: "custom",
        path: ["collectionId"],
        message: "collectionId é obrigatório quando o destino é COLLECTION",
      });
    }

    if (data.destinationType === "NONE") {
      if (data.productId || data.categoryId || data.collectionId) {
        ctx.addIssue({
          code: "custom",
          path: ["destinationType"],
          message:
            "Não devem existir relacionamentos quando o destino é NONE",
        });
      }
    }

    if (
      data.destinationType === "PRODUCT" &&
      (data.categoryId || data.collectionId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino PRODUCT não pode possuir categoryId ou collectionId",
      });
    }

    if (
      data.destinationType === "CATEGORY" &&
      (data.productId || data.collectionId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino CATEGORY não pode possuir productId ou collectionId",
      });
    }

    if (
      data.destinationType === "COLLECTION" &&
      (data.productId || data.categoryId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino COLLECTION não pode possuir productId ou categoryId",
      });
    }
  });

export const updateHomeBannerSchema = z
  .object({
    image: homeBannerFields.image.optional(),
    order: homeBannerFields.order.optional(),
    active: homeBannerFields.active.optional(),
    destinationType: destinationTypeSchema.optional(),
    productId: homeBannerFields.productId,
    categoryId: homeBannerFields.categoryId,
    collectionId: homeBannerFields.collectionId,
  })
  .superRefine((data, ctx) => {
    if (data.destinationType === "NONE") {
      if (data.productId || data.categoryId || data.collectionId) {
        ctx.addIssue({
          code: "custom",
          path: ["destinationType"],
          message:
            "Não devem existir relacionamentos quando o destino é NONE",
        });
      }
    }

    if (
      data.destinationType === "PRODUCT" &&
      (data.categoryId || data.collectionId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino PRODUCT não pode possuir categoryId ou collectionId",
      });
    }

    if (
      data.destinationType === "CATEGORY" &&
      (data.productId || data.collectionId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino CATEGORY não pode possuir productId ou collectionId",
      });
    }

    if (
      data.destinationType === "COLLECTION" &&
      (data.productId || data.categoryId)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["destinationType"],
        message:
          "Um banner com destino COLLECTION não pode possuir productId ou categoryId",
      });
    }
  });