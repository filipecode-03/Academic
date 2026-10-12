import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="processo" className="section-space px-10 fine-grid overflow-hidden bg-mist/45">
      <div className="page-shell">
        <SectionHeading
          index="03 / Processo"
          title="Uma rota clara do primeiro diagnóstico ao lançamento."
          description="O processo organiza as decisões e mantém você por perto nos momentos que definem o resultado."
        />

        <div className="relative mt-20">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            className="absolute left-0 top-7 hidden h-32 w-full text-forest/35 lg:block"
            fill="none"
          >
            <path d="M18 38C207 38 165 119 376 119c186 0 175-81 370-81 191 0 175 81 436 81" stroke="currentColor" strokeWidth="2" strokeDasharray="7 9" />
          </svg>
          <ol className="relative grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className={`border border-forest/20 bg-natural p-6 lg:min-h-72 ${
                  index % 2 === 1 ? "lg:translate-y-20" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-forest font-display text-sm text-natural">
                    {index + 1}
                  </span>
                  <span className="h-px w-10 bg-forest/30" aria-hidden="true" />
                </div>
                <h3 className="mt-14 font-display text-3xl font-medium tracking-[-0.04em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-forest-black/64">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
