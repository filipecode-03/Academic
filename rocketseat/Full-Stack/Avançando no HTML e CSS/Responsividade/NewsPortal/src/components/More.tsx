import { ArrowRight } from 'lucide-react';

function More() {
    return (
        <section className="flex flex-col gap-6 border-t border-gray-800">
              <div className="pt-3 flex items-center text-[14px] font-semibold justify-between">
                  <p>Mais lidas da semana</p>
                  <div className="flex items-center gap-2">
                      <p>Ver tudo</p>
                      <ArrowRight size={16} />
                  </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 */}
                <article>
                    <div className="flex h-52 items-start bg-[url('./assets/images/image-06.png')] bg-cover bg-center p-4">
                        <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-semibold text-white lg:text-sm">
                            VEÍCULOS
                        </p>
                    </div>

                    <p className="mt-4 text-base font-extrabold leading-6 line-clamp-3">
                        Protótipo de veículo voador é apresentado, marcando o
                        início da era dos transportes aéreos pessoais.
                    </p>
                </article>

                {/* Card 2 */}
                <article>
                    <div className="flex h-52 items-start bg-[url('./assets/images/image-07.png')] bg-cover bg-center p-4">
                        <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-semibold text-white lg:text-sm">
                            HOLOGRAMAS
                        </p>
                    </div>

                    <p className="mt-4 text-base font-extrabold leading-6 line-clamp-3">
                        Plataforma de videoconferência apresenta nova função de
                        hologramas, tornando as chamadas virtuais mais realistas
                        e envolventes.
                    </p>
                </article>

                {/* Card 3 */}
                <article>
                    <div className="flex h-52 items-start bg-[url('./assets/images/image-08.png')] bg-cover bg-center p-4">
                        <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-semibold text-white lg:text-sm">
                            REALIDADE VIRTUAL
                        </p>
                    </div>

                    <p className="mt-4 text-base font-extrabold leading-6 line-clamp-3">
                        Nova geração de consoles de videogame é lançada,
                        trazendo gráficos ultra-realistas e experiências de jogo
                        totalmente envolventes.
                    </p>
                </article>

                {/* Card 4 */}
                <article>
                    <div className="flex h-52 items-start bg-[url('./assets/images/image-09.png')] bg-cover bg-center p-4">
                        <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-semibold text-white lg:text-sm">
                            INTERNET
                        </p>
                    </div>

                    <p className="mt-4 text-base font-extrabold leading-6 line-clamp-3">
                        Projeto busca oferecer internet de alta velocidade em
                        áreas remotas através de satélites.
                    </p>
                </article>
            </div>
          </section>
    )
}

export default More