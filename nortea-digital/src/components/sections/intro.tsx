export function Intro() {
  return (
    <section id="nortea" className="section-space bg-natural">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="flex items-start gap-3 text-sm text-moss">
            <span className="mt-2 h-px w-10 bg-current" aria-hidden="true" />
            Nortea, antes do código
          </div>
          <div>
            <h2 className="font-display text-balance text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Não começamos pela tecnologia. Começamos entendendo o que seu negócio precisa.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-forest/20 pt-8 md:grid-cols-2">
              <p className="text-pretty text-lg leading-8 text-forest-black/78">
                Cada projeto recebe uma arquitetura coerente com a necessidade, o prazo e os recursos disponíveis.
              </p>
              <p className="text-pretty text-base leading-7 text-forest-black/62">
                Desempenho, manutenção, custos e possibilidade de crescimento entram na conversa desde o início. Assim, a tecnologia serve ao projeto e continua fazendo sentido depois da publicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
