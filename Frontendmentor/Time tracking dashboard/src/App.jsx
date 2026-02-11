import { useState } from 'react'
import profile from './assets/images/image-jeremy.png'
import data from '../data.json'
import ellipsis from './assets/images/icon-ellipsis.svg'

function App() {
  
  const [period, setPeriod] = useState("weekly");

  return (
    <div className='text-white font-["Rubik"] bg-[#0D1323] min-h-screen p-8 pt-20'>
      <nav className='bg-[#1D204B] rounded-2xl'>
        <div className='bg-[#5746EA] justify-center flex gap-4 py-6 items-center rounded-2xl'>
          <img src={profile} alt="profile" className='w-20 border-3 border-white rounded-full' />
          <div>
            <h2 className='font-light text-gray-300'>Report for</h2>
            <h1 className='font-light text-[25px]'>Jeremy Robson</h1>
          </div>
        </div>
        <div className='justify-between flex p-8 text-[18px] font-light'>
          <button onClick={() => setPeriod("daily")}>Daily</button>
          <button onClick={() => setPeriod("weekly")}>Weekly</button>
          <button onClick={() => setPeriod("monthly")}>Monthly</button>
        </div>
      </nav>
      <section className='grid grid-cols-1 gap-5 mt-10'>
        {data.map((item) => (
          <div key={item.title}>
            <div>
              <div className='flex items-center justify-between'>
                <h1>{item.title}</h1>
                <img src={ellipsis} alt="points" />
              </div>
              <div className='flex items-center justify-between'>
                <p>{item.timeframes[period].current}hrs</p>
                <p>Last Week - {item.timeframes[period].previous}hrs</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
