import { useState } from 'react'
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-hamburger.svg'

function App() {

  return (
    <div className='min-h-screen'>
      <section className='p-8 pt-14 bg-[url("./assets/images/mobile/image-hero.jpg")] bg-cover h-screen'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </div>
        <h1 className='border text-white border-white'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </section>
    </div>
  )
}

export default App
