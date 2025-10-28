import { useState } from 'react'
import picture from './assets/images/drawers.jpg'
import Profile from './assets/components/Profile.jsx'

function App() {

  return (
    <div className="min-h-screen w-full py-[70px] px-[30px] bg-[#ECF2F8] font-['Manrope']">
      <div className='bg-white rounded-2xl shadow-2xl'>
        <img src={picture} alt="picture" className='rounded-t-2xl' />
        <div className='px-10 pt-10 pb-7 space-y-4'>
          <h1 className='font-bold text-[#48556A] text-[23px]'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className='text-[#48556A] text-[18px] tracking-[1px]'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default App
