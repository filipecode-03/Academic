function Prin() {
    return (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {/* Card principal */}
            <div className="relative h-80 overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2 lg:h-[490px]">
                <div className="absolute inset-0 bg-[url('./assets/images/image-01.png')] bg-cover bg-center"></div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white lg:p-8">
                    <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-medium lg:text-xs">
                        ROBÓTICA
                    </p>

                    <p className="mt-3 text-xl font-extrabold leading-7 lg:text-[28px] lg:leading-9">
                        Robôs domésticos começam a ser adotados para tarefas diárias,
                        prometendo mais conforto e eficiência nas residências.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-52 overflow-hidden rounded-lg lg:h-auto">
                <div className="absolute inset-0 bg-[url('./assets/images/image-02.png')] bg-cover bg-center"></div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white lg:p-6">
                    <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-medium lg:text-xs">
                        HOLOGRAMAS
                    </p>

                    <p className="mt-3 text-base font-extrabold leading-6 lg:line-clamp-3">
                        Novo Smartphone Projetor 3D chega ao mercado, transformando a
                        forma como vemos nossas telas!
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-52 overflow-hidden rounded-lg lg:h-auto">
                <div className="absolute inset-0 bg-[url('./assets/images/image-03.png')] bg-cover bg-center"></div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white lg:p-6">
                    <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-medium lg:text-xs">
                        INTERNET
                    </p>

                    <p className="mt-3 text-base font-extrabold leading-6 lg:line-clamp-3">
                        Tecnologia 6G chega às metrópoles brasileiras, prometendo
                        revolucionar a forma como vivemos e nos comunicamos.
                    </p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="relative h-52 overflow-hidden rounded-lg lg:h-auto">
                <div className="absolute inset-0 bg-[url('./assets/images/image-04.png')] bg-cover bg-center"></div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white lg:p-6">
                    <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-medium uppercase lg:text-xs">
                        Vestíveis
                    </p>

                    <p className="mt-3 text-base font-extrabold leading-6 lg:line-clamp-3">
                        Empresa lança relógio inteligente capaz de monitorar a saúde
                        mental, oferecendo insights valiosos para o bem-estar pessoal.
                    </p>
                </div>
            </div>

            {/* Card 5 */}
            <div className="relative h-52 overflow-hidden rounded-lg lg:h-auto">
                <div className="absolute inset-0 bg-[url('./assets/images/image-05.png')] bg-cover bg-center"></div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white lg:p-6">
                    <p className="w-fit rounded-md bg-[#1D4ED8] px-3 py-1 text-[11px] font-medium uppercase lg:text-xs">
                        Realidade Virtual
                    </p>

                    <p className="mt-3 text-base font-extrabold leading-6 lg:line-clamp-3">
                        Escolas adotam a tecnologia VR para proporcionar experiências
                        imersivas, transformando a aprendizagem tradicional.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Prin;