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

  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen font-['Barlow']">
      <div className="text-center text-white bg-[url('./assets/images/mobile/image-header.jpg')] bg-cover bg-center h-160 p-7">
        <div className='flex items-center justify-between'>
          <img src={logo} alt="logo" />
          <img src={menuHamburguer} alt="menu" onClick={() => setOpen(!open)} className='cursor-pointer' />
        </div>
        { open && (
          <div className="absolute top-20 left-106 z-10 w-7 h-7.5 bg-white [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>
        ) }
        { open && (
          <div className='bg-white w-105 pt-12 h-80 space-y-6 text-gray-500 text-[20px] p-5 absolute z-11 left-8 top-27'>
            <p className='cursor-pointer w-fit mx-auto hover:text-black'>About</p>
            <p className='cursor-pointer w-fit mx-auto hover:text-black'>Services</p>
            <p className='cursor-pointer w-fit mx-auto hover:text-black'>Projects</p>
            <p className='p-3 px-7 font-bold font-["Fraunces"] text-gray-800 rounded-full w-fit mx-auto bg-[#FBD600] cursor-pointer hover:bg-[#fff2ab]'>CONTACT</p>
          </div>
        )
        }
        <h1 className="mt-20 font-['Fraunces'] font-extrabold text-[60px] tracking-[6px] leading-18">WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow down" className='mx-auto mt-25' />
      </div>
      <div className='text-center'>
        <img src={eggMobile} alt="egg" />
        <div className='p-8 space-y-8 pt-16 pb-14'>
          <h1 className="font-['Fraunces'] font-bold text-[35px] w-[80%] mx-auto leading-10">Transform your brand</h1>
          <p className="font-medium text-gray-700 text-[18px]">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <p className="group relative inline-block w-fit font-extrabold font-['Fraunces'] tracking-[1px] cursor-pointer">
          LEARN MORE
          <span className="absolute -left-2.5 bottom-0.5 h-2 w-[115%] bg-[#fff2ab] rounded-[10px] -z-10 transition-colors duration-300 group-hover:bg-[#FFD100]"></span>
          </p>
        </div>
      </div>
      <div className='text-center'>
        <img src={juiceMobile} alt="juice" />
        <div className='p-8 space-y-8 pt-16 pb-14'>
          <h1 className="font-['Fraunces'] font-bold text-[35px] w-[80%] mx-auto leading-10">Stand out to the right audience</h1>
          <p className="font-medium text-gray-700 text-[18px]">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <p className="group relative inline-block w-fit font-extrabold font-['Fraunces'] tracking-[1px] cursor-pointer">
          LEARN MORE
          <span className="absolute -left-2.5 bottom-0.5 h-2 w-[115%] bg-[#FED9D0] rounded-[10px] -z-10 transition-colors duration-300 group-hover:bg-[#FD7863]"></span>
          </p>
        </div>
      </div>
      <div>
        <div className="text-[#1A5245] pt-140 px-8 space-y-5 text-center bg-[url('./assets/images/mobile/image-graphic-design.jpg')] bg-cover bg-center h-200">
          <h1 className="font-['Fraunces'] text-[38px] font-extrabold">Graphic Design</h1>
          <p className='text-[18px] font-medium'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="text-[#1F546E] pt-140 px-10 space-y-5 text-center bg-[url('./assets/images/mobile/image-photography.jpg')] bg-cover bg-center h-200">
          <h1 className="font-['Fraunces'] text-[38px] font-extrabold">Photography</h1>
          <p className='text-[18px] font-medium'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
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
              <p className='text-[18px]'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
              <h1 className="font-['Fraunces'] font-bold text-[20px]">Jennie F.</h1>
            </div>
            <h2 className='text-gray-500'>Business Owner</h2>
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
