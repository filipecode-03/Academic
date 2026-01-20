import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import hamburguer from './assets/images/icon-hamburger.svg'
import close from './assets/images/icon-close.svg'
import editorMobile from './assets/images/illustration-editor-mobile.svg'
import phones from './assets/images/illustration-phones.svg'
import laptopMobile from './assets/images/illustration-laptop-mobile.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useFloating, offset, flip, shift, autoUpdate, } from "@floating-ui/react";

function App() {

  const [menu, setMenu] = useState(false)

  const { x, y, refs, strategy } = useFloating({
    placement: "bottom-start",
    middleware: [
      offset(30),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const [openToggle, setOpenToggle] = useState(null)

  const toggle = (name) => {
    setOpenToggle((prev) => (prev === name ? null : name))
  } 

  return (
    <div className='min-h-screen font-["Overpass"]'>
      <nav className='text-center text-white rounded-bl-[150px] bg-[linear-gradient(to_bottom,rgba(254,141,111,0.9),rgba(255,71,90,0.9)),url("./assets/images/bg-pattern-intro-mobile.svg")] bg-center bg-no-repeat'>
        <div className='p-8 pt-12 pb-42'>
          <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <img src={menu ? close : hamburguer} alt="menu" ref={refs.setReference} onClick={() => setMenu(!menu)} className='cursor-pointer' />
          </div>
          {menu && (
            <div ref={refs.setFloating} style={{position: strategy, top: y ?? 0, left: x ?? 0,}} className='text-[20px] font-medium bg-white w-[87%] p-8 shadow-2xl text-black rounded-[10px] z-50'>
              <div onClick={() => toggle("Product")} className="flex gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                <p className={openToggle === "Product" ? 'w-fit text-gray-600' : 'w-fit'}>Product</p>
                <FontAwesomeIcon icon={openToggle === "Product" ? faChevronUp : faChevronDown} 
                className="transition-transform text-[12px] text-[#FF4B5A] mt-1.5" />
              </div>
              {openToggle === "Product" && (
                <div className='bg-gray-200 rounded-[5px] mt-4 p-6 space-y-4 text-gray-600'>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Overview</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Pricing</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Marketplace</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Features</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Integrations</p>
                </div>
              )}
              <div onClick={() => toggle("Company")} className="mt-5 flex gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                <p className={openToggle === "Company" ? 'w-fit text-gray-600' : 'w-fit'}>Company</p>
                <FontAwesomeIcon icon={openToggle === "Company" ? faChevronUp : faChevronDown} 
                className="transition-transform text-[12px] text-[#FF4B5A] mt-1.5" />
              </div>
              {openToggle === "Company" && (
                <div className='bg-gray-200 rounded-[5px] mt-4 p-6 space-y-4 text-gray-600'>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>About</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Team</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Blog</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Careers</p>
                </div>
              )}
              <div onClick={() => toggle("Connect")} className="mt-5 flex gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                <p className={openToggle === "Connect" ? 'w-fit text-gray-600' : 'w-fit'}>Connect</p>
                <FontAwesomeIcon icon={openToggle === "Connect" ? faChevronUp : faChevronDown} 
                className="transition-transform text-[12px] text-[#FF4B5A] mt-1.5" />
              </div>
              {openToggle === "Connect" && (
                <div className='bg-gray-200 rounded-[5px] mt-4 p-6 space-y-4 text-gray-600'>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Contact</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Newsletter</p>
                  <p className='cursor-pointer hover:text-black w-fit mx-auto'>Linkedln</p>
                </div>
              )}
              <hr className='border-gray-300 mt-5 mb-8' />
              <div className='flex flex-col space-y-4'>
                <button className='w-fit mx-auto cursor-pointer'>Login</button>
                <button className='cursor-pointer rounded-full bg-linear-to-r from-[#FE8D6F] to-[#FF475A] hover:bg-[#ffffff48] w-fit mx-auto p-3 px-10 text-white font-bold'>Sign Up</button>
              </div>
            </div>
          )}
          <div className='mt-20 space-y-5'>
            <h1 className='font-["Ubuntu"] w-[80%] mx-auto leading-12 text-[38px]'>A modern publishing platform</h1>
            <p className='font-light text-[18px] w-[70%] mx-auto'>Grow your audience and build your online brand</p>
          </div>
          <div className='mt-15 space-x-5 font-["Ubuntu"] font-bold'>
            <button className='bg-white text-[#FF4B5A] p-3 px-5 rounded-full hover:bg-[#ffffff48] transition-all duration-300 cursor-pointer hover:text-white'>Start for Free</button>
            <button className='border border-white rounded-full p-3 px-6 cursor-pointer hover:bg-white hover:text-[#FF4B5A] transition-all duration-300'>Learn More</button>
          </div>
        </div>
      </nav>
      <section className='text-center mt-25'>
        <h1 className='font-["Ubuntu"] text-[28px]'>Designed for the future</h1>
        <div className='mt-10 space-y-10'>
          <img src={editorMobile} alt="editor" className='mx-auto' />
          <div className='px-12 space-y-4'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 leading-8'>Introducing an extensible editor</h1>
            <p className='text-gray-600'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
          </div>
          <div className='px-12 space-y-4'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 leading-8'>Robust content management</h1>
            <p className='text-gray-600'>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
          </div>
        </div>
      </section>

      <img src={phones} alt="phones" className='absolute z-11 top-450' />
      
      <section className='mt-80 text-center text-white rounded-bl-[150px] hero rounded-tr-[150px]'>
        <div className='pt-70 pb-40 px-15 space-y-7'>
          <h1 className='font-["Ubuntu"] text-[44px] leading-14'>State of the Art Infrastructure</h1>
          <p className='text-[18px]'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </section>
      <section className='text-center mt-20'>
        <img src={laptopMobile} alt="laptop" />
        <div className='px-12 space-y-10 mt-10'>
          <div className='space-y-6'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 leading-8'>Free, open, simple</h1>
            <p className='text-gray-600'>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          </div>
          <div className='space-y-6'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 leading-8'>Powerful tooling</h1>
            <p className='text-gray-600'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </section>
      <footer className='text-center mt-20 bg-[#24242C] rounded-tr-[150px] py-20 text-[18px]'>
        <img src={logo} alt="logo" className='mx-auto' />
        <div className='space-y-5 mt-15'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Product</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Overview</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Pricing</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Marketplace</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Features</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Integrations</p>
          </div>
        </div>
        <div className='space-y-5 mt-15'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Company</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto">About</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Team</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Blog</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Careers</p>
          </div>
        </div>
        <div className='space-y-5 mt-15'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Connect</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Contact</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">Newsletter</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto">LinkedIn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
