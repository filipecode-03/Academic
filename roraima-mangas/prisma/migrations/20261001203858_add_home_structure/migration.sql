-- CreateEnum
CREATE TYPE "BannerDestinationType" AS ENUM ('NONE', 'PRODUCT', 'CATEGORY', 'COLLECTION');

-- CreateEnum
CREATE TYPE "PromoNoticePosition" AS ENUM ('TOP', 'BELOW_CAROUSEL');

-- CreateEnum
CREATE TYPE "HomeSectionType" AS ENUM ('MANUAL', 'CATEGORY', 'COLLECTION');

-- CreateTable
CREATE TABLE "HomeBanner" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "destinationType" "BannerDestinationType" NOT NULL DEFAULT 'NONE',
    "productId" TEXT,
    "categoryId" TEXT,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromoNotice" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "position" "PromoNoticePosition" NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromoNotice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "HomeSectionType" NOT NULL,
    "order" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeSectionProduct" (
    "homeSectionId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "HomeSectionProduct_pkey" PRIMARY KEY ("homeSectionId","productId")
);

-- CreateIndex
CREATE INDEX "HomeBanner_order_idx" ON "HomeBanner"("order");

-- CreateIndex
CREATE INDEX "HomeBanner_active_idx" ON "HomeBanner"("active");

-- CreateIndex
CREATE INDEX "PromoNotice_position_idx" ON "PromoNotice"("position");

-- CreateIndex
CREATE INDEX "PromoNotice_active_idx" ON "PromoNotice"("active");

-- CreateIndex
CREATE INDEX "PromoNotice_startAt_endAt_idx" ON "PromoNotice"("startAt", "endAt");

-- CreateIndex
CREATE INDEX "HomeSection_order_idx" ON "HomeSection"("order");

-- CreateIndex
CREATE INDEX "HomeSection_active_idx" ON "HomeSection"("active");

-- CreateIndex
CREATE INDEX "HomeSectionProduct_homeSectionId_order_idx" ON "HomeSectionProduct"("homeSectionId", "order");

-- AddForeignKey
ALTER TABLE "HomeBanner" ADD CONSTRAINT "HomeBanner_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeBanner" ADD CONSTRAINT "HomeBanner_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeBanner" ADD CONSTRAINT "HomeBanner_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeSection" ADD CONSTRAINT "HomeSection_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeSection" ADD CONSTRAINT "HomeSection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeSectionProduct" ADD CONSTRAINT "HomeSectionProduct_homeSectionId_fkey" FOREIGN KEY ("homeSectionId") REFERENCES "HomeSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeSectionProduct" ADD CONSTRAINT "HomeSectionProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
