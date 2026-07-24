import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { PricingCard } from "./PricingCard";

const plans = [
  {
    title: "Mensal",
    featured: false,
    price: "R$ 59,90",
    yearly: "R$ 718,80 por ano",
    button: "Assinar mensal",
    benefits: [
      "Kit mensal com livros temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
    ],
  },
  {
    title: "Semestral",
    featured: true,
    price: "R$ 52,90",
    yearly: "R$ 634,80 por semestre",
    button: "Assinar semestral",
    benefits: [
      "Kit mensal com livro temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
      "Membro premium do clube"
    ],
  },
  {
    title: "Anual",
    featured: false,
    price: "R$ 48,90",
    yearly: "R$ 586,80 por ano",
    button: "Assinar anual",
    benefits: [
      "Kit mensal com livro temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
      "Membro premium do clube",
      "Planner anual de leituras",
    ],
  },
];

export function PricingCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;

    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    onSelect();

    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="w-full overflow-hidden mt-12">
        <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex ml-4">
                {plans.map((plan, index) => (
                    <div
                    key={plan.title}
                    className="
                        flex-[0_0_90%]
                        pl-4
                    "
                    >
                    <PricingCard
                        {...plan}
    active={selected === index}
    featured={plan.featured}
                    />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}