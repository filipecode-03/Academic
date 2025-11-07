import { useState } from 'react'
import logo from './assets/images/logo.svg'
import pictureMobile from './assets/images/hero-mobile.jpg'
import Email from './assets/components/Email.jsx'
import pictureDesktop from './assets/images/hero-desktop.jpg'

function App() {

  return (
    <div className="font-['Josefin_Sans'] bg-gradient-to-b from-white to-[#fff5f5] pb-[70px] min-h-screen w-full text-center
                    lg:flex lg:pb-0">
      <img src={logo} alt="logo" className='p-[50px] block lg:hidden' />
      <div>
        <img src={pictureMobile} alt="picture" className='w-full block lg:hidden' />
        <img src={logo} alt="logo" className='pl-[100px] pt-[60px] hidden lg:block' />
        <div className='pt-20 px-[30px] space-y-[15px]'>
          <h1 className='text-[57px] leading-[60px] tracking-[10px] text-[#423e3d]'><span className='font-light text-[#C19799]'>WE'RE</span> COMING SOON</h1>
          <p className='text-[#C19799] text-[18px] px-6'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <Email />
        </div>
      </div>
      <div><img src={pictureDesktop} alt="picture" class="hidden lg:block h-full w-[750px]"></img></div>
    </div>
  )
}

export default App
