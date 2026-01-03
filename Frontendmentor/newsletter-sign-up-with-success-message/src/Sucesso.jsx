import { useLocation } from 'react-router-dom'
import iconYes from './assets/images/icon-success.svg'

function Sucesso() {

    const location = useLocation()

    const email = location.state?.email;

    if (!email) {
        navigate("/");
        return null;
    }
    return (
        <div className="min-h-screen font-['Roboto'] lg:bg-[#36384D] text-gray-900 lg:pt-20">
            <div className="pt-30 px-10 lg:pt-12 lg:p-12 bg-white lg:mx-auto lg:rounded-[50px] lg:w-[30%]">
                <img src={iconYes} alt="sucesso icon" />
                <h1 className='text-[45px] lg:text-[50px] leading-12 lg:leading-14 mt-10 font-bold'>Thanks for subscribing!</h1>
                <p className='mt-5'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='bg-[#232742] p-4 mt-50 lg:mt-10 font-semibold text-white rounded-[10px] w-full 
                hover:bg-gradient-to-r hover:from-[#FF5378] hover:to-[#FF6841] transition-all duration-400
                hover:shadow-lg hover:shadow-[#FF5378]
                hover:shadow-[#FF6841]'>Dismiss message</button>
            </div>
        </div>
    )
}

export default Sucesso