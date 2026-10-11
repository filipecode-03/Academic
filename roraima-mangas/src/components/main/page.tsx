"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/src/components/products/product-card";
import Skeleton from "@/src/components/ui/skeleton";
import type { PublicProduct } from "@/src/types/storefront";

type PromoNotice = { id: string; content: string; position: "TOP" | "BELOW_CAROUSEL" };
type Banner = {
  id: string;
  image: string;
  destinationType: "NONE" | "PRODUCT" | "COLLECTION";
  product: { slug: string } | null;
  collection: { slug: string } | null;
};
type HomeSection = {
  id: string;
  title: string;
  type: "MANUAL" | "COLLECTION";
  displayProducts: PublicProduct[];
  collection?: { slug: string } | null;
};
type CollectionBlock = {
  id: string;
  title: string;
  image: string;
  collection: { slug: string };
};
type HomeResponse = {
  success: boolean;
  message?: string;
  home?: {
    promoNotices: PromoNotice[];
    banners: Banner[];
    sections: HomeSection[];
    collectionBlocks: CollectionBlock[];
  };
};

function getBannerHref(banner: Banner) {
  if (banner.destinationType === "PRODUCT" && banner.product)
    return `/produtos/${banner.product.slug}`;
  if (banner.destinationType === "COLLECTION" && banner.collection)
    return `/colecoes/${banner.collection.slug}`;
  return null;
}

