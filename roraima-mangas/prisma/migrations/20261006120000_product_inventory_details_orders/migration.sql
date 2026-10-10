-- Preserve removed optional merchandising fields before dropping them from Product.
CREATE TABLE "LegacyProductOfferData" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "compareAtPrice" DECIMAL(10,2),
    "sku" TEXT
);

INSERT INTO "LegacyProductOfferData" ("productId", "compareAtPrice", "sku")
SELECT "id", "compareAtPrice", "sku" FROM "Product"
WHERE "compareAtPrice" IS NOT NULL OR "sku" IS NOT NULL;

ALTER TABLE "Product" DROP COLUMN "compareAtPrice";
DROP INDEX IF EXISTS "Product_sku_key";
ALTER TABLE "Product" DROP COLUMN "sku";

ALTER TYPE "ProductStatus" RENAME TO "ProductStatus_old";
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'INACTIVE');
ALTER TABLE "Product" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "status" TYPE "ProductStatus"
  USING (CASE WHEN "status"::text = 'OUT_OF_STOCK' THEN 'ACTIVE' ELSE "status"::text END)::"ProductStatus";
ALTER TABLE "Product" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
DROP TYPE "ProductStatus_old";

ALTER TABLE "Product" ADD COLUMN "stock" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "Product" ADD COLUMN "details" JSONB NOT NULL DEFAULT '[]'::jsonb;

CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONTACTED', 'COMPLETED', 'CANCELLED');
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "total" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,
    "productName" TEXT NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");
CREATE INDEX "OrderItem_productId_idx" ON "OrderItem"("productId");
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
