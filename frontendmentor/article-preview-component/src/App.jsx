import { useState } from 'react'
import picture from './assets/images/drawers.jpg'
import Profile from './assets/components/Profile.jsx'
import Profile2 from './assets/components/Profile2.jsx'

function App() {

  return (
    <div className="min-h-screen w-full py-[70px] px-[30px] bg-[#ECF2F8] font-['Manrope']
                    lg:px-[180px] lg:pt-[110px]">
      <div className='bg-white rounded-2xl shadow-2xl 
                      lg:flex'>
        <img src={picture} alt="picture" className='rounded-t-2xl 
                                                    lg:rounded-l-2xl lg:rounded-r-none lg:w-[450px]' />
        <div className='space-y-4'>
          <h1 className='px-10 pt-10 font-bold text-[#48556A] text-[21px]
                        lg:text-[23px]'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className='px-10 text-[#48556A] tracking-[1px]'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <Profile2 />
        </div>
      </div>
    </div>
  )
}

export default App
