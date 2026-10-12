import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/content";

export function FAQ() {
  return (
    <section className="section-space bg-mist/35">
      <div className="page-shell">
        <SectionHeading
          index="06 / Perguntas frequentes"
          title="O que vale alinhar antes de começar."
          description="Respostas diretas para as dúvidas mais comuns sobre escopo, investimento e acompanhamento."
        />
        <div className="mt-16 ml-auto max-w-4xl border-t border-forest/20">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-forest/20">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 marker:content-none">
                <span className="flex gap-5">
                  <span className="mt-1 font-display text-xs text-moss">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl font-medium tracking-[-0.025em] sm:text-2xl">{faq.question}</span>
                </span>
                <span className="relative mt-2 h-5 w-5 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-5 bg-forest" />
                  <span className="absolute left-1/2 top-0 h-5 w-px bg-forest transition-transform group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pl-10 text-pretty leading-7 text-forest-black/66 sm:pl-12">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
