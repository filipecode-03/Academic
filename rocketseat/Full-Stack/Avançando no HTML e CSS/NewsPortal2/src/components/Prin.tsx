

function Prin() {
    return (
        <section className="grid grid-cols-4 grid-rows-2 gap-4">
              <div className="relative col-span-2 row-span-2 h-122.5 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('./assets/images/image-01.png')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[12px] font-medium">
                          ROBÓTICA
                      </p>
                      <p className="mt-3 text-[28px] font-extrabold leading-9">
                          Robôs domésticos começam a ser adotados para tarefas diárias,
                          prometendo mais conforto e eficiência nas residências.
                      </p>
                  </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('./assets/images/image-02.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[12px] font-medium">
                          HOLOGRAMAS
                      </p>
                      <p className="mt-3 font-extrabold leading-6 line-clamp-3">
                          Novo Smartphone Projetor 3D chega ao mercado, transformando a forma como vemos nossas telas!
                      </p>
                  </div>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('./assets/images/image-03.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-[12px] font-medium">
                          INTERNET
                      </p>
                      <p className="mt-3 font-extrabold leading-6 line-clamp-3">
                          Tecnologia 6G chega às metrópoles brasileiras, prometendo revolucionar a forma como vivemos e nos comunicamos.
                      </p>
                  </div>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('./assets/images/image-04.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md uppercase text-[12px] font-medium">
                          Vestíveis
                      </p>
                      <p className="mt-3 font-extrabold leading-6 line-clamp-3">
                          Empresa lança relógio inteligente capaz de monitorar a saúde mental, oferecendo insights valiosos para o bem-estar pessoal.
                      </p>
                  </div>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('./assets/images/image-05.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md uppercase text-[12px] font-medium">
                          Realidade Virtual
                      </p>
                      <p className="mt-3 font-extrabold leading-6 line-clamp-3">
                          Escolas adotam a tecnologia VR para proporcionar experiências imersivas, transformando a aprendizagem tradicional.
                      </p>
                  </div>
              </div>
          </section>
    )
}

export default Prin