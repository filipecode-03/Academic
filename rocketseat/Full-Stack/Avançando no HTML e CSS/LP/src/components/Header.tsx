import Music from '../assets/images/Music-bars.png'
import eclipse from '../assets/images/Ellipse.png'

function Header() {
    return (
        <header className="text-center relative overflow-hidden pb-100">
            <div
                className="
                    absolute
                    -bottom-24
                    left-1/2
                    h-72
                    w-225
                    -translate-x-1/2
                    rounded-full
                    blur-3xl
                "
                style={{
                    background: `
                    radial-gradient(circle at 18% 100%,
                        rgba(247,183,51,.85) 0%,
                        rgba(247,183,51,.35) 50%,
                        transparent 60%),
                    radial-gradient(circle at 72% 100%,
                        rgba(252,75,26,.75) 0%,
                        rgba(252,75,26,.25) 50%,
                        transparent 60%)
                    `,
                }}
            />
            <section className="flex pt-16 px-6 flex-col gap-8">
                <div>
                    <img src={Music} alt="Music bars" className='mx-auto' />
                    <h1 className='mt-4 font-extrabold text-[40px] leading-14'>Quem canta seus males espanta</h1>
                    <h2 className='font-medium text-[20px] text-[#A1A1AA] mt-2'>Cantar nunca foi tão fácil</h2>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <button className='rounded-lg py-3 font-medium px-6 border border-white'>Ver planos</button>
                    <button className='bg-white text-black rounded-lg py-3 font-medium px-6'>
                        Baixar agora
                    </button>
                </div>
            </section>
            <img src={eclipse} alt="eclipse" className='absolute' />
        </header>
    )
}

export default Header