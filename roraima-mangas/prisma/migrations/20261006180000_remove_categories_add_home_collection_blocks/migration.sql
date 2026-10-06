-- Preserve category-generated HomeSection content by copying its products into
-- the existing manual relation before changing the section type.
WITH ranked_category_products AS (
  SELECT hs."id" AS "homeSectionId", p."id" AS "productId",
         ROW_NUMBER() OVER (PARTITION BY hs."id" ORDER BY p."featured" DESC, p."createdAt" DESC, p."id")::INTEGER AS product_rank,
         (SELECT COUNT(*) FROM "HomeSectionProduct" existing WHERE existing."homeSectionId" = hs."id")::INTEGER AS existing_count,
         COALESCE((SELECT MAX(existing."order") + 1 FROM "HomeSectionProduct" existing WHERE existing."homeSectionId" = hs."id"), 0)::INTEGER AS next_order
  FROM "HomeSection" hs
  JOIN "Product" p ON p."categoryId" = hs."categoryId"
  WHERE hs."type" = 'CATEGORY'
)
INSERT INTO "HomeSectionProduct" ("homeSectionId", "productId", "order")
SELECT "homeSectionId", "productId", next_order + product_rank - 1
FROM ranked_category_products
WHERE product_rank <= GREATEST(10 - existing_count, 0)
ON CONFLICT ("homeSectionId", "productId") DO NOTHING;

-- Category destination banners remain, but become ordinary non-navigating banners.
UPDATE "HomeBanner" SET "destinationType" = 'NONE', "categoryId" = NULL
WHERE "destinationType" = 'CATEGORY' OR "categoryId" IS NOT NULL;

-- Keep the former category sections and their contents as manual product sections.
UPDATE "HomeSection" SET "type" = 'MANUAL', "categoryId" = NULL
WHERE "type" = 'CATEGORY' OR "categoryId" IS NOT NULL;

ALTER TABLE "Product" DROP CONSTRAINT IF EXISTS "Product_categoryId_fkey";
ALTER TABLE "HomeBanner" DROP CONSTRAINT IF EXISTS "HomeBanner_categoryId_fkey";
ALTER TABLE "HomeSection" DROP CONSTRAINT IF EXISTS "HomeSection_categoryId_fkey";
ALTER TABLE "Product" DROP COLUMN "categoryId";
ALTER TABLE "HomeBanner" DROP COLUMN "categoryId";
ALTER TABLE "HomeSection" DROP COLUMN "categoryId";
DROP TABLE "Category";

ALTER TYPE "BannerDestinationType" RENAME TO "BannerDestinationType_old";
CREATE TYPE "BannerDestinationType" AS ENUM ('NONE', 'PRODUCT', 'COLLECTION');
ALTER TABLE "HomeBanner" ALTER COLUMN "destinationType" DROP DEFAULT;
ALTER TABLE "HomeBanner" ALTER COLUMN "destinationType" TYPE "BannerDestinationType"
  USING "destinationType"::text::"BannerDestinationType";
ALTER TABLE "HomeBanner" ALTER COLUMN "destinationType" SET DEFAULT 'NONE';
DROP TYPE "BannerDestinationType_old";

ALTER TYPE "HomeSectionType" RENAME TO "HomeSectionType_old";
CREATE TYPE "HomeSectionType" AS ENUM ('MANUAL', 'COLLECTION');
ALTER TABLE "HomeSection" ALTER COLUMN "type" TYPE "HomeSectionType"
  USING "type"::text::"HomeSectionType";
DROP TYPE "HomeSectionType_old";

CREATE TABLE "HomeCollectionBlock" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "HomeCollectionBlock_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "HomeCollectionBlock_order_idx" ON "HomeCollectionBlock"("order");
CREATE INDEX "HomeCollectionBlock_active_idx" ON "HomeCollectionBlock"("active");
CREATE INDEX "HomeCollectionBlock_collectionId_idx" ON "HomeCollectionBlock"("collectionId");
ALTER TABLE "HomeCollectionBlock" ADD CONSTRAINT "HomeCollectionBlock_collectionId_fkey"
  FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
