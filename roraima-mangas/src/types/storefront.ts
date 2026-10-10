export type PublicProduct = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  price: number | string;
  stock: number;
  featured: boolean;
  isNew: boolean;
  newUntil?: string | null;
  featuredStartAt?: string | null;
  featuredEndAt?: string | null;
  status: string;
  details: { title: string; value: string }[];
  createdAt: string;
  images: { id: string; image: string; order: number }[];
  collections?: { collection: { id: string; name: string; slug: string } }[];
};

export function serializePublicProduct<T extends {
  price: unknown;
  details: unknown;
  featured: boolean;
  newUntil: Date | null;
  featuredStartAt: Date | null;
  featuredEndAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}>(product: T) {
  const now = new Date();
  return {
    ...product,
    featured: product.featured && (!product.featuredStartAt || product.featuredStartAt <= now) && (!product.featuredEndAt || product.featuredEndAt > now),
    isNew: Boolean(product.newUntil && product.newUntil > now),
    price: Number(product.price),
    details: Array.isArray(product.details) ? product.details.filter((entry): entry is { title: string; value: string } =>
      typeof entry === "object" && entry !== null && "title" in entry && "value" in entry &&
      typeof entry.title === "string" && typeof entry.value === "string") : [],
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
    newUntil: product.newUntil?.toISOString() ?? null,
    featuredStartAt: product.featuredStartAt?.toISOString() ?? null,
    featuredEndAt: product.featuredEndAt?.toISOString() ?? null,
  };
}
