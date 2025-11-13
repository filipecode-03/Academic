import { useState } from 'react'
import logo from './assets/images/logo.svg'
import picture from './assets/images/illustration-dashboard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [noti, setNoti] = useState(false)

  return (
    <div className="font-['Libre_Franklin']">
      <div className='pt-20 text-center'>
        <img src={logo} alt="logo ping" className='mx-auto' />
        <h1 className='text-[35px] text-gray-400 font-light pt-[50px]'>We are launching <span className='font-bold text-black'>soon!</span></h1>
        <p className='text-[20px] pt-[15px]'>Subscribe and get notified</p>
        <form action="/enviar" className='pt-10 lg:flex lg:gap-5 lg:justify-center'>
          <div>
            <label htmlFor="email"></label>
            <input 
            type="email" 
            id="email" 
            name="email"
            placeholder={noti ? 'example@email/com' : 'Your email address...'}
            required
            className={`border rounded-full w-[80%] lg:w-[500px] p-3.5 pl-10 ${noti ? 'border-red-400 border-2 placeholder-gray-600' : 'border-[#4D7BF3] placeholder-gray-300'}`}
            /> 
          {noti && (
              <p className='text-red-500 pt-2.5 pb-[18px] lg:pb-0 lg:text-left lg:pl-10'><em>Please provide a valid email address</em></p>
            )
          }
          </div>
          <button onClick={() => setNoti(!noti)} className='bg-[#4D7BF3] mt-[15px] lg:mt-0 rounded-full text-white w-[80%] lg:w-[220px] lg:h-[55px] p-3 font-medium text-[20px] cursor-pointer hover:bg-blue-400'>
            Notify Me
          </button>
        </form>
        <img src={picture} alt="picture dashboard" className='pt-[70px] mx-auto px-[35px] lg:px-[380px]'/>
        <div className='flex gap-3 justify-center pt-[150px]'>
          <FontAwesomeIcon icon={faFacebookF} className='text-[#4D7BF3] text-[25px] border border-gray-300 rounded-full px-2.5 py-3 hover:bg-[#4D7BF3] hover:text-white cursor-pointer' />
          <FontAwesomeIcon icon={faTwitter} className='text-[#4D7BF3] text-[25px] border border-gray-300 rounded-full px-2.5 py-3 hover:bg-[#4D7BF3] hover:text-white cursor-pointer' />
          <FontAwesomeIcon icon={faInstagram} className='text-[#4D7BF3] text-[25px] border border-gray-300 rounded-full px-2.5 py-3 hover:bg-[#4D7BF3] hover:text-white cursor-pointer' />
        </div>
        <p className='text-gray-400 py-[30px]'>&copy; Copyright Ping. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
