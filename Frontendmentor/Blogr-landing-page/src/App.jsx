import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import hamburguer from './assets/images/icon-hamburger.svg'
import editor from './assets/images/illustration-editor-mobile.svg'
import phones from './assets/images/illustration-phones.svg'

function App() {

  return (
    <div className='min-h-screen font-["Overpass"]'>
      <nav className='text-center text-white rounded-bl-[150px] bg-[linear-gradient(to_bottom,rgba(254,141,111,0.9),rgba(255,71,90,0.9)),url("./assets/images/bg-pattern-intro-mobile.svg")] bg-center bg-no-repeat'>
        <div className='p-8 pt-12 pb-42'>
          <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <img src={hamburguer} alt="menu" />
          </div>
          <div className='mt-20 space-y-5'>
            <h1 className='font-["Ubuntu"] w-[80%] mx-auto leading-12 text-[38px]'>A modern publishing platform</h1>
            <p className='font-light text-[18px] w-[70%] mx-auto'>Grow your audience and build your online brand</p>
          </div>
          <div className='mt-15 space-x-5 font-["Ubuntu"] font-bold'>
            <button className='bg-white text-[#FF4B5A] p-3 px-5 rounded-full'>Start for Free</button>
            <button className='border border-white rounded-full p-3 px-6'>Learn More</button>
          </div>
        </div>
      </nav>
      <section className='text-center mt-25'>
        <h1 className='font-["Ubuntu"] text-[28px]'>Designed for the future</h1>
        <div className='mt-10 space-y-10'>
          <img src={editor} alt="editor" className='mx-auto' />
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
        <div className='pt-75 pb-40 px-15 space-y-6'>
          <h1 className='font-["Ubuntu"] text-[44px] leading-14'>State of the Art Infrastructure</h1>
          <p className='text-[18px]'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </section>
    </div>
  )
}

export default App
