import { RouteGraphic } from "@/components/ui/route-graphic";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] overflow-hidden bg-forest px-10 pt-28 text-natural"
    >
      <div className="topographic-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="page-shell relative z-10 grid flex-1 items-center gap-14 pb-10 pt-8 lg:grid-cols-[1.05fr_0.8fr] lg:pb-12 lg:pt-14">
        <div className="max-w-5xl">
          <p className="mb-7 max-w-sm text-sm leading-6 text-mist">
            Websites, e-commerces e sistemas sob medida.
          </p>
          <h1 className="font-display text-balance text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.91] tracking-[-0.068em]">
            Soluções digitais que dão direção ao seu negócio.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-natural/72 sm:text-xl">
            Criamos websites, lojas virtuais e sistemas sob medida, do planejamento à publicação.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex min-h-14 items-center justify-center bg-natural px-7 text-sm font-semibold text-forest-black transition-colors hover:bg-mist"
            >
              Conversar sobre meu projeto
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-14 items-center justify-center border border-natural/35 px-7 text-sm font-semibold transition-colors hover:border-natural hover:bg-natural/10"
            >
              Conhecer projetos
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[37rem] lg:self-end lg:pb-12">
          <RouteGraphic />
        </div>
        <a
          href="#nortea"
          className="col-span-full mt-auto inline-flex w-fit items-center gap-3 text-xs text-natural/55 transition-colors hover:text-natural"
        >
          <span className="h-8 w-px bg-natural/35" aria-hidden="true" />
          Continue a rota
        </a>
      </div>
    </section>
  );
}
