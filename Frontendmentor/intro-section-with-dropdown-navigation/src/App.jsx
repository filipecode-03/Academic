import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import menuClosed from './assets/images/icon-close-menu.svg'
import { useState } from 'react'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen font-['Inter'] mx-5 my-8 mb-30 lg:w-[80%] lg:mx-auto">
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
      <nav className='flex justify-between'>
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
      </nav>
    </main>
  )
}

export default App
