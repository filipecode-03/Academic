import { useState } from 'react'
import iconStar from './assets/images/icon-star.svg'
import iconMore from './assets/images/icon-plus.svg'
import pictureBg from './assets/images/background-pattern-desktop.svg'

function App() {
  return (
    <main className='w-screen h-screen bg-[#f9f0ff]'>
      <img src={pictureBg} alt="picture backgroud" />
      <img src={iconStar} alt="star icon" />
      <h1>FAQs</h1>
      <button>What is Frontend Mentor, and how will it help me?</button>
      <button><img src={iconMore} alt="more icon" /></button>
    </main>
  )
}

export default App
