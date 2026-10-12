import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators } from "@/data/content";

export function Differentials() {
  return (
    <section className="section-space bg-forest text-natural">
      <div className="page-shell">
        <SectionHeading
          index="04 / Como trabalhamos"
          title="Decisões transparentes. Código com futuro."
          description="Critérios práticos que orientam a parceria do início ao acompanhamento depois da entrega."
          light
        />
        <ul className="mt-16 grid border-l border-t border-natural/15 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <li
              key={item}
              className={`min-h-52 border-b border-r border-natural/15 p-7 sm:p-9 ${
                index === 1 || index === 4 ? "bg-natural/[0.045]" : ""
              }`}
            >
              <span className="font-display text-xs text-moss">N.{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-16 max-w-xs font-display text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
