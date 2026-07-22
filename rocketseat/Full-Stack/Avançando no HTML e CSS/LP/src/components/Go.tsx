import rapaz from '../assets/images/rapaz-ouvindo-musica-com-fones-de-ouvido-e-cantando-no-aplicativo-de-karaoke-removebg 1.png'
import apple from '../assets/images/apple.png'
import play from '../assets/images/play.png'

function Go() {
    
    return (
        <section className="py-12 lg:py-20 lg:px-8 px-6 overflow-hidden">
            <div className="relative overflow-visible rounded-3xl border border-[#27272A] bg-[#18181B] px-6 lg:px-20 pt-12 lg:py-35 pb-90">
                <div className="flex flex-col gap-2 lg:gap-0 lg:w-160">
                    <h3 className="text-[14px] font-medium text-[#F7B733]">
                        DOWNLOAD
                    </h3>
                    <h2 className="text-[24px] lg:text-[48px] font-extrabold">
                        Bora cantar?
                    </h2>
                    <p className="leading-[160%] text-[#A1A1AA]">
                        Desperte seu potencial de estrela, liberte sua voz e faça parte da
                        comunidade musical mais envolvente. Baixe o Zingen agora e transforme
                        suas performances em experiências inesquecíveis!
                    </p>
                </div>
                <div className='w-55 flex flex-col lg:flex-row gap-3.75 mt-8'>
                    <img src={apple} alt="apple" />
                    <img src={play} alt="play" />
                </div>
                <img
                    src={rapaz}
                    alt="Rapaz"
                    className="absolute -right-14 lg:-right-12 bottom-0 w-85 lg:w-120"
                />
            </div>
        </section>
    )
}

export default Go