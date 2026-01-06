import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import menuClosed from './assets/images/icon-menu-close.svg'
import imgMobile from './assets/images/image-web-3-mobile.jpg'
import imgDesktop from './assets/images/image-web-3-desktop.jpg'
import pc from './assets/images/image-retro-pcs.jpg'
import laptop from './assets/images/image-top-laptops.jpg'
import gaming from './assets/images/image-gaming-growth.jpg'
import { useState } from 'react'

function App() {
  
  const [open, setOpen] = useState(false)
  
  return (
    <div className="min-h-screen font-['Inter'] mx-5 my-8 mb-30 lg:w-[80%] lg:mx-auto">
      { open && (
        <div className='fixed inset-0 bg-gray-900/50 z-40'></div>
      ) }
      
      { open && (
        <div className='fixed text-[22px] top-0 right-0 h-full w-84 bg-white z-50 p-8 space-y-5'>
            <img onClick={() => setOpen(!open)} src={menuClosed} alt="menu closed" className='cursor-pointer ml-auto' />
            <p className='mt-25 cursor-pointer hover:text-[#F15D51] w-fit'>Home</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>New</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Popular</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Trending</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Categories</p>
        </div>
      )
      }
      <div className='flex justify-between'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='block lg:hidden'>
          <button onClick={() => setOpen(!open)} className='cursor-pointer h-full'>
            <img src={menu} alt="menu" className='w-12 h-6' />
          </button>
        </div>
        <div className='mt-auto hidden lg:block'>
          <div className='flex gap-12'>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Home</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>New</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Popular</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Trending</p>
            <p className='cursor-pointer hover:text-[#F15D51] w-fit'>Categories</p>
          </div>
        </div>
      </div>
      <div className='lg:flex lg:gap-8 lg:h-fit'>
        <div className='mt-10 lg:w-[70%]'>
          <img src={imgMobile} alt="imagem principal mobile" className='block lg:hidden' />
          <img src={imgDesktop} alt="imagem principal desktop" className='hidden lg:block' />
          <div className='mt-8 lg:flex lg:gap-20'>
            <h1 className='font-bold text-[58px] leading-15'>The Bright Future of Web 3.0?</h1>
            <div className='mt-5 lg:mt-0'>
              <p className='text-gray-700'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='cursor-pointer mt-7 bg-[#F15D51] hover:bg-[#00001A] hover:text-white p-4 px-8 font-bold tracking-[5px]'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='bg-[#00001A] p-4 px-6 pb-7 h-fit mt-20 lg:mt-10 lg:w-[35%] text-white'>
          <h1 className='text-[#E3A556] font-bold text-[38px]'>New</h1>
          <div className='space-y-8 mt-5'>
            <div>
              <h2 className='font-bold text-[24px] hover:text-[#e3a556] cursor-pointer'>Hydrogen VS Electric Cars</h2>
              <p className='text-gray-400'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div>
              <h2 className='font-bold text-[24px] hover:text-[#e3a556] cursor-pointer'>The Downsides of AI Artistry</h2>
              <p className='text-gray-400'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr />
            <div>
              <h2 className='font-bold text-[24px] hover:text-[#e3a556] cursor-pointer'>Is VC Funding Drying Up?</h2>
              <p className='text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 lg:mt-15 space-y-8 lg:flex lg:space-y-0 lg:gap-8'>
        <div className='flex gap-6'>
          <img src={pc} alt="Retro PC" className='w-34' />
          <div>
            <h1 className='text-[#F15D51] font-bold text-[38px]'>01</h1>
            <h2 className='font-bold text-[22px] hover:text-[#F15D51] cursor-pointer'>Reviving Retro PCs</h2>
            <p className='mt-3 text-gray-700 leading-7'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='flex gap-6'>
          <img src={laptop} alt="Retro PC" className='w-34' />
          <div>
            <h1 className='text-[#F15D51] font-bold text-[38px]'>02</h1>
            <h2 className='font-bold text-[22px] hover:text-[#F15D51] cursor-pointer'>Top 10 Laptops of 2022</h2>
            <p className='mt-3 text-gray-700 leading-7'>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='flex gap-6'>
          <img src={gaming} alt="Retro PC" className='w-34' />
          <div>
            <h1 className='text-[#F15D51] font-bold text-[38px]'>03</h1>
            <h2 className='font-bold text-[22px] hover:text-[#F15D51] cursor-pointer'>The Growth of Gaming</h2>
            <p className='mt-3 text-gray-700 leading-7'>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App