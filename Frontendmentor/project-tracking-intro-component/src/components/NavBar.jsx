import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import { useState } from 'react'
import {
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
  } from "@floating-ui/react";

function NavBar() {

    const [open, setOpen] = useState(false)

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(38), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    return (
        <nav className="absolute flex p-8 lg:p-15 lg:px-40 justify-between items-center w-full">
            <img src={logo} alt="logo" />
            <div className='hidden lg:block'>
                <div className='flex items-center gap-10 font-["Barlow_Condensed"] font-bold tracking-[1px]'>
                    <p className='hover:underline cursor-pointer'>PRODUCT</p>
                    <p className='hover:underline cursor-pointer'>FEATURES</p>
                    <p className='hover:underline cursor-pointer'>PRICING</p>
                    <div className='rounded-full bg-gray-400 h-1.5 w-1.5'></div>
                    <button className='cursor-pointer text-gray-400 hover:underline'>LOGIN</button>
                </div>
            </div>
            <img src={menu} alt="menu" className='cursor-pointer block lg:hidden' ref={refs.setReference} onClick={() => setOpen(!open)} />
            { open && (
                <div ref={refs.setFloating} style={{ position: strategy, top: y ?? 0, left: x ?? 0,}} className='bg-white p-5 px-10 shadow-2xl w-[87%] text-center space-y-5 tracking-[1px] text-[20px] font-["Barlow_Condensed"] z-11 font-bold block lg:hidden'>
                    <p className="hover:underline cursor-pointer">PRODUCT</p>
                    <p className="hover:underline cursor-pointer">FEATURES</p>
                    <p className="hover:underline cursor-pointer">PRICING</p>
                    <hr />
                    <button className="hover:underline cursor-pointer text-gray-400">LOGIN</button>
                </div>
            )  }
        </nav>
    )
}

export default NavBar