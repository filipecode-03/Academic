import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="servicos" className="section-space bg-natural">
      <div className="page-shell">
        <SectionHeading
          index="02 / Serviços"
          title="A solução certa depende do que precisa avançar."
          description="Cada entrega combina estratégia, experiência e desenvolvimento na medida necessária para o seu projeto."
        />

        <div className="mt-16 border-y border-forest/20">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid gap-6 border-b border-forest/15 py-8 last:border-b-0 md:grid-cols-[5rem_0.9fr_1.1fr] md:items-start md:py-10"
            >
              <p className="font-display text-sm tabular-nums text-moss">0{index + 1}</p>
              <h3 className="font-display text-3xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                {service.title}
              </h3>
              <div className="grid gap-4 text-pretty leading-7 md:grid-cols-2">
                <p className="text-forest-black/68">{service.description}</p>
                <p className="text-forest">{service.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
