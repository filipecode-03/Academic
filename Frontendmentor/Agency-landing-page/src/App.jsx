import { useState } from 'react'
import eggMobile from './assets/images/mobile/image-transform.jpg'
import logo from './assets/images/logo.svg'
import menuHamburguer from './assets/images/icon-hamburger.svg'
import arrow from './assets/images/icon-arrow-down.svg'
import juice from './assets/images/mobile/image-stand-out.jpg'

function App() {

  return (
    <div className='min-h-screen'>
      <div className="text-center text-white bg-[url('./assets/images/mobile/image-header.jpg')] bg-cover bg-center h-160 p-7">
        <div className='flex items-center justify-between'>
          <img src={logo} alt="logo" />
          <img src={menuHamburguer} alt="menu" />
        </div>
        <h1 className="mt-20 font-['Fraunces'] font-extrabold text-[60px] tracking-[6px] leading-18">WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow down" className='mx-auto mt-25' />
      </div>
      <div className='text-center'>
        <img src={eggMobile} alt="egg" />
        <div className='p-8 space-y-8 pt-16 pb-14'>
          <h1 className="font-['Fraunces'] font-bold text-[35px] w-[80%] mx-auto leading-10">Transform your brand</h1>
          <p className="font-['Barlow'] text-gray-700 text-[18px]">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <button className="font-['Fraunces'] font-bold tracking-[1px]">LEARN MORE</button>
        </div>
      </div>
      <div>
        <img src={juice} alt="juice" />
      </div>
    </div>
  )
}

export default App
