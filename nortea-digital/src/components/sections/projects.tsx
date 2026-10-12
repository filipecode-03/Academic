import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";

function ProjectMockup() {
  return (
    <div className="relative min-h-[30rem] overflow-hidden bg-mango-soft p-5 sm:p-8" aria-label="Mockup abstrato do projeto Roraima Mangas">
      <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full border-[3.5rem] border-mango/70" />
      <div className="relative mx-auto mt-6 max-w-2xl border border-forest-black/20 bg-natural shadow-[18px_18px_0_0_#123D2E]">
        <div className="flex h-11 items-center justify-between border-b border-forest-black/15 px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-forest/30" />
            <span className="h-2 w-2 rounded-full bg-forest/30" />
            <span className="h-2 w-2 rounded-full bg-forest/30" />
          </div>
          <span className="font-display text-xs font-semibold text-forest">RORAIMA MANGAS</span>
          <span className="text-xs text-moss">Loja</span>
        </div>
        <div className="grid min-h-[21rem] sm:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10">
            <div>
              <p className="text-xs text-moss">E-commerce</p>
              <p className="mt-4 font-display text-4xl font-medium leading-none tracking-[-0.06em] text-forest sm:text-6xl">
                Produto local, presença digital.
              </p>
            </div>
            <div className="mt-10 h-10 w-32 bg-forest" />
          </div>
          <div className="grid place-items-center bg-forest p-8">
            <div className="relative h-44 w-36 border border-natural/30">
              <div className="absolute inset-5 rounded-[45%_55%_50%_50%] bg-mango" />
              <div className="absolute left-1/2 top-3 h-12 w-5 -translate-x-1/2 -rotate-12 rounded-full bg-moss" />
              <div className="absolute inset-x-0 bottom-3 text-center text-[0.6rem] tracking-[0.2em] text-natural/70">PRODUTO</div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-4 left-5 bg-natural px-3 py-2 text-[0.65rem] text-forest-black sm:left-8">
        Mockup provisório. Substituir por captura real.
      </p>
    </div>
  );
}

export function Projects() {
  const project = projects[0];

  return (
    <section id="projetos" className="section-space bg-forest-black text-natural px-10">
      <div className="page-shell">
        <SectionHeading
          index="01 / Projetos"
          title="Um projeto real, apresentado com o que já sabemos."
          description="Sem números fabricados ou promessas genéricas. O estudo de caso cresce à medida que as informações e capturas reais forem adicionadas."
          light
        />

        <article className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <ProjectMockup />
          <div className="flex flex-col border-t border-natural/20 pt-6 lg:border-t-0 lg:pt-0">
            <p className="text-sm text-moss">{project.category}</p>
            <h3 className="mt-3 font-display text-5xl font-medium tracking-[-0.055em] sm:text-6xl">
              {project.name}
            </h3>
            <dl className="mt-10 grid gap-7 border-y border-natural/15 py-8 text-sm">
              <div className="grid gap-2 sm:grid-cols-[6rem_1fr]">
                <dt className="text-natural/40">Contexto</dt>
                <dd className="text-natural/72">{project.context}</dd>
              </div>
              <div className="grid gap-2 sm:grid-cols-[6rem_1fr]">
                <dt className="text-natural/40">Desafio</dt>
                <dd className="text-natural/72">{project.challenge}</dd>
              </div>
              <div className="grid gap-2 sm:grid-cols-[6rem_1fr]">
                <dt className="text-natural/40">Solução</dt>
                <dd className="text-natural/72">{project.solution}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="border border-natural/20 px-3 py-2 text-xs text-natural/65">
                  {technology}
                </span>
              ))}
            </div>
            <p className="mt-auto pt-10 text-xs leading-5 text-natural/40">
              Link do projeto e página individual preparados no arquivo de dados.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
