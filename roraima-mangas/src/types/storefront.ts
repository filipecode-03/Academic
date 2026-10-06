export type PublicProduct = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  price: number | string;
  stock: number;
  featured: boolean;
  isNew: boolean;
  status: string;
  details: { title: string; value: string }[];
  createdAt: string;
  images: { id: string; image: string; order: number }[];
  category?: { id: string; name: string; slug: string } | null;
  collections?: { collection: { id: string; name: string; slug: string } }[];
};

export function serializePublicProduct<T extends {
  price: unknown;
  details: unknown;
  createdAt: Date;
  updatedAt: Date;
}>(product: T) {
  return {
    ...product,
    price: Number(product.price),
    details: Array.isArray(product.details) ? product.details.filter((entry): entry is { title: string; value: string } =>
      typeof entry === "object" && entry !== null && "title" in entry && "value" in entry &&
      typeof entry.title === "string" && typeof entry.value === "string") : [],
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };
}
