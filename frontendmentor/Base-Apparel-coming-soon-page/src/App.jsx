import { useState } from 'react'
import logo from './assets/images/logo.svg'
import pictureMobile from './assets/images/hero-mobile.jpg'

function App() {

  return (
    <div className="font-['Josefin_Sans'] bg-gradient-to-b from-pink-200 to-pink-500 min-h-screen py-[50px] w-full text-center">
      <img src={logo} alt="logo" className='p-[50px]' />
      <div>
        <img src={pictureMobile} alt="picture" className='w-full' />
        <div className='pt-[80px] px-[30px] space-y-[15px]'>
          <h1 className='text-[57px] leading-[60px] tracking-[10px]'><span className='font-light'>WE'RE</span> COMING SOON</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
      </div>
    </div>
  )
}

export default App