function NoticeStrip({ notices }: { notices: PromoNotice[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);

  useEffect(() => {
    if (notices.length < 2) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % notices.length),
      5_000,
    );
    return () => window.clearInterval(timer);
  }, [notices.length, timerVersion]);

  if (notices.length === 0) return null;
  const notice = notices[activeIndex % notices.length];

  function move(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + notices.length) % notices.length);
    setTimerVersion((version) => version + 1);
  }

  return (
    <section
      aria-label="Avisos da loja"
      aria-live="polite"
      className="border-b border-white/10 bg-brand-ink text-white"
    >
      <div className="mx-auto grid min-h-10 max-w-7xl grid-cols-[2.75rem_1fr_2.75rem] items-center px-1 sm:min-h-11 sm:px-4">
        {notices.length > 1 ? (
          <button
            type="button"
            aria-label="Aviso anterior"
            onClick={() => move(-1)}
            className="grid size-10 place-items-center rounded-full text-brand transition-colors duration-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </button>
        ) : (
          <span aria-hidden="true" />
        )}
        <p
          key={notice.id}
          className="animate-[noticeEnter_400ms_ease-out] px-2 text-center text-xs leading-5 font-medium tracking-wide text-pretty sm:text-sm"
        >
          {notice.content}
        </p>
        {notices.length > 1 ? (
          <button
            type="button"
            aria-label="Próximo aviso"
            onClick={() => move(1)}
            className="grid size-10 place-items-center rounded-full text-brand transition-colors duration-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <ChevronRight aria-hidden="true" className="size-4" />
          </button>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </section>
  );
}

function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);
  const touchStart = useRef<number | null>(null);
  const swipeHandled = useRef(false);

  useEffect(() => {
    if (banners.length < 2) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % banners.length),
      10_000,
    );
    return () => window.clearInterval(timer);
  }, [banners.length, timerVersion]);

  if (banners.length === 0) return null;
  const banner = banners[activeIndex % banners.length];
  const href = getBannerHref(banner);
  const image = (
    // Banner URLs come from the configured object storage host.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={banner.image}
      alt="Banner da loja"
      className="h-full w-full object-cover motion-safe:animate-[heroEnter_650ms_cubic-bezier(0.22,1,0.36,1)]"
      fetchPriority="high"
    />
  );

  function move(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + banners.length) % banners.length);
    setTimerVersion((version) => version + 1);
  }

  return (
    <section
      aria-label="Banners em destaque"
      className="relative aspect-[16/9] w-full touch-pan-y overflow-hidden bg-neutral-100 sm:aspect-[12/5] lg:aspect-[16/5] xl:max-h-[34rem]"
      onPointerDown={(event) => {
        if (event.pointerType === "touch") touchStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== "touch" || touchStart.current === null) return;
        const distance = event.clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(distance) < 40 || banners.length < 2) return;
        swipeHandled.current = true;
        move(distance < 0 ? 1 : -1);
      }}
    >
      <div key={banner.id} className="h-full">
        {href ? (
          <Link
            href={href}
            aria-label="Acessar conteúdo do banner"
            className="block h-full focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none focus-visible:ring-inset"
            onClick={(event) => {
              if (swipeHandled.current) {
                event.preventDefault();
                swipeHandled.current = false;
              }
            }}
          >
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
      {banners.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Banner anterior"
            className="absolute top-1/2 left-5 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-brand-ink/65 text-white shadow-sm backdrop-blur-sm transition duration-200 hover:bg-brand-ink/85 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none md:grid"
            onClick={() => move(-1)}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo banner"
            className="absolute top-1/2 right-5 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-brand-ink/65 text-white shadow-sm backdrop-blur-sm transition duration-200 hover:bg-brand-ink/85 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none md:grid"
            onClick={() => move(1)}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-ink/45 px-2.5 py-2 backdrop-blur-sm sm:bottom-5">
            {banners.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Mostrar banner ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none ${index === activeIndex ? "w-6 bg-brand" : "w-1.5 bg-white/70 hover:bg-white"}`}
                onClick={() => {
                  setActiveIndex(index);
                  setTimerVersion((version) => version + 1);
                }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function CarouselControls({
  label,
  onPrevious,
  onNext,
  previousDisabled = false,
  nextDisabled = false,
  spread = false,
}: {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  spread?: boolean;
}) {
  return (
    <div className={`hidden items-center gap-2 md:flex ${spread ? "w-full justify-between" : ""}`}>
      <button
        type="button"
        aria-label={`${label} anteriores`}
        onClick={onPrevious}
        disabled={previousDisabled}
        className="grid size-10 place-items-center rounded-full border border-border bg-card text-brand-deep shadow-sm transition-[color,background-color,border-color,opacity] duration-200 hover:border-brand-secondary hover:bg-brand/15 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-35 dark:text-brand"
      >
        <ChevronLeft aria-hidden="true" className="size-4" />
      </button>
      <button
        type="button"
        aria-label={`Próximos ${label.toLocaleLowerCase()}`}
        onClick={onNext}
        disabled={nextDisabled}
        className="grid size-10 place-items-center rounded-full border border-border bg-card text-brand-deep shadow-sm transition-[color,background-color,border-color,opacity] duration-200 hover:border-brand-secondary hover:bg-brand/15 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-35 dark:text-brand"
      >
        <ChevronRight aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}

function CollectionShowcase({ blocks }: { blocks: CollectionBlock[] }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) =>
    track.current?.scrollBy({
      left: direction * track.current.clientWidth * 0.82,
      behavior: "smooth",
    });

  return (
    <section aria-labelledby="collection-showcase-title" className="space-y-5">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-xs font-bold tracking-[0.18em] text-brand-accent uppercase">
            Explore a loja
          </p>
          <h2
            id="collection-showcase-title"
            className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl dark:text-brand"
          >
            Universos em destaque
          </h2>
        </div>
        {blocks.length > 1 && (
          <CarouselControls label="Atalhos" onPrevious={() => move(-1)} onNext={() => move(1)} />
        )}
      </div>
      <div
        ref={track}
        className="storefront-scroll-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5"
      >
        {blocks.map((block) => (
          <Link
            key={block.id}
            href={`/colecoes/${block.collection.slug}`}
            className="group relative aspect-[4/5] w-[78%] max-w-sm shrink-0 snap-start overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_2px_10px_rgb(13_13_13/0.08)] focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:outline-none sm:w-[44%] md:w-[35%] lg:w-[calc((100%_-_3.75rem)/4)]"
          >
            {/* Home shortcut images are managed through the existing Admin. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/10 to-transparent transition-colors duration-300 group-hover:from-brand-ink/95" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
              <span className="text-xl leading-tight font-bold tracking-tight text-balance transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-2xl">
                {block.title}
              </span>
              <span className="grid size-9 shrink-0 translate-x-2 place-items-center rounded-full border border-white/35 bg-white/10 opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight aria-hidden="true" className="size-4" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeProductCarousel({ products }: { products: PublicProduct[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const updateControls = () => {
      setCanGoBack(element.scrollLeft > 2);
      setCanGoForward(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    };
    updateControls();
    element.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      element.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [products.length]);

  const move = (direction: -1 | 1) =>
    track.current?.scrollBy({
      left: direction * track.current.clientWidth,
      behavior: "smooth",
    });

  return (
    <div className="relative">
      <div
        ref={track}
        className="storefront-scroll-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 sm:gap-5"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[82%] shrink-0 snap-start min-[420px]:w-[calc((100%_-_0.75rem)/2)] sm:w-[calc((100%_-_2.5rem)/3)] lg:w-[calc((100%_-_3.75rem)/4)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {products.length > 1 && (
        <div className="pointer-events-none absolute inset-x-2 top-1/2 z-20 hidden -translate-y-1/2 md:flex">
          <div className="pointer-events-auto w-full">
            <CarouselControls
              label="Produtos"
              onPrevious={() => move(-1)}
              onNext={() => move(1)}
              previousDisabled={!canGoBack}
              nextDisabled={!canGoForward}
              spread
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Main() {
  const [home, setHome] = useState<HomeResponse["home"]>();
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/home", { cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json()) as HomeResponse;
        if (!response.ok || !data.success || !data.home) {
          throw new Error(data.message ?? "Não foi possível carregar a Home.");
        }
        if (!cancelled) setHome(data.home);
      })
      .catch((cause: unknown) => {
        console.error("Erro ao carregar a Home pública:", cause);
        if (!cancelled) setError("Não foi possível carregar o conteúdo da loja agora.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error)
    return (
      <main className="mx-auto min-h-40 max-w-7xl px-4 py-10 text-center" role="status">
        {error}
      </main>
    );

  const notices = home?.promoNotices ?? [];
  return (
    <main className="min-h-40 overflow-hidden bg-background">
      <NoticeStrip notices={notices.filter(({ position }) => position === "TOP")} />
      {home ? (
        <BannerCarousel banners={home.banners} />
      ) : (
        <Skeleton className="aspect-[16/9] w-full rounded-none sm:aspect-[12/5] lg:aspect-[16/5]" />
      )}
      <NoticeStrip notices={notices.filter(({ position }) => position === "BELOW_CAROUSEL")} />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:space-y-16 sm:px-6 sm:py-14 lg:space-y-20 lg:px-8 lg:py-16">
        {home && home.collectionBlocks.length > 0 && (
          <CollectionShowcase blocks={home.collectionBlocks} />
        )}

        {!home ? (
          <div className="space-y-14" aria-label="Carregando conteúdo da loja">
            {[0, 1].map((row) => (
              <section key={row} className="space-y-5">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                  {[0, 1, 2, 3].map((card) => (
                    <Skeleton key={card} className="aspect-[3/4] rounded-2xl" />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-16 lg:space-y-20">
            {home.sections.map((section) => (
              <section
                key={section.id}
                className="space-y-5"
                aria-labelledby={`section-${section.id}`}
              >
                <div className="flex items-end justify-between gap-4 border-b border-brand-secondary/35 pb-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span aria-hidden="true" className="h-8 w-1 rounded-full bg-brand-accent" />
                    <h2
                      id={`section-${section.id}`}
                      className="text-xl leading-tight font-bold tracking-tight text-brand-ink sm:text-3xl dark:text-brand"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <Link
                    href={
                      section.type === "COLLECTION" && section.collection
                        ? `/colecoes/${section.collection.slug}`
                        : `/secoes/${section.id}`
                    }
                    className="group/link flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand/15 focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:outline-none"
                  >
                    Ver todos
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
                {section.displayProducts.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-neutral-300 bg-white p-6 text-sm text-neutral-600">
                    Nenhum produto disponível nesta seção.
                  </p>
                ) : (
                  <HomeProductCarousel products={section.displayProducts.slice(0, 10)} />
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
