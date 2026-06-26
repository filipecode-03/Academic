import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {

  return (
    <nav className="bg-[#003049] text-white shadow-lg">

      {/* Barra Superior */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo Operação Acolhida"
              className="w-14 h-14"
            />

            <div>
              <h1 className="font-bold text-xl tracking-wide">
                OPERAÇÃO ACOLHIDA
              </h1>

              <p className="text-sm text-gray-300">
                Portal de Compras
              </p>
            </div>
          </div>

          {/* Redes */}
          <div className="flex gap-3">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F1F440] hover:text-[#003049] transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F1F440] hover:text-[#003049] transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F1F440] hover:text-[#003049] transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F1F440] hover:text-[#003049] transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>

          </div>

        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-12 font-semibold tracking-wide uppercase">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `
              py-5 border-b-4 transition-all duration-300
              ${
                isActive
                  ? "border-[#F1F440] text-[#F1F440]"
                  : "border-transparent hover:border-[#F1F440] hover:text-[#F1F440]"
              }
            `
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/documentos"
            className={({ isActive }) =>
              `
              py-5 border-b-4 transition-all duration-300
              ${
                isActive
                  ? "border-[#F1F440] text-[#F1F440]"
                  : "border-transparent hover:border-[#F1F440] hover:text-[#F1F440]"
              }
            `}
          >
            Documentos
          </NavLink>

          <button
            className="flex items-center gap-2 py-5 border-b-4 border-transparent hover:border-[#F1F440] hover:text-[#F1F440] transition-all"
          >
            Processos

            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-xs"
            />
          </button>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `
              py-5 border-b-4 transition-all duration-300
              ${
                isActive
                  ? "border-[#F1F440] text-[#F1F440]"
                  : "border-transparent hover:border-[#F1F440] hover:text-[#F1F440]"
              }
            `}
          >
            Tools
          </NavLink>

        </div>
      </div>

    </nav>
  );
}