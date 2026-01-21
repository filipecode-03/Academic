import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import hamburguer from './assets/images/icon-hamburger.svg'
import close from './assets/images/icon-close.svg'
import editorMobile from './assets/images/illustration-editor-mobile.svg'
import editorDesktop from './assets/images/group.png'
import phones from './assets/images/illustration-phones.svg'
import laptopMobile from './assets/images/illustration-laptop-mobile.svg'
import laptopDesktop from './assets/images/group2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useFloating, offset, flip, shift, autoUpdate, } from "@floating-ui/react";

function App() {

  const [menu, setMenu] = useState(false)

  const { x: menuX, y: menuY, refs: menuRefs, strategy: menuStrategy } = useFloating({
    placement: "bottom-start",
    middleware: [
      offset(30),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { x: productX, y: productY, refs: productRefs, strategy: productStrategy } = useFloating({
    placement: "bottom",
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 258 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { x: companyX, y: companyY, refs: companyRefs, strategy: companyStrategy } = useFloating({
    placement: "bottom",
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 365 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { x: connectX, y: connectY, refs: connectRefs, strategy: connectStrategy } = useFloating({
    placement: "bottom",
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 485 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const [openToggle, setOpenToggle] = useState(null)

  const toggle = (name) => {
    setOpenToggle((prev) => (prev === name ? null : name))
  } 

  return (
    <div className='min-h-screen font-["Overpass"]'>
      <nav className='text-center text-white rounded-bl-[150px] bg-[linear-gradient(to_bottom,rgba(254,141,111,0.9),rgba(255,71,90,0.9)),url("./assets/images/bg-pattern-intro-mobile.svg")] lg:bg-[linear-gradient(to_bottom,rgba(254,141,111,0.9),rgba(255,71,90,0.9)),url("./assets/images/bg-pattern-intro-desktop.svg")] bg-center bg-no-repeat'>
        <div className='p-8 lg:px-30 lg:pt-14 pt-12 pb-42'>
          <div className='flex lg:justify-start justify-between items-center'>
            <img src={logo} alt="logo" />
            <div className='hidden lg:block ml-15'>
              <div className='flex gap-8'>
                <div ref={productRefs.setReference} onClick={() => toggle("ProductDesktop")} className="flex mt-2 gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                  <p className={openToggle === "ProductDesktop" ? 'w-fit text-white hover:underline' : 'w-fit text-gray-200 hover:underline'}>Product</p>
                  <FontAwesomeIcon icon={openToggle === "ProductDesktop" ? faChevronUp : faChevronDown}
                  className={openToggle === "ProductDesktop" ? "transition-transform text-[10px] text-white mt-1.5" : "transition-transform text-[10px] text-gray-200 mt-1.5"} />
                </div>
                { openToggle === "ProductDesktop" && (
                  <div ref={productRefs.setFloating} style={{position: productStrategy, top: productY ?? 0, left: productX ?? 0,}} className='shadow-2xl bg-white p-6 pr-15 rounded-[5px] text-gray-600 z-50 space-y-3'>
                    <p className='cursor-pointer hover:text-black w-fit'>Overview</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Pricing</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Marketplace</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Features</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Integrations</p>
                  </div>
                ) }
                <div ref={companyRefs.setReference} onClick={() => toggle("CompanyDesktop")} className="flex mt-2 gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                  <p className={openToggle === "CompanyDesktop" ? 'w-fit text-white hover:underline' : 'w-fit text-gray-200 hover:underline'}>Company</p>
                  <FontAwesomeIcon icon={openToggle === "CompanyDesktop" ? faChevronUp : faChevronDown}
                  className={openToggle === "CompanyDesktop" ? "transition-transform text-[10px] text-white mt-1.5" : "transition-transform text-[10px] text-gray-200 mt-1.5"} />
                </div>
                { openToggle === "CompanyDesktop" && (
                  <div ref={companyRefs.setFloating} style={{position: companyStrategy, top: companyY ?? 0, left: companyX ?? 0,}} className='shadow-2xl bg-white p-6 pr-15 rounded-[5px] text-gray-600 z-50 space-y-3'>
                    <p className='cursor-pointer hover:text-black w-fit'>About</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Team</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Blog</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Careers</p>
                  </div>
                ) }
                <div ref={connectRefs.setReference} onClick={() => toggle("ConnectDesktop")} className="flex mt-2 gap-1 hover:text-black w-fit cursor-pointer mx-auto">
                  <p className={openToggle === "ConnectDesktop" ? 'w-fit text-white hover:underline' : 'w-fit text-gray-200 hover:underline'}>Connect</p>
                  <FontAwesomeIcon icon={openToggle === "ConnectDesktop" ? faChevronUp : faChevronDown}
                  className={openToggle === "ConnectDesktop" ? "transition-transform text-[10px] text-white mt-1.5" : "transition-transform text-[10px] text-gray-200 mt-1.5"} />
                </div>
                { openToggle === "ConnectDesktop" && (
                  <div ref={connectRefs.setFloating} style={{position: connectStrategy, top: connectY ?? 0, left: connectX ?? 0,}} className='shadow-2xl bg-white p-6 pr-15 rounded-[5px] text-gray-600 z-50 space-y-3'>
                    <p className='cursor-pointer hover:text-black w-fit'>Contact</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Newsletter</p>
                    <p className='cursor-pointer hover:text-black w-fit'>Linkedln</p>
                  </div>
                ) }
              </div>
            </div>
            <div className='hidden lg:block ml-auto'>
              <div className='flex gap-5'>
                <button className='w-fit mx-auto cursor-pointer'>Login</button>
                <button className='cursor-pointer rounded-full bg-white hover:bg-[#ffffff48] w-fit mx-auto p-3 px-10 text-[#FF4B5A] hover:text-white font-bold'>Sign Up</button>
              </div>
            </div>
            <img src={menu ? close : hamburguer} alt="menu" ref={menuRefs.setReference} onClick={() => setMenu(!menu)} className='cursor-pointer block lg:hidden' />
          </div>
          {menu && (
            <div ref={menuRefs.setFloating} style={{position: menuStrategy, top: menuY ?? 0, left: menuX ?? 0,}} className='block lg:hidden text-[20px] font-medium bg-white w-[87%] p-8 shadow-2xl text-black rounded-[10px] z-50'>
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
          <div className='mt-20 lg:mt-30 space-y-5 lg:space-y-10'>
            <h1 className='font-["Ubuntu"] w-[80%] mx-auto leading-12 text-[38px] lg:text-[58px]'>A modern publishing platform</h1>
            <p className='font-light text-[18px] lg:text-[20px] w-[70%] mx-auto'>Grow your audience and build your online brand</p>
          </div>
          <div className='mt-15 space-x-5 font-["Ubuntu"] font-bold'>
            <button className='bg-white text-[#FF4B5A] p-3 px-5 rounded-full hover:bg-[#ffffff48] transition-all duration-300 cursor-pointer hover:text-white'>Start for Free</button>
            <button className='border border-white rounded-full p-3 px-6 cursor-pointer hover:bg-white hover:text-[#FF4B5A] transition-all duration-300'>Learn More</button>
          </div>
        </div>
      </nav>
      <section className='text-center lg:text-left mt-25'>
        <h1 className='font-["Ubuntu"] lg:text-center text-[28px] lg:text-[38px]'>Designed for the future</h1>
        <div className='mt-10 space-y-10 lg:flex lg:flex-row-reverse'>
          <img src={editorMobile} alt="editor" className='mx-auto block lg:hidden' />
          <img src={editorDesktop} alt="editor" className='hidden lg:block lg:absolute lg:top-170 lg:z-50' />
          <div className='lg:px-34 space-y-10 lg:pr-180 lg:space-y-15 lg:mt-20'>
            <div className='px-12 space-y-4 lg:space-y-6'>
              <h1 className='font-["Ubuntu"] text-[28px] px-15 lg:p-0 leading-8'>Introducing an extensible editor</h1>
              <p className='text-gray-600'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </div>
            <div className='px-12 space-y-4 lg:space-y-6'>
              <h1 className='font-["Ubuntu"] text-[28px] px-15 lg:p-0 leading-8'>Robust content management</h1>
              <p className='text-gray-600'>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
          </div>
        </div>
      </section>

      <img src={phones} alt="phones" className='absolute z-11 top-450 lg:top-393 lg:left-30' />
      
      <section className='mt-80 lg:mt-95 text-center lg:text-left text-white rounded-bl-[150px] hero rounded-tr-[150px]'>
        <div className='pt-80 lg:pt-28 pb-40 lg:pb-30 px-15 lg:pl-180 lg:pr-45 space-y-7'>
          <h1 className='font-["Ubuntu"] text-[44px] leading-14'>State of the Art Infrastructure</h1>
          <p className='text-[18px]'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </section>
      <section className='text-center lg:text-left mt-20 lg:mt-40 lg:flex'>
        <img src={laptopMobile} alt="laptop" className='block lg:hidden' />
        <img src={laptopDesktop} alt="laptop" className='hidden lg:block' />
        <div className='px-12 lg:px-22 lg:pr-50 space-y-10 lg:space-y-20 mt-10 lg:mt-50'>
          <div className='space-y-6'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 lg:px-0 leading-8'>Free, open, simple</h1>
            <p className='text-gray-600'>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          </div>
          <div className='space-y-6'>
            <h1 className='font-["Ubuntu"] text-[28px] px-15 lg:px-0 leading-8'>Powerful tooling</h1>
            <p className='text-gray-600'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </section>
      <footer className='lg:flex lg:items-start text-center lg:text-left mt-20 bg-[#24242C] rounded-tr-[150px] py-20 text-[18px]'>
        <img src={logo} alt="logo" className='mx-auto lg:mx-40' />
        <div className='space-y-5 mt-15 lg:mt-0'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Product</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Overview</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Pricing</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Marketplace</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Features</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Integrations</p>
          </div>
        </div>
        <div className='space-y-5 mt-15 lg:mt-0 lg:ml-60'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Company</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">About</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Team</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Blog</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Careers</p>
          </div>
        </div>
        <div className='space-y-5 mt-15 lg:mt-0 lg:ml-60'>
          <h1 className='text-white font-["Ubuntu"] font-medium'>Connect</h1>
          <div className='space-y-1 text-gray-300'>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Contact</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">Newsletter</p>
            <p className="hover:underline cursor-pointer w-fit mx-auto lg:mx-0">LinkedIn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
