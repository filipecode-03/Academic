import grade from '../../public/images/pattern-lines.svg'
import lineTop from '../../public/images/pattern-squiggly-line-top.svg'
import logoFull from '../../public/images/logo-full.svg'

function Intro() {
    return (
        <div className="relative overflow-hidden text-white">
            <img src={lineTop} alt="line-top" className="absolute top-10 right-0 w-40"/>
            <img src={grade} alt="grade" className="absolute"/>
            <div className="relative z-10 flex flex-col items-center justify-center text-center pt-10">
                <img src={logoFull} alt="logo"/>
                <h1 className="mt-10 max-w-100 font-extrabold text-[35px] leading-10">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="mt-5 text-neutral-300 max-w-100 text-[21px] leading-7">Secure your spot at next year's biggest coding conference</p>
            </div>
        </div>
    )
}

export default Intro