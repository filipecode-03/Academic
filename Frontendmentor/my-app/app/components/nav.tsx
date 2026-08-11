"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div
        ref={menuRef}
        className="relative mx-auto max-w-6xl px-8 pt-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image src={Logo} alt="Logo" />
            <div className="hidden lg:block">
                <ul className="flex items-center font-semibold gap-5 text-gray-400">
                    <li>
                      <a
                        href="#"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                      >
                        Resources
                      </a>
                    </li>
                </ul>
            </div>
          </div>

          <div className="hidden font-semibold lg:block">
            <button className="text-gray-400 mr-8">Login</button>
            <button className="bg-[#2BD1D1] text-white rounded-full p-2 px-6">Sign Up</button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="cursor-pointer block lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 right-0 top-full z-10 mt-4 px-8">
            <div className="rounded-xl text-white text-center font-semibold text-[18px] bg-[#3A3053] p-8 shadow-lg">
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                  >
                    Resources
                  </a>
                </li>
              </ul>
              <div className="flex flex-col border-t border-gray-600 pt-5 mt-5 gap-5">
                <button>Login</button>
                <button className="bg-[#2BD1D1] rounded-full p-4">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;