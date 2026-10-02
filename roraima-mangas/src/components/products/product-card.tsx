import Link from "next/link";
import type { PublicProduct } from "@/src/types/storefront";

function formatPrice(value: number | string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));
}

export default function ProductCard({ product }: { product: PublicProduct }) {
  const image = product.images[0]?.image;
  const compareAtPrice = product.compareAtPrice == null ? null : Number(product.compareAtPrice);
  const hasDiscount = compareAtPrice !== null && compareAtPrice > Number(product.price);

  return (
    <article className="min-w-0 overflow-hidden rounded-lg border bg-white">
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-neutral-100">
          {image ? (
            // Product images are stored on the configured object storage host.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-neutral-500">
              Imagem indisponível
            </div>
          )}
          {(product.featured || product.isNew || product.status === "OUT_OF_STOCK") && (
            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
              {product.status === "OUT_OF_STOCK" && <span className="rounded bg-neutral-700 px-2 py-1 text-xs text-white">Sem estoque</span>}
              {product.isNew && <span className="rounded bg-black px-2 py-1 text-xs text-white">Novo</span>}
              {product.featured && <span className="rounded bg-yellow-300 px-2 py-1 text-xs text-black">Destaque</span>}
            </div>
          )}
        </div>
        <div className="space-y-1 p-3">
          <h3 className="line-clamp-2 min-h-10 font-medium">{product.name}</h3>
          {hasDiscount && <p className="text-sm text-neutral-500 line-through">{formatPrice(compareAtPrice)}</p>}
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
