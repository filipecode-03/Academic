import Music from '../assets/images/Music-bars.png'
import eclipse from '../assets/images/Ellipse.png'
import phones from '../assets/images/App-mockups.png'

function Header() {
    return (
        <header className="text-center relative overflow-hidden pb-140">
            <div
                className="
                    absolute
                    -bottom-24
                    left-1/2
                    h-200 lg:h-100
                    w-full
                    -translate-x-1/2
                    rounded-full
                    blur-[60px]
                    lg:blur-[80px]
                    z-0
                "
                style={{
                    background: `
                    radial-gradient(circle at 18% 100%,
                        #F7B733 0%,
                        #F7B733 40%,
                        transparent 60%),
                    radial-gradient(circle at 72% 100%,
                        #FC4B1A 0%,
                        #FC4B1A 50%,
                        transparent 60%)
                    `,
                }}
            />
            <section className="relative z-20 flex pt-16 px-6 flex-col gap-8">
                <div>
                    <img src={Music} alt="Music bars" className='mx-auto lg:w-103' />
                    <h1 className='mt-4 font-extrabold text-[40px] lg:text-[64px] leading-14'>Quem canta seus males espanta</h1>
                    <h2 className='font-medium text-[20px] lg:text-[40px] text-[#A1A1AA] mt-2'>Cantar nunca foi tão fácil</h2>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <button className='rounded-lg py-3 font-medium px-6 border border-white'>Ver planos</button>
                    <button className='bg-white text-black rounded-lg py-3 font-medium px-6'>
                        Baixar agora
                    </button>
                </div>
            </section>
            <img
                src={eclipse}
                alt="eclipse"
                className="
                absolute
                left-1/2
                top-155 lg:top-165
                -translate-x-1/2
                w-350 lg:w-[4500px]
                max-w-none
                z-10
                "
            />
            <img src={phones} alt="phones" className='absolute block lg:hidden w-103 -translate-x-1/2 left-1/2 z-20 top-115' />
        </header>
    )
}

export default Header