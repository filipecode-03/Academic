import logo from '../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="p-12">
            <div className='flex font-medium flex-col lg:flex-row lg:items-start lg:justify-between gap-12'>
                <img src={logo} alt="logo" className='w-21.25' />
                <div className='flex flex-col lg:flex-row gap-16'>
                    <div className='flex text-[#A1A1AA] flex-col lg:w-[224px] gap-5'>
                        <h2 className='text-[14px] text-[#F7B733]'>PRODUTO</h2>
                        <a href="#">Funcionalidades</a>
                        <a href="#">Planos e preços</a>
                        <a href="#">Download</a>
                    </div>
                    <div className='flex text-[#A1A1AA] flex-col lg:w-[224px] gap-5'>
                        <h2 className='text-[14px] text-[#F7B733]'>EMPRESA</h2>
                        <a href="#">Sobre nós</a>
                        <a href="#">Trabalhe conosco</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className='flex text-[#A1A1AA] flex-col lg:w-[224px] gap-5'>
                        <h2 className='text-[14px] text-[#F7B733]'>LEGAL</h2>
                        <a href="#">Termos de uso</a>
                        <a href="#">Política de privacidade</a>
                    </div>
                </div>
            </div>
            <div className='mt-12 lg:mt-20 flex flex-col lg:flex-row lg:justify-between gap-6 text-[#A1A1AA]'>
                <div className='text-[24px] flex items-center gap-6'>
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faDiscord} />
                </div>
                <p>©2024 Zingen Technologies, Inc.</p>
            </div>
        </footer>
    )
}

export default Footer