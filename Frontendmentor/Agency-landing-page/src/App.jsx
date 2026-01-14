import { useState } from 'react'
import eggMobile from './assets/images/mobile/image-transform.jpg'
import logo from './assets/images/logo.svg'
import logoGreen from './assets/images/logo-green.png'
import menuHamburguer from './assets/images/icon-hamburger.svg'
import arrow from './assets/images/icon-arrow-down.svg'
import juiceMobile from './assets/images/mobile/image-stand-out.jpg'
import emily from './assets/images/image-emily.jpg'
import thomas from './assets/images/image-thomas.jpg'
import jennie from './assets/images/image-jennie.jpg'
import milkMobile from './assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from './assets/images/mobile/image-gallery-orange.jpg'
import coneMobile from './assets/images/mobile/image-gallery-cone.jpg'
import sugarMobile from './assets/images/mobile/image-gallery-sugar-cubes.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'


function App() {

  return (
    <div className="min-h-screen font-['Barlow']">
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
      <div className='text-center'>
        <img src={juiceMobile} alt="juice" />
        <div className='p-8 space-y-8 pt-16 pb-14'>
          <h1 className="font-['Fraunces'] font-bold text-[35px] w-[80%] mx-auto leading-10">Stand out to the right audience</h1>
          <p className="font-['Barlow'] text-gray-700 text-[18px]">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <button className="font-['Fraunces'] font-bold tracking-[1px]">LEARN MORE</button>
        </div>
      </div>
      <div>
        <div className="bg-[url('./assets/images/mobile/image-graphic-design.jpg')] bg-cover bg-center h-200">

        </div>
        <div className="bg-[url('./assets/images/mobile/image-photography.jpg')] bg-cover bg-center h-200">

        </div>
      </div>
      <div className='text-center p-8 space-y-15 pt-16 pb-14'>
        <h1 className="font-['Fraunces'] font-bold tracking-[5px] text-gray-400 text-[20px]">CLIENT TESTIMONIALS</h1>
        <div className='space-y-15'>
          <div>
            <div className='space-y-8'>
              <img src={emily} alt="emily" className='mx-auto rounded-full w-20' />
              <p className='text-[18px]'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h1 className="font-['Fraunces'] font-bold text-[20px]">Emily R.</h1>
            </div>
            <h2 className='text-gray-500'>Marketing Director</h2>
          </div>
          <div>
            <div className='space-y-8'>
              <img src={thomas} alt="emily" className='mx-auto rounded-full w-20' />
              <p className='text-[18px]'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
              <h1 className="font-['Fraunces'] font-bold text-[20px]">Thomas S.</h1>
            </div>
            <h2 className='text-gray-500'>Chief Operating Officer</h2>
          </div>
          <div>
            <div className='space-y-8'>
              <img src={jennie} alt="emily" className='mx-auto rounded-full w-20' />
              <p className='text-[18px]'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
              <h1 className="font-['Fraunces'] font-bold text-[20px]">Thomas S.</h1>
            </div>
            <h2 className='text-gray-500'>Chief Operating Officer</h2>
          </div>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <img src={milkMobile} alt="milk" className="w-full h-auto object-cover" />
          <img src={orangeMobile} alt="orange" className="w-full h-auto object-cover" />
          <img src={coneMobile} alt="cone" className="w-full h-auto object-cover" />
          <img src={sugarMobile} alt="sugar" className="w-full h-auto object-cover" />
        </div>
      </section>
      <footer className='bg-[#90D4C5] pt-18 pb-20 px-10'>
        <img src={logoGreen} alt="logo green" className='mx-auto' />
        <div className='flex mt-12 justify-between text-[18px] text-[#266758] w-[80%] mx-auto'>
          <p className='hover:text-white cursor-pointer'>About</p>
          <p className='hover:text-white cursor-pointer'>Services</p>
          <p className='hover:text-white cursor-pointer'>Projects</p>
        </div>
        <div className='mt-22 flex justify-between w-[50%] mx-auto'>
          <FontAwesomeIcon icon={faSquareFacebook} className="text-[#266758] hover:text-white cursor-pointer text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-[#266758] hover:text-white cursor-pointer text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className="text-[#266758] hover:text-white cursor-pointer text-2xl" />
          <FontAwesomeIcon icon={faPinterest} className="text-[#266758] hover:text-white cursor-pointer text-2xl" />
        </div>
      </footer>
    </div>
  )
}

export default App
