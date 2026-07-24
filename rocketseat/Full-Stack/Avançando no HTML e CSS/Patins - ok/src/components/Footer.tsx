import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"
import logo from '../assets/images/LogoFooter.png'

function Footer() {
    return (
        <footer className="py-12 flex flex-col lg:items-center lg:justify-between lg:flex-row gap-12 items-start px-6 lg:px-8">
            <img src={logo} alt="logo" />
            <div className="flex flex-col lg:flex-row lg:items-center font-['Montserrat'] font-medium gap-6">
                <a href="#">Sobre</a>
                <a href="#">Nossas lojas</a>
                <a href="#">Política de privacidade</a>
            </div>
            <div className="gap-4 flex items-center text-[24px]">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faTiktok} />
            </div>
        </footer>
    )
}

export default Footer