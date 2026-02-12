import { useState } from 'react'
import profile from './assets/images/image-jeremy.png'
import data from '../data.json'
import ellipsis from './assets/images/icon-ellipsis.svg'
import work from './assets/images/icon-work.svg'
import play from './assets/images/icon-play.svg'
import study from './assets/images/icon-study.svg'
import exercise from './assets/images/icon-exercise.svg'
import social from './assets/images/icon-social.svg'
import selfCare from './assets/images/icon-self-care.svg'

function App() {
  
  const [period, setPeriod] = useState("weekly");

  const periodLabel = {
  daily: "Day",
  weekly: "Week",
  monthly: "Month"
};
  const cardStyles = {
  Work: {
    color: "#FF8B64",
    image: work
  },
  Play: {
    color: "#56C2E6",
    image: play
  },
  Study: {
    color: "#FF5C7C",
    image: study
  },
  Exercise: {
    color: "#4BCF83",
    image: exercise
  },
  Social: {
    color: "#7335D2",
    image: social
  },
  "Self Care": {
    color: "#F1C75B",
    image: selfCare
  }
};


  return (
    <div className='text-white font-["Rubik"] bg-[#0D1323] min-h-screen p-8 pt-20
grid grid-cols-1 lg:grid-cols-4 gap-8 items-start lg:px-40'>
      <nav className='bg-[#1D204B] rounded-2xl lg:col-span-1'>
        <div className='bg-[#5746EA] justify-center flex lg:flex-col gap-4 py-6 lg:p-8 lg:pb-13 items-center lg:items-start rounded-2xl'>
          <img src={profile} alt="profile" className='w-20 border-3 border-white rounded-full' />
          <div>
            <h2 className='font-light text-gray-300'>Report for</h2>
            <h1 className='font-light text-[25px] lg:text-[42px] lg:leading-12'>Jeremy Robson</h1>
          </div>
        </div>
        <div className='flex justify-between lg:flex-col lg:items-start lg:gap-4 p-8 text-[18px]'>
          <button onClick={() => setPeriod("daily")} className={`cursor-pointer hover:text-white ${period === "daily" ? "text-white" : "text-gray-500"}`}>Daily</button>
          <button onClick={() => setPeriod("weekly")} className={`cursor-pointer hover:text-white ${period === "weekly" ? "text-white" : "text-gray-500"}`}>Weekly</button>
          <button onClick={() => setPeriod("monthly")} className={`cursor-pointer hover:text-white ${period === "monthly" ? "text-white" : "text-gray-500"}`}>Monthly</button>
        </div>
      </nav>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 lg:col-span-3 '>
        {data.map((item) => (
          <div key={item.title} className="pt-10 rounded-2xl"
          style={{
            backgroundColor: cardStyles[item.title].color,
            backgroundImage: `url("${cardStyles[item.title].image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top -10px right 20px"
          }}>
            <div className='bg-[#1D204B] p-6 rounded-2xl hover:bg-[#34397B] cursor-pointer'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-[18px]'>{item.title}</h1>
                <img src={ellipsis} alt="points" />
              </div>
              <div className='flex lg:flex-col items-center lg:items-start justify-between lg:mt-3'>
                <p className='text-[30px] lg:text-[50px] font-light'>{item.timeframes[period].current}hrs</p>
                <p className='text-gray-300 font-light'>Last {periodLabel[period]} - {item.timeframes[period].previous}hrs</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
