import Profile from '../assets/images/Avatar.png'
import github from '../assets/images/GitHub.png'
import html from '../assets/images/HTML.png'
import css from '../assets/images/CSS.png'
import js from '../assets/images/JavaScript.png'
import react from '../assets/images/React.png'
import node from '../assets/images/Node.js.png'
import CaretDoubleDown from '../assets/images/CaretDoubleDown.png'
import BackgroundIntro from "../assets/images/Background_Intro.png";

function Header() {
    return (
        <header className="text-white text-center pt-30 px-40.75 pb-14.25 bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundIntro})` }}>           
            <section>
                <div className='w-170 mx-auto'>
                    <img src={Profile} alt="profile" className='mx-auto' />
                    <h2 className='mt-16 font-[Inconsolata] text-[20px] text-[#C0C4CE]'>Hello World! Meu nome é <span className='text-[#E3646E]'>Martina Santos</span> e sou</h2>
                    <h1 className="font-['Asap'] font-bold text-[56px]">Desenvolvedora Fullstack</h1>
                    <p className='font-[Maven_Pro] text-[14px] text-[#878EA1]'>Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
                </div>
                <section className='flex items-center justify-center gap-5 mt-20'>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={github} alt="github" />
                        <p>GitHub</p>
                    </div>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={html} alt="html" />
                        <p>HTML</p>
                    </div>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={css} alt="css" />
                        <p>CSS</p>
                    </div>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={js} alt="javascript" />
                        <p>Javascript</p>
                    </div>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={react} alt="React" />
                        <p>React</p>
                    </div>
                    <div className='bg-[#292C34] flex items-center gap-2 px-4 rounded-full py-1'>
                        <img src={node} alt="node" />
                        <p>Node.js</p>
                    </div>
                </section>
                <img src={CaretDoubleDown} alt="CaretDoubleDown" className='mx-auto mt-23.5' />
            </section>
        </header>
    )
}

export default Header