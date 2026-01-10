import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import menuClosed from './assets/images/icon-close-menu.svg'
import { useState } from 'react'
import mainPicture from './assets/images/image-hero-mobile.png'
import picture1 from './assets/images/client-databiz.svg'
import picture2 from './assets/images/client-audiophile.svg'
import picture3 from './assets/images/client-meet.svg'
import picture4 from './assets/images/client-maker.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [open, setOpen] = useState(false)
  const [aberto1, setAberto1] = useState(false)
  const [aberto2, setAberto2] = useState(false)

  return (
    <main className="min-h-screen my-8 mb-20 font-['Epilogue']">
      { open && (
        <div className='fixed inset-0 bg-gray-900/50 z-40'></div>
      ) }
      
      { open && (
        <div className='fixed text-[22px] top-0 right-0 h-full w-84 bg-white z-50 p-8 space-y-5 font-semibold text-gray-500'>
            <img onClick={() => setOpen(!open)} src={menuClosed} alt="menu closed" className='cursor-pointer ml-auto' />
            <div onClick={() => setAberto1(!aberto1)} className="mt-15 flex gap-3 hover:text-black w-fit cursor-pointer">
              <p className="w-fit">Features</p>
              <FontAwesomeIcon icon={aberto1 ? faChevronUp : faChevronDown} 
              className="transition-transform text-[14px] mt-2" />
            </div>
            { aberto1 && (
              <div>
                <div>
                  <img src="" alt="" />
                  <p>Todo List</p>
                </div>
                <div>
                  <img src="" alt="Calendar" />
                  <p>Calendar</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <p>Reminders</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <p>Planning</p>
                </div>
              </div>
            ) }
            <p className='cursor-pointer hover:text-black w-fit'>Company</p>
            <p className='cursor-pointer hover:text-black w-fit'>Careers</p>
            <p className='cursor-pointer hover:text-black w-fit'>About</p>
            <div className='flex flex-col mt-10 space-y-5 text-[20px]'>
              <button className='hover:text-black cursor-pointer w-fit mx-auto'>Login</button>
              <button className='cursor-pointer border-2 border-gray-500 hover:border-black hover:text-black rounded-[15px] py-3'>Register</button>
            </div>
        </div>
      )
      }
      <nav className='flex justify-between mx-8'>
        <div>
          <img src={logo} alt="logo" className='h-8' />
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
      </nav>
      <section>
        <div className='mt-8'>
          <img src={mainPicture} alt="main picture" />
        </div>
        <div className='text-center mt-10 mx-3'>
          <h1 className='font-bold text-[45px]'>Make remote work</h1>
          <p className='mt-2 text-[18px]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className='mt-6 border-2 border-black hover:bg-white hover:text-black bg-black text-white font-semibold p-4 px-8 rounded-[15px]'>Learn more</button>
          <div className='flex justify-between mt-12'>
            <div>
              <img src={picture1} alt="databiz" />
            </div>
            <div>
              <img src={picture2} alt="audio phile" />
            </div>
            <div>
              <img src={picture3} alt="meet" />
            </div>
            <div>
              <img src={picture4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
