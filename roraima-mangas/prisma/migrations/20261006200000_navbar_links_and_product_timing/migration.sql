-- Preserve existing "new" flags as a 14-day window from product creation.
ALTER TABLE "Product" ADD COLUMN "newUntil" TIMESTAMP(3);
UPDATE "Product"
SET "newUntil" = "createdAt" + INTERVAL '14 days'
WHERE "isNew" = true;
ALTER TABLE "Product" DROP COLUMN "isNew";

-- Existing featured products remain featured without an expiration date.
ALTER TABLE "Product"
  ADD COLUMN "featuredStartAt" TIMESTAMP(3),
  ADD COLUMN "featuredEndAt" TIMESTAMP(3);
CREATE INDEX "Product_newUntil_idx" ON "Product"("newUntil");
CREATE INDEX "Product_featured_featuredStartAt_featuredEndAt_idx"
  ON "Product"("featured", "featuredStartAt", "featuredEndAt");

CREATE TYPE "NavbarItemType" AS ENUM ('LINK', 'DROPDOWN');
CREATE TYPE "NavbarDestinationType" AS ENUM (
  'COLLECTION',
  'ALL_PRODUCTS',
  'NEW_PRODUCTS',
  'FEATURED_PRODUCTS',
  'EXTERNAL'
);

CREATE TABLE "NavbarItem" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "type" "NavbarItemType" NOT NULL,
  "destinationType" "NavbarDestinationType",
  "collectionId" TEXT,
  "externalUrl" TEXT,
  "parentId" TEXT,
  "order" INTEGER NOT NULL DEFAULT 0,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "NavbarItem_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "NavbarItem_shape_check" CHECK (
    ("type" = 'DROPDOWN' AND "parentId" IS NULL AND "destinationType" IS NULL AND "collectionId" IS NULL AND "externalUrl" IS NULL)
    OR
    ("type" = 'LINK' AND "destinationType" IS NOT NULL AND ("destinationType" <> 'EXTERNAL' OR "externalUrl" IS NOT NULL) AND ("destinationType" = 'COLLECTION' OR "collectionId" IS NULL) AND ("destinationType" = 'EXTERNAL' OR "externalUrl" IS NULL))
  )
);

CREATE INDEX "NavbarItem_parentId_order_idx" ON "NavbarItem"("parentId", "order");
CREATE INDEX "NavbarItem_active_order_idx" ON "NavbarItem"("active", "order");
CREATE INDEX "NavbarItem_collectionId_idx" ON "NavbarItem"("collectionId");

ALTER TABLE "NavbarItem" ADD CONSTRAINT "NavbarItem_collectionId_fkey"
  FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "NavbarItem" ADD CONSTRAINT "NavbarItem_parentId_fkey"
  FOREIGN KEY ("parentId") REFERENCES "NavbarItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
