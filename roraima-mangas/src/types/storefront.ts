export type PublicProduct = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  price: number | string;
  compareAtPrice?: number | string | null;
  sku?: string | null;
  featured: boolean;
  isNew: boolean;
  status: string;
  createdAt: string;
  images: { id: string; image: string; order: number }[];
  category?: { id: string; name: string; slug: string } | null;
  collections?: { collection: { id: string; name: string; slug: string } }[];
};

export function serializePublicProduct<T extends {
  price: unknown;
  compareAtPrice: unknown;
  createdAt: Date;
  updatedAt: Date;
}>(product: T) {
  return {
    ...product,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice === null
      ? null
      : Number(product.compareAtPrice),
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };
}
