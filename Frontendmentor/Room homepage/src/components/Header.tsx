import { useState } from "react";
import Nav from "./Nav";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full p-6">
        <div className="relative flex items-center">
          {/* botão mobile */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden cursor-pointer"
          >
            <img
              src={hamburger}
              alt="Open menu"
            />
          </button>
          {/* logo */}
          <img
            src={logo}
            alt="Room"
            className="
              absolute
              left-1/2
              -translate-x-1/2
              lg:static
              lg:translate-x-0
            "
          />
          {/* nav desktop */}
          <div className="hidden lg:block ml-10">
            <Nav />
          </div>
        </div>
      </header>
      {/* overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}/>
          <div className="fixed top-0 left-0 right-0 z-50 bg-white p-8 flex items-center justify-between">
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              <img
                src={close}
                alt="Close menu"
              />
            </button>
            <Nav mobile />
          </div>
        </>
      )}
    </>
  );
}

export default Header;