import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="sobre" className="section-space bg-natural px-10">
      <div className="page-shell">
        <SectionHeading
          index="05 / Sobre"
          title="Desenvolvimento digital com conversa direta."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-forest/20 bg-mist">
              <svg aria-hidden="true" viewBox="0 0 500 625" className="absolute inset-0 h-full w-full text-forest/30" fill="none">
                <path d="M-90 520C82 346 74 89 280 80c169-7 203 184 337 196" stroke="currentColor" />
                <path d="M-20 586C118 425 125 158 296 145c132-10 181 144 281 166" stroke="currentColor" />
                <circle cx="290" cy="245" r="92" stroke="currentColor" />
                <path d="M136 558c26-138 94-217 179-217s148 72 170 217" stroke="currentColor" />
              </svg>
              <p className="absolute inset-x-6 bottom-6 border-t border-forest/25 pt-4 font-display text-sm text-forest">
                {siteConfig.owner.photo}
              </p>
            </div>
            <div className="mt-5 grid gap-1 text-sm text-forest-black/55">
              <p>{siteConfig.owner.name}</p>
              <p>{siteConfig.owner.location}</p>
              <p>{siteConfig.owner.professionalLinks}</p>
            </div>
          </div>
          <div className="lg:pt-16">
            <p className="font-display text-balance text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              A Nortea Digital nasceu para transformar necessidades de negócio em produtos digitais claros, funcionais e preparados para evoluir.
            </p>
            <div className="mt-10 grid gap-8 border-t border-forest/20 pt-8 md:grid-cols-2">
              <p className="text-pretty text-lg leading-8 text-forest-black/72">
                Cada projeto é desenvolvido com acompanhamento próximo, decisões transparentes e atenção aos detalhes que afetam a experiência do cliente.
              </p>
              <div>
                <p className="text-sm leading-6 text-forest-black/55">
                  Este bloco está centralizado na configuração do projeto para receber nome, foto, biografia, localização e links profissionais reais.
                </p>
                <p className="mt-5 border-l-2 border-moss pl-4 text-sm text-moss">
                  {siteConfig.owner.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
