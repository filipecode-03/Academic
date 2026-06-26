import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive
        ? "text-[#F1F440]"
        : "text-white hover:text-[#F1F440]"
    }`;

  return (
    <nav className="text-white bg-[#003049]">
      <div className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <h2 className="font-bold w-40 leading-5">OPERAÇÃO ACOLHIDA</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-[#F1F440] cursor-pointer" />
          <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#F1F440] cursor-pointer" />
          <FontAwesomeIcon icon={faEnvelope} className="hover:text-[#F1F440] cursor-pointer" />
          <FontAwesomeIcon icon={faPhone} className="hover:text-[#F1F440] cursor-pointer" />
        </div>
      </div>
      <div className="font-['Bebas_Neue'] flex justify-center items-center gap-5 text-[25px] md:text-[30px]">
        <NavLink to="/" end className={linkStyle}>
          Ínicio
        </NavLink>
        <NavLink to="/documentos" className={linkStyle}>
          Documentos
        </NavLink>
        <div className="hover:text-[#F1F440] cursor-pointer">
          PROCESSOS
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <NavLink to="/tools" className={linkStyle} >
          Tools
        </NavLink>
      </div>
    </nav>
  );
}