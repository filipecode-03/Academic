import { NavLink } from "react-router-dom";

export function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="flex gap-2">
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