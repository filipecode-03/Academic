import logo from '../src/assets/images/logo-bookmark.svg'
import logoNav from '../src/assets/images/logo-bookmark-white.svg'
import menu from '../src/assets/images/icon-hamburger.svg'
import { useState } from 'react'
import close from '../src/assets/images/icon-close.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

function Nav() {

    const [active, setActive] = useState(false)

    return (
        <nav className='p-8'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt="logo" />
                <img src={menu} alt="menu" onClick={() => setActive(!active)} />
            </div>
            {active && (
            <div className='fixed inset-0 bg-[#2F354F] h-screen w-screen z-50 p-8 pr-12'>
                <div className='flex items-center justify-between'>
                    <img src={logoNav} alt="logo" className='w-45' />
                    <img src={close} alt="close" onClick={() => setActive(!active)} className='cursor-pointer w-6' />
                </div>
                <div className='mt-10 text-center text-[22px] space-y-5 tracking-[2px] text-white'>
                    <hr className='text-gray-500' />
                    <button className='text-gray-300'>FEATURES</button>
                    <hr className='text-gray-500'  />
                    <button className='text-gray-300'>PRICING</button>
                    <hr className='text-gray-500' />
                    <button className='text-gray-300'>CONTACT</button>
                    <hr className='text-gray-500' />
                    <button className='border-3 w-full p-2 rounded-[5px] border-white'>LOGIN</button>
                </div>
                <div className='flex text-white justify-center gap-8 text-[35px] mt-60'>
                    <FontAwesomeIcon icon={faSquareFacebook} className='cursor-pointer' />
                <   FontAwesomeIcon icon={faTwitter} className='cursor-pointer' />
                </div>
            </div>
            )}
        </nav>
    )
}

export default Nav