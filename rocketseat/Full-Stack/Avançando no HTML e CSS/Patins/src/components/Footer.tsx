import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"
import logo from '../assets/images/LogoFooter.png'

function Footer() {
    return (
        <footer className="py-12 flex flex-col gap-12 items-start px-6">
            <img src={logo} alt="logo" />
            <div className="flex flex-col font-medium gap-6">
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