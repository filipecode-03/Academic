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

      {/* HEADER */}
      <div className="flex items-center justify-between p-6
          md:pl-10 md:pr-0
          md:py-0
          lg:pl-16
          lg:pr-0
        "
      >
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="shrink-0">
          <img src={logo} alt="Space Tourism" className="md:pr-10" />
        </Link>
        {/* LINHA - SOMENTE DESKTOP */}
        <div
          className="
            hidden
            lg:block
            lg:h-px
            lg:flex-1
            lg:ml-16
            lg:-mr-10
            lg:z-10
            lg:bg-white/25
          "
        />
        {/* HAMBURGER - SOMENTE MOBILE */}
        <button type="button" onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="
            relative
            z-50
            cursor-pointer
            md:hidden
          "
        >
          <img
            src={isMenuOpen ? close : hamburger}
            alt=""
            className="h-6 w-6"
          />
        </button>

        {/* NAVEGAÇÃO TABLET/DESKTOP */}
        <div
          className="
            hidden
            md:block
            bg-white/5
            backdrop-blur-lg
            md:pl-10
            md:pr-10 md:w-full lg:w-fit
            lg:pl-50
            lg:pr-16
          "
        >
          <Navigation />
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div
          className="
            absolute
            right-0
            top-full
            min-h-screen
            w-3/4

            bg-white/5
            backdrop-blur-lg

            md:hidden
          "
        >
          <div className="px-8 pt-12">
            <Navigation onNavigate={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;