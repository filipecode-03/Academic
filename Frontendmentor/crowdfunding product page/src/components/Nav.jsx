import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close-menu.svg'
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";
import { useState } from 'react';

function Nav() {

    const [open, setOpen] = useState(false);

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(60), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    return (
        <nav className="bg-[url('./assets/images/image-hero-mobile.jpg')] lg:bg-[url('./assets/images/image-hero-desktop.jpg')] bg-cover h-100">
            <div className='p-10 lg:w-[83%] lg:mx-auto flex justify-between items-center'>
                <img src={logo} alt="logo" />
                <img src={open ? close : menu} alt="menu" ref={refs.setReference} onClick={() => setOpen(true)} className='cursor-pointer block lg:hidden' />
                <div className='hidden lg:block'>
                    <div className='flex space-x-10 text-white'>
                        <a href="#">About</a>
                        <a href="#">Discover</a>
                        <a href="#">Get Started</a>
                    </div>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/30 z-12" onClick={() => setOpen(false)}></div>
            )}
            {open && (
                <div ref={refs.setFloating}
                     style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }}
                     className='bg-white rounded-[10px] py-8 w-[85%] z-13'
                >
                    <a href="#" className='text-[22px] p-5 font-medium'>About</a>
                    <hr className='my-8 text-gray-300' />
                    <a href="#" className='text-[22px] p-5 font-medium'>Discover</a>
                    <hr className='my-8 text-gray-300' />
                    <a href="#" className='text-[22px] p-5 font-medium'>Get Started</a>
                </div>
            )}
        </nav>
    )
}

export default Nav