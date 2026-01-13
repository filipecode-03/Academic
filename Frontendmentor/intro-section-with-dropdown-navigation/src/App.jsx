import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import menuClosed from './assets/images/icon-close-menu.svg'
import { useState } from 'react'
import mainPictureMobile from './assets/images/image-hero-mobile.png'
import mainPictureDesktop from './assets/images/image-hero-desktop.png'
import picture1 from './assets/images/client-databiz.svg'
import picture2 from './assets/images/client-audiophile.svg'
import picture3 from './assets/images/client-meet.svg'
import picture4 from './assets/images/client-maker.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import todoList from './assets/images/icon-todo.svg'
import calendar from './assets/images/icon-calendar.svg'
import reminders from './assets/images/icon-reminders.svg'
import planning from './assets/images/icon-planning.svg'

function App() {

  const [open, setOpen] = useState(false)
  const [aberto1, setAberto1] = useState(false)
  const [aberto2, setAberto2] = useState(false)
  const [aberto3, setAberto3] = useState(false)
  const [aberto4, setAberto4] = useState(false)

  const toggleFeatures = () => {
  setAberto1(!aberto1)
  setAberto2(false)
}

const toggleCompany = () => {
  setAberto2(!aberto2)
  setAberto1(false)
}

  return (
    <main className="min-h-screen my-8 mb-20 font-['Epilogue']">
      { open && (
        <div className='fixed inset-0 bg-gray-900/50 z-40'></div>
      ) }
      
      { open && (
        <div className='fixed text-[22px] top-0 right-0 h-full w-84 bg-white z-50 p-8 space-y-5 font-semibold text-gray-500'>
            <img onClick={() => setOpen(!open)} src={menuClosed} alt="menu closed" className='cursor-pointer ml-auto' />
            <div onClick={toggleFeatures} className="mt-15 flex gap-3 hover:text-black w-fit cursor-pointer">
              <p className="w-fit">Features</p>
              <FontAwesomeIcon icon={aberto1 ? faChevronUp : faChevronDown} 
              className="transition-transform text-[14px] mt-2" />
            </div>
            { aberto1 && (
              <div className='space-y-5 ml-7 text-[20px]'>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={todoList} alt="todo list" className='w-5 h-6' />
                  <p>Todo List</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={calendar} alt="Calendar" className='w-5 h-6' />
                  <p>Calendar</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={reminders} alt="reminders" className='w-5 h-6' />
                  <p>Reminders</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={planning} alt="planning" className='w-5 h-6' />
                  <p>Planning</p>
                </div>
              </div>
            ) }
            <div onClick={toggleCompany} className="flex gap-3 hover:text-black w-fit cursor-pointer">
              <p className="w-fit">Company</p>
              <FontAwesomeIcon icon={aberto2 ? faChevronUp : faChevronDown} 
              className="transition-transform text-[14px] mt-2" />
            </div>
            { aberto2 && (
              <div className='space-y-5 ml-7 text-[20px]'>
                <p className='cursor-pointer hover:text-black'>History</p>
                <p className='cursor-pointer hover:text-black'>Our Team</p>
                <p className='cursor-pointer hover:text-black'>Blog</p>
              </div>
            ) }
            <p className='cursor-pointer hover:text-black w-fit'>Careers</p>
            <p className='cursor-pointer hover:text-black w-fit'>About</p>
            <div className='flex flex-col mt-10 space-y-5 text-[20px]'>
              <button className='hover:text-black cursor-pointer w-fit mx-auto'>Login</button>
              <button className='cursor-pointer border-2 border-gray-500 hover:border-black hover:text-black rounded-[15px] py-3'>Register</button>
            </div>
        </div>
        )
      }
      <nav className='flex mx-8 gap-15'>
        <div>
          <img src={logo} alt="logo" className='h-8' />
        </div>
        <div className='block lg:hidden ml-auto'>
          <button onClick={() => setOpen(!open)} className='cursor-pointer h-full'>
            <img src={menu} alt="menu" className='w-12 h-6' />
          </button>
        </div>
        <div className='hidden lg:block text-gray-700'>
          <div className='flex gap-12'>
            <div onClick={() => setAberto3(!aberto3)} className="flex mt-1 gap-1 hover:text-black w-fit cursor-pointer">
              <p className="w-fit">Features</p>
              <FontAwesomeIcon icon={aberto3 ? faChevronUp : faChevronDown} 
              className="transition-transform text-[12px] mt-1" />
            </div>
            { aberto3 && (
              <div className='p-5 fixed top-18 tracking-[1px] space-y-5 left-33 z-40 text-[14px] shadow-2xl rounded-[10px] bg-white'>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={todoList} alt="todo list" className='w-4 h-5' />
                  <p>Todo List</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={calendar} alt="Calendar" className='w-4 h-5' />
                  <p>Calendar</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={reminders} alt="reminders" className='w-4 h-5' />
                  <p>Reminders</p>
                </div>
                <div className='flex gap-4 hover:text-black cursor-pointer'>
                  <img src={planning} alt="planning" className='w-4 h-5' />
                  <p>Planning</p>
                </div>
              </div>
            ) }
            <div onClick={() => setAberto4(!aberto4)} className="flex mt-1 gap-1 hover:text-black w-fit cursor-pointer">
              <p className="w-fit">Company</p>
              <FontAwesomeIcon icon={aberto4 ? faChevronUp : faChevronDown} 
              className="transition-transform text-[12px] mt-1" />
            </div>
            { aberto4 && (
              <div className='p-6 fixed top-18 tracking-[1px] space-y-3 left-83 z-40 text-[14px] shadow-2xl rounded-[10px] bg-white'>
                <p className='cursor-pointer hover:text-black'>History</p>
                <p className='cursor-pointer hover:text-black'>Our Team</p>
                <p className='cursor-pointer hover:text-black'>Blog</p>
              </div>
            ) }
            <p className='cursor-pointer hover:text-black w-fit mt-1'>Careers</p>
            <p className='cursor-pointer hover:text-black w-fit mt-1'>About</p>
          </div>
        </div>
        <div className='hidden lg:block ml-auto text-gray-700'>
          <button className='hover:text-black cursor-pointer w-fit mr-10'>Login</button>
          <button className='cursor-pointer border-2 border-gray-500 hover:border-black hover:text-black rounded-[15px] p-2 px-5'>Register</button>
        </div>
      </nav>
      <section className='lg:flex lg:flex-row-reverse lg:gap-30 lg:w-[80%] lg:mx-auto'>
        <div className='mt-8 lg:mt-10'>
          <img src={mainPictureMobile} alt="main picture" className='block lg:hidden' />
          <img src={mainPictureDesktop} alt="main picture" className='hidden lg:block w-220 h-140' />
        </div>
        <div className='text-center lg:text-left mt-10 lg:mt-30 mx-3'>
          <h1 className='font-bold text-[45px] lg:text-[85px] lg:leading-[80px] lg:w-[98%]'>Make remote work</h1>
          <p className='mt-2 lg:mt-10 lg:w-[80%] text-[18px]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className='cursor-pointer mt-6 lg:mt-12 border-2 border-black hover:bg-white hover:text-black bg-black text-white font-semibold p-4 px-8 rounded-[15px]'>Learn more</button>
          <div className='flex justify-between mt-12 lg:mt-17'>
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
              <img src={picture4} alt="maker" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
