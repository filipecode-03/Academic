import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

import Navigation from "./Navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between p-6">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Space Tourism"
            className="h-10 w-10"
          />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="relative z-50 cursor-pointer"
        >
          <img
            src={isMenuOpen ? close : hamburger}
            alt=""
            className="h-6 w-6"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute font-['Barlow_Condensed'] right-0 top-full min-h-screen w-3/4 bg-white/5 backdrop-blur-lg">
          <div className="px-8 pt-12">
            <Navigation onNavigate={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;