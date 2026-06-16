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

    return (
        <nav>
            <div className="flex items-center justify-between">
                <img src={logo} alt="logo" />
                <Menu ref={refs.setReference} onClick={() => setOpen(true)} />
                {open && (
                    <div ref={refs.setFloating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}
                        className="bg-white text-center shadow-lg p-4 rounded w-113"
                    >
                        <ul className="space-y-5 font-semibold">
                            <li>Pricing</li>
                            <li>Product</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Community</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav