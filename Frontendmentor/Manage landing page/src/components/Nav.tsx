import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Menu, X } from "lucide-react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

function Nav() {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy } = useFloating({
    placement: "bottom-end",
    middleware: [offset(16), flip(), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  });

  const Icon = open ? X : Menu;

  return (
    <nav className="px-8 py-8 lg:px-0">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Manage Logo" />
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[14px] font-medium">
            <li className="cursor-pointer hover:text-gray-400 transition-colors">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-colors">
              Product
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-colors">
              About Us
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-colors">
              Careers
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-colors">
              Community
            </li>
          </ul>
          <button
            className="
              cursor-pointer
              rounded-full
              bg-[#F3613C]
              px-8
              py-3
              text-white
              font-semibold
              shadow-lg
              transition
              hover:opacity-80
            "
          >
            Get Started
          </button>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <Icon
            ref={refs.setReference}
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          />

          {open && (
            <>
              <div
                className="fixed inset-0 z-10 bg-gradient-to-b from-transparent to-black/70"
                onClick={() => setOpen(false)}
              />

              <div
                ref={refs.setFloating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                }}
                className="
                  z-20
                  w-[320px]
                  rounded-md
                  bg-white
                  p-6
                  text-center
                  shadow-xl
                "
              >
                <ul className="space-y-5 font-semibold">
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Pricing
                  </li>

                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Product
                  </li>

                  <li className="cursor-pointer hover:text-[#F3613C]">
                    About Us
                  </li>

                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Careers
                  </li>

                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Community
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;