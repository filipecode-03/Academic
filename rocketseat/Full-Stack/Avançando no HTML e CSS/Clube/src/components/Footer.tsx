import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebookF, faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/images/logo-horizontal.png'

function Footer() {
    return (
        <footer className='bg-[url(./assets/images/book-trace-background-mobile.png)] bg-cover'>
            <section className='px-8 pb-10 pt-24.5 flex flex-col gap-10'>
                <div>
                    <img src={logo} alt="logo" className='mx-auto' />
                    <div className='text-[#358BB9] border-t border-[#002347] pt-3 mt-3 text-[24px] flex items-center justify-between'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faDiscord} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-white font-bold'>Conteúdos</h2>
                        <div className='text-[#73B6D2] text-[14px] mt-5 gap-3 flex flex-col'>
                            <a href="#">Kits passados</a>
                            <a href="#">Clube de membros</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-bold'>Conteúdos</h2>
                        <div className='text-[#73B6D2] text-[14px] mt-5 gap-3 flex flex-col'>
                            <a href="#">Kits passados</a>
                            <a href="#">Clube de membros</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer