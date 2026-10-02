ALTER TABLE "HomeBanner" ADD COLUMN "title" TEXT;
ALTER TABLE "HomeBanner" ADD COLUMN "description" TEXT;

WITH ranked_banners AS (
  SELECT
    id,
    ROW_NUMBER() OVER (ORDER BY "order" ASC, "createdAt" ASC, id ASC) AS sequence
  FROM "HomeBanner"
)
UPDATE "HomeBanner" AS banner
SET "title" = 'Banner existente ' || ranked_banners.sequence::text
FROM ranked_banners
WHERE banner.id = ranked_banners.id;

ALTER TABLE "HomeBanner" ALTER COLUMN "title" SET NOT NULL;
