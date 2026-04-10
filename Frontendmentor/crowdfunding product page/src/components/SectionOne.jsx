import { useState, useEffect } from 'react'
import logo from '../assets/images/logo-mastercraft.svg'

// 📱 Mobile
import bookmark from '../assets/images/icon-bookmark.svg'
import bookmarkHoverMobile from '../assets/images/icon-bookmark-hover-mobile.svg'
import bookmarkActiveMobile from '../assets/images/icon-bookmark-active-mobile.svg'

// 🖥️ Desktop
import bookmarkDesktop from '../assets/images/icon-bookmark-desktop.svg'
import bookmarkHoverDesktop from '../assets/images/icon-bookmark-hover-desktop.svg'
import bookmarkedActiveDesktop from '../assets/images/icon-bookmarked-active-desktop.svg'

function SectionOne({ setIsModalOpen, setSelectedCard }) {

    const [isHover, setIsHover] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    // 🔥 Detecta breakpoint lg
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // 🔥 Lógica final unificada
    const getImage = () => {

        // 🖥️ DESKTOP
        if (isDesktop) {
            if (isBookmarked) return bookmarkedActiveDesktop
            if (isHover) return bookmarkHoverDesktop
            return bookmarkDesktop
        }

        // 📱 MOBILE
        if (isBookmarked) return bookmarkActiveMobile
        if (isHover) return bookmarkHoverMobile
        return bookmark
    }

    return (
        <section className='bg-white text-center shadow-2xs p-10 pt-15 rounded-[10px] lg:w-[55%] lg:mx-auto'>
            
            <img src={logo} alt="logo" className='absolute z-11 -top-7 left-56 lg:left-185' />

            <h1 className='font-bold text-[25px] leading-8 w-[80%] mx-auto'>
                Mastercraft Bamboo Monitor Riser
            </h1>

            <p className='mt-5 text-[18px]'>
                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>

            <div className='flex justify-between gap-3 mt-5'>

                <button
                    onClick={() => {
                        setIsModalOpen(true)
                        setSelectedCard(null)
                    }}
                    className='bg-[#3CB4AB] hover:bg-[#157A74] cursor-pointer w-full lg:w-fit p-3 lg:px-8 rounded-full text-white font-medium'
                >
                    Back this project
                </button>

                <img
                    src={getImage()}
                    alt="bookmark"
                    className='cursor-pointer'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => setIsBookmarked(prev => !prev)}
                />
            </div>
        </section>
    )
}

export default SectionOne