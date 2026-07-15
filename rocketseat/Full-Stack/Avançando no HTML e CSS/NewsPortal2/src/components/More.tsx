function More() {
    return (
        <section className="flex flex-col gap-6 border-t border-gray-800">
              <div className="pt-3 flex items-center text-[14px] justify-between">
                  <p>Mais lidas da semana</p>
                  <div className="flex items-center gap-2">
                      <p>Ver tudo</p>
                      <i className="ph ph-arrow-right"></i>
                  </div>
              </div>
              <div className="grid grid-cols-4 gap-5">
                  <div className="max-w-sm">
                      <div className="bg-[url('./assets/images/image-06.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p className="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">VEÍCULOS</p>
                      </div>
                      <p className="mt-4 font-extrabold leading-6 line-clamp-3">Protótipo de veículo voador é apresentado, marcando o início da era dos transportes aéreos pessoais</p>
                  </div>
                  <div className="max-w-sm">
                      <div className="bg-[url('./assets/images/image-07.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p className="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">HOLOGRAMAS</p>
                      </div>
                      <p className="mt-4 font-extrabold leading-6 line-clamp-3">Plataforma de videoconferência apresenta nova função de hologramas, tornando as chamadas virtuais mais realistas e envolventes.</p>
                  </div>
                  <div className="max-w-sm">
                      <div className="bg-[url('./assets/images/image-08.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p className="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">REALIDADE VIRTUAL</p>
                      </div>
                      <p className="mt-4 font-extrabold leading-6 line-clamp-3">Nova geração de consoles de videogame é lançada, trazendo gráficos ultra-realistas e experiências de jogo totalmente envolventes.</p>
                  </div>
                  <div className="max-w-sm">
                      <div className="bg-[url('./assets/images/image-09.png')] bg-cover bg-center h-48 p-4 flex items-start">
                          <p className="bg-[#1D4ED8] text-white w-fit px-3 py-1 rounded-md text-sm font-semibold">INTERNET</p>
                      </div>
                      <p className="mt-4 font-extrabold leading-6 line-clamp-3">Projeto busca oferecer internet de alta velocidade em áreas remotas através de satélites.</p>
                  </div>
              </div>
          </section>
    )
}

export default More