import phones from '../assets/images/App-mockups.png'

function About() {
    return (
        <section className="bg-[#18181B] lg:flex-row lg:items-center lg:justify-between px-6 lg:px-8 pb-12 lg:pb-20 flex flex-col gap-2">
            <div className='lg:w-197.5'>
                <h3 className="text-[#F7B733] font-medium text-[14px]">CONHEÇA O APP</h3>
                <h2 className="text-[24px] lg:text-[48px] font-extrabold leading-[120%]">O aplicativo perfeito para aprender a cantar</h2>
                <p className="text-[#A1A1AA] mt-2 leading-[160%]">Nosso algoritmo de Inteligência Artificial permite remover a voz original e manter as melodias das músicas. Dessa forma, temos o maior repertório musical para Karaokê! Além disso, ao cantar, sua voz e afinação é comparada pelo algoritmo permitindo uma avaliação precisa da sua performance te ajudando a melhorar seu canto.</p>
            </div>
            <img src={phones} alt="phones" className='hidden lg:block w-150' />
        </section>
    )
}

export default About