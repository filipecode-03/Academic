import { useState } from "react"
import logo from '../assets/images/logo.svg'
import { Menu, X } from 'lucide-react';
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";

function Nav() {

    const [open, setOpen] = useState(false)
    
    const { x, y, refs, strategy } = useFloating({
    placement: "bottom-start",
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

    const Icon = open ? X : Menu;

    return (
        <nav className="p-8">
            {open && (
            <div
                className="fixed inset-0 bg-linear-to-b from-black/0 to-black/70 z-10"
                onClick={() => setOpen(false)}
            />
            )}

            <div className="flex items-center justify-between relative z-30">
            <img src={logo} alt="logo" />

            <Icon
                ref={refs.setReference}
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer"
            />

            {open && (
                <div
                ref={refs.setFloating}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
                className="bg-white text-center shadow-lg p-4 rounded w-md z-20"
                >
                <ul className="space-y-5 font-semibold">
                    <li className="hover:text-[#F2613C] w-fit mx-auto cursor-pointer">
                    Pricing
                    </li>
                    <li className="hover:text-[#F2613C] w-fit mx-auto cursor-pointer">
                    Product
                    </li>
                    <li className="hover:text-[#F2613C] w-fit mx-auto cursor-pointer">
                    About Us
                    </li>
                    <li className="hover:text-[#F2613C] w-fit mx-auto cursor-pointer">
                    Careers
                    </li>
                    <li className="hover:text-[#F2613C] w-fit mx-auto cursor-pointer">
                    Community
                    </li>
                </ul>
                </div>
            )}
            </div>
        </nav>
    );
}

export default Nav