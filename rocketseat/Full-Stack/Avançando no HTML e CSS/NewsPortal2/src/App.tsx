import Header from './components/Header.tsx'

function App() {

  return (
    <>
      <Header />
      <main className="px-[32px] mt-[40px] mb-[80px] flex flex-col gap-[80px]">
          <section className="grid grid-cols-4 grid-rows-2 gap-4">
              <div className="relative col-span-2 row-span-2 h-[608px] overflow-hidden rounded-[8px]">
                  
                  <div className="absolute inset-0 bg-[url('images/image-01.png')] bg-cover bg-center"></div>
              
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="relative z-10 flex h-full flex-col justify-end p-[32px] text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-sm font-semibold">
                          ROBÓTICA
                      </p>
                      <p className="mt-3 text-[38px] font-extrabold leading-tight">
                          Robôs domésticos começam a ser adotados para tarefas diárias,
                          prometendo mais conforto e eficiência nas residências.
                      </p>
                  </div>
              </div>
              <div className="relative overflow-hidden rounded-[8px]">
                  <div className="absolute inset-0 bg-[url('images/image-02.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      <p className="bg-[#1D4ED8] w-fit px-3 py-1 rounded-md text-sm font-semibold">
                          HOLOGRAMAS
                      </p>
                      <p className="mt-3 text-[20px] font-extrabold leading-tight">
                          Novo Smartphone Projetor 3D chega ao mercado, transformando a forma como vemos nossas telas!
                      </p>
                  </div>
              </div>

              <div className="relative overflow-hidden rounded-[8px]">
                  <div className="absolute inset-0 bg-[url('images/image-03.png')] bg-cover bg-center"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      
                  </div>
              </div>

              <div class="relative overflow-hidden rounded-[8px]">
                  <div class="absolute inset-0 bg-[url('images/image-04.png')] bg-cover bg-center"></div>

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div class="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      
                  </div>
              </div>

              <div class="relative overflow-hidden rounded-[8px]">
                  <div class="absolute inset-0 bg-[url('images/image-05.png')] bg-cover bg-center"></div>

                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div class="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                      
                  </div>
              </div>
          </section>
          <section class="flex flex-col gap-[24px] border-t border-gray-800">
              <div class="pt-[12px] flex items-center text-[14px] justify-between">
                  <p>Mais lidas da semana</p>
                  <div class="flex items-center gap-2">
                      <p>Ver tudo</p>
                      <i class="ph ph-arrow-right"></i>
                  </div>
              </div>
              <div class="grid grid-cols-4 gap-5">
                  <div class="max-w-sm">
                      <div class="bg-[url('images/image-06.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p class="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">VEÍCULOS</p>
                      </div>
                      <p class="mt-4 font-extrabold leading-6 line-clamp-3">Protótipo de veículo voador é apresentado, marcando o início da era dos transportes aéreos pessoais</p>
                  </div>
                  <div class="max-w-sm">
                      <div class="bg-[url('images/image-07.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p class="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">HOLOGRAMAS</p>
                      </div>
                      <p class="mt-4 font-extrabold leading-6 line-clamp-3">Plataforma de videoconferência apresenta nova função de hologramas, tornando as chamadas virtuais mais realistas e envolventes.</p>
                  </div>
                  <div class="max-w-sm">
                      <div class="bg-[url('images/image-08.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p class="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">REALIDADE VIRTUAL</p>
                      </div>
                      <p class="mt-4 font-extrabold leading-6 line-clamp-3">Nova geração de consoles de videogame é lançada, trazendo gráficos ultra-realistas e experiências de jogo totalmente envolventes.</p>
                  </div>
                  <div class="max-w-sm">
                      <div class="bg-[url('images/image-09.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p class="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">INTERNET</p>
                      </div>
                      <p class="mt-4 font-extrabold leading-6 line-clamp-3">Projeto busca oferecer internet de alta velocidade em áreas remotas através de satélites.</p>
                  </div>
              </div>
          </section>
          <section>

          </section>
      </main>
    </>
  )
}

export default App
