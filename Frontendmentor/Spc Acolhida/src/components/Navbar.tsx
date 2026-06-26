import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import { Mail } from 'lucide-react';

export function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="flex gap-2 text-white bg-[#003049]">
      <div>
        <div className="flex items-center gap-3 p-8">
          <img src={logo} alt="logo" />
          <h2 className="font-bold w-40 leading-5">OPERAÇÃO ACOLHIDA</h2>
        </div>
        <div>
          <Mail />
        </div>
      </div>
      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkStyle}>
        Sobre
      </NavLink>

      <NavLink to="/profile" className={linkStyle}>
        Perfil
      </NavLink>
    </nav>
  );
}