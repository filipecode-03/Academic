import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import { useState, useEffect } from 'react'

function NavBar() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto'
      }, [open])

    return (
        <nav className={`p-6 lg:px-30 flex items-center justify-between ${open ? 'fixed top-0 left-0 w-full z-20 bg-white' : 'relative'}`}>
            <img src={logo} alt="logo" />
            <div className='hidden lg:block'>
                <div className='flex items-center gap-8 font-medium'>
                    <p className='text-gray-400 cursor-pointer hover:text-black'>HOW WE WORK</p>
                    <p className='text-gray-400 cursor-pointer hover:text-black'>BLOG</p>
                    <p className='text-gray-400 cursor-pointer hover:text-black'>ACCOUNT</p>
                    <button className='border-2 p-2 px-6 hover:bg-[#2B282F] hover:text-white cursor-pointer'>VIEW PLANS</button>
                </div>
            </div>
            <img src={open ? close : hamburger} alt="menu" className='cursor-pointer block lg:hidden' onClick={() => setOpen(!open)} />
            { open && (
                <div className='fixed text-white text-center text-[24px] space-y-8 py-18 tracking-[1px] h-screen w-screen left-0 z-11 top-20 p-8 bg-[#2B282F] bg-[url("./assets/images/bg-pattern-mobile-nav.svg")] bg-no-repeat bg-bottom bg-size-[100%_auto]'>
                    <p className='cursor-pointer hover:text-gray-300 w-fit mx-auto'>HOW WE WORK</p>
                    <p className='cursor-pointer hover:text-gray-300 w-fit mx-auto'>BLOG</p>
                    <p className='cursor-pointer hover:text-gray-300 w-fit mx-auto'>ACCOUNT</p>
                    <button className='border-2 p-2 w-full hover:bg-white hover:text-black cursor-pointer'>VIEW PLANS</button>
                </div>
            ) }
        </nav>
    )
}

export default NavBar