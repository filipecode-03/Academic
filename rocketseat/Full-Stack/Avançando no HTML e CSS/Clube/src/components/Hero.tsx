import Nav from "./Nav"
import bookMobile from '../assets/images/hero-background-mobile.png'
import book from '../assets/images/mystery-opened-spellbook.png'
import planchette from '../assets/images/mystery-ouija-planchette.png'
import ball from '../assets/images/mystery-crystal-ball.png'

function Hero() {
    return (
        <header className="text-white text-center h-186.75">
            <Nav />
            <img src={bookMobile} alt="book" className="absolute top-0 -z-1 w-full" />
            <section className="flex flex-col gap-4 p-5 mt-12">
                <h1 className="text-[38px] font-bold leading-12">Desperte a sua imaginação e explore novos mundos</h1>
                <p className="text-[#E2E7E9] text-[14px] leading-[140%]">Junte-se ao clube de assinatura Encantos Literários e descubra maravilhas e aventuras a cada página </p>
            </section>
            <section className="relative mt-[306px] px-5 py-[81px]">
                <img src={book} alt="book" className="absolute w-10" />
                <img src={planchette} alt="planchette" className="absolute w-10" />
                <img src={ball} alt="ball" className="absolute w-10" />
                <p>Receba todo mês um livro surpresa do seu tema favorito, acompanhado de brindes exclusivos que tornarão a sua experiência literária ainda mais encantadora.</p>
            </section>
        </header>
    )
}

export default Hero