import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react'

function Start() {

    const [open, setOpen] = useState(false)

    return (
        <section className='p-8 pt-14 bg-[url("./assets/images/mobile/image-hero.jpg")] bg-cover h-screen'>
            <div className='flex justify-between items-center'>
                <img src={logo} alt="logo" />
                <img src={menu} alt="menu" onClick={() => setOpen(!open)} className='cursor-pointer' />
                { open && 
                    <div className='fixed font-["Josefin_Sans"] text-[22px] top-0 right-0 h-full w-full bg-black z-50 p-8 pt-14 space-y-5 text-white font-light'>
                        <div className='flex items-center justify-between'>
                            <img src={logo} alt="logo" />
                            <img src={close} alt="close" onClick={() => setOpen(!open)} className='cursor-pointer' />
                        </div>
                        <div className='mt-30 text-[30px] space-y-3 flex flex-col'>
                            <p className='relative w-fit inline-flex cursor-pointer
                    after:content-[""] after:absolute after:bottom-0 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7'>ABOUT</p>
                            <p className='relative w-fit inline-flex cursor-pointer
                    after:content-[""] after:absolute after:bottom-0 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7'>CAREERS</p>
                            <p className='relative w-fit inline-flex cursor-pointer
                    after:content-[""] after:absolute after:bottom-0 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7'>EVENTS</p>
                            <p className='relative w-fit inline-flex cursor-pointer
                    after:content-[""] after:absolute after:bottom-0 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7'>PRODUCTS</p>
                            <p className='relative w-fit inline-flex cursor-pointer
                    after:content-[""] after:absolute after:bottom-0 after:left-1/2
                    after:w-0 after:h-0.5 after:bg-white
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    hover:after:w-7'>SUPPORT</p>
                        </div>
                    </div>
                }
            </div>
            <h1 className='mt-54 p-7 pt-9 font-["Josefin_Sans"] text-[55px] leading-13 font-light border-3 text-white border-white'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </section>
    )
}

export default Start