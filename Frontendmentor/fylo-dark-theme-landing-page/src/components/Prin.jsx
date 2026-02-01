import illustration from '../assets/images/illustration-intro.png'
import curvyDesktop from '../assets/images/bg-curvy-desktop.svg'
import curvyMobile from '../assets/images/bg-curvy-mobile.svg'

function Prin() {
    return (
        <main>
            <section className='absolute'>
                <img src={illustration} alt="illustration" />
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </section>
            <img src={curvyMobile} alt="curvy" className='w-full' />

        </main>
    )
}

export default Prin