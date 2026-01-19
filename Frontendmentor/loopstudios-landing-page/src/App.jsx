import { useState } from 'react'
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-hamburger.svg'
import interactive from './assets/images/mobile/image-interactive.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <div className='min-h-screen font-["Alata"]'>
      <section className='p-8 pt-14 bg-[url("./assets/images/mobile/image-hero.jpg")] bg-cover h-screen'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </div>
        <h1 className='mt-54 p-7 pt-9 font-["Josefin_Sans"] text-[55px] leading-13 font-light border-3 text-white border-white'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </section>
      <section className='p-8'>
        <img src={interactive} alt="interactive" className='mt-20' />
        <div className='text-center mt-15 space-y-4'>
          <h1 className='font-["Josefin_Sans"] leading-11 font-light text-[45px]'>THE LEADER IN INTERACTIVE VR</h1>
          <p className='text-gray-600 px-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
        <div>
          <h1>OUR CREATIONS</h1>
        </div>
      </section>
      <footer className='bg-black py-15 text-white text-center'>
        <img src={logo} alt="logo" className='mx-auto' />
        <div className='mt-10 space-y-6'>
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Products</p>
          <p>Support</p>
        </div>
        <div className='text-[30px] space-x-3 mt-10'>
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <p className='text-gray-400 mt-2 text-[18px]'>&copy; 2021 Loopstudios. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
