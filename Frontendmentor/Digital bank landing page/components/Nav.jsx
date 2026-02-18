import logoDark from '../src/assets/images/logo-dark.svg'
import menu from '../src/assets/images/icon-hamburger.svg'
import close from '../src/assets/images/icon-close.svg'
import { useState } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";


function Nav() {

    const [open, setOpen] = useState(false);

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(68), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    return (
        <header>
            <nav className='absolute z-11 bg-white w-full flex items-center justify-between p-8 lg:px-30'>
                <img src={logoDark} alt="logo" />
                <div className='hidden lg:block'>
                    <div className='flex gap-10'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <button className='hidden lg:block bg-linear-to-r from-[#2BBBC4] to-[#34CF65] p-2.5 px-8 font-semibold rounded-full text-white'>Request Invite</button>
                <img src={open ? close : menu} alt="menu" ref={refs.setReference} onClick={() => setOpen(!open)} className='cursor-pointer block lg:hidden' />
            </nav>
            {open && (
                <div className='bg-linear-to-b from-[#000000d0] to-[#0000] w-full h-200 absolute z-9'></div>
            )}
            {open && (
                <div ref={refs.setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }} 
                    className='bg-white z-10 flex flex-col w-[87%] text-center rounded-[5px] p-6 gap-4 text-[20px]'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                </div>
            )}
        </header>
    )
}

export default Nav