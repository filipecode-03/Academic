import { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import alert from '../images/icon-error.svg'
import '../css/App.css'

function Email() {

    const [email, setEmail] = useState(false)

    return (
        <div className='pt-5'>
            <form 
                action="/enviar" 
                method="post" 
                class={`flex items-center bg-[#fff5f5] rounded-full overflow-hidden border w-[85%] lg:w-[70%] mx-auto lg:mx-0 ${email ? 'border-red-500' : 'border-[#C19799]'}`}>
                <label for="email" class="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    class="flex-grow px-7 py-4 text-[18px] text-[#c19799] placeholder-[#c19799] bg-transparent focus:outline-none"
                />
                {email && (
                    <img src={alert} alt="icon error" className='pr-4' />
                )}
                <button 
                    onClick={() => setEmail(!email)}
                    type="submit" 
                    class="bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] py-[20px] px-[35px] rounded-full flex items-center justify-center shadowb hover:scale-110"
                >
                    <img src={arrow} alt="icon arrow" className='h-[28px]' />
                </button>
            </form>
            {email && (
                <p className='text-left text-red-500 pl-[64px] lg:pl-[30px] pt-3'>Please provide a valid email</p>
            )}
        </div>
    )

}

export default Email