import logoDark from '../src/assets/images/logo-dark.svg'
import menu from '../src/assets/images/icon-hamburger.svg'
import close from '../src/assets/images/icon-close.svg'
import { useState } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";


function Nav() {

    const [open, setOpen] = useState(false);

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(8), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    return (
        <header>
            <nav className='absolute z-11 bg-white w-full flex items-center justify-between p-8'>
                <img src={logoDark} alt="logo" />
                <img src={open ? close : menu} alt="menu" ref={refs.setReference} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='cursor-pointer' />
            </nav>
            {open && (
                <div ref={refs.setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }} 
                    className='bg-white'>
                        
                </div>
            )}
        </header>
    )
}

export default Nav