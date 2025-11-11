import { useState } from 'react'
import '../../App.css'
import error from '../images/icon-error.svg'

function Form() {

    const [trial, setTrial] = useState(false)

    return (
        <div className="px-[60px] pt-[30px] pb-20">
            <form action="/enviar" className="bg-white rounded-2xl p-6 space-y-5 shadowb">
                <div>
                    <label htmlFor="name" class="sr-only">Name:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder={trial ? "" : "First Name"}
                           required
                           className={`text-black placeholder-gray-600 font-semibold rounded-lg p-4.5 w-full ${trial ? "input-com-imagem border-2 border-red-400" : "border border-gray-400"}`}       
                    />
                    {trial && (
                        <p className='text-red-400 text-[12px] text-right pt-2'><em>First Name cannot be empty</em></p>
                    )}
                </div>
                <div>
                    <label htmlFor="last" class="sr-only">Last Name:</label>
                    <input type="text"
                           id="last"
                           name="last"
                           placeholder={trial ? "" : "Last Name"}
                           required
                           className={`text-black placeholder-gray-600 font-semibold rounded-lg p-4.5 w-full ${trial ? "input-com-imagem border-2 border-red-400" : "border border-gray-400"}`}       
                    />
                    {trial && (
                        <p className='text-red-400 text-[12px] text-right pt-2'><em>Last Name cannot be empty</em></p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" class="sr-only">Email Address:</label>
                    <input type="email"
                           id="email"
                           name="email"
                           placeholder={trial ? "email@example/com" : "Email Address"} 
                           required
                           className={`text-black font-semibold rounded-lg p-4.5 w-full ${trial ? "input-com-imagem border-red-400 border-2 placeholder-red-400" : "border-gray-400 border placeholder-gray-600"}`}       
                    />
                    {trial && (
                        <p className='text-red-400 text-[12px] text-right pt-2'><em>Looks like this is not an email</em></p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" class="sr-only">Password:</label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder={trial ? "" : "Password"}
                           required
                           className={`text-black placeholder-gray-600 font-semibold rounded-lg p-4.5 w-full ${trial ? "input-com-imagem border-2 border-red-400" : "border border-gray-400"}`}       
                    />
                    {trial && (
                        <p className='text-red-400 text-[12px] text-right pt-2'><em>Password cannot be empty</em></p>
                    )}
                </div>
                <button onClick={() => setTrial(!trial)} className="bg-[#37CC8A] rounded-lg p-5 font-semibold w-full tracking-[1px] shadowbb cursor-pointer hover:bg-[#77E2B4]">
                    CLAIM YOUR FREE TRIAL
                </button>
                <p className="text-gray-400 text-[14px] px-5">By clicking the button, you are agreeing to our <span className="text-red-400 font-semibold">Terms and Services</span></p>
            </form>
        </div>
    )
}

export default Form