import Nav from "./Nav"
import bookMobile from '../assets/images/hero-background-mobile.png'

function Hero() {
    return (
        <header className="text-white">
            <Nav />
            <img src={bookMobile} alt="book" />
            <section className="flex flex-col gap-4">
                <h1>Desperte a sua imaginação e explore novos mundos</h1>
                <p>Junte-se ao clube de assinatura Encantos Literários e descubra maravilhas e aventuras a cada página </p>
            </section>
        </header>
    )
}

export default Hero