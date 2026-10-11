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
  const available = product.status === "ACTIVE" && product.stock > 0;

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_2px_8px_rgb(13_13_13/0.05)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-brand-secondary/60 hover:shadow-[0_10px_24px_rgb(13_13_13/0.09)]">
      <Link
        href={`/produtos/${product.slug}`}
        className="block focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none focus-visible:ring-inset"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-50 p-2 sm:p-3">
          {image ? (
            // Product images are stored on the configured object storage host.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-neutral-500">
              Imagem indisponível
            </div>
          )}
          {(product.featured || product.isNew || !available) && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {!available && (
                <span className="rounded-full bg-neutral-700/95 px-2.5 py-1 text-[0.68rem] font-semibold text-white shadow-sm">
                  Indisponível
                </span>
              )}
              {product.isNew && (
                <span className="rounded-full bg-brand-ink px-2.5 py-1 text-[0.68rem] font-semibold text-white shadow-sm">
                  Novo
                </span>
              )}
              {product.featured && (
                <span className="rounded-full bg-brand px-2.5 py-1 text-[0.68rem] font-semibold text-brand-deep shadow-sm">
                  Destaque
                </span>
              )}
            </div>
          )}
        </div>
        <div className="space-y-2 p-3.5 sm:p-4">
          <h3 className="line-clamp-2 min-h-10 text-sm leading-5 font-semibold text-neutral-800 transition-colors group-hover:text-brand-deep sm:text-base">
            {product.name}
          </h3>
          <div className="flex items-end justify-between gap-2">
            <p className="text-lg leading-none font-bold tracking-tight text-brand-ink sm:text-xl">
              {formatPrice(product.price)}
            </p>
            <span
              className={`text-[0.68rem] font-semibold ${available ? "text-neutral-500" : "text-neutral-400"}`}
            >
              {available ? "Disponível" : "Sem estoque"}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
