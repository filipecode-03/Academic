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
        <div className="min-h-screen pt-30 mx-8 font-['Roboto'] text-gray-900">
            <img src={iconYes} alt="sucesso icon" />
            <h1 className='text-[45px] leading-11.25 mt-10 font-bold'>Thanks for subscribing!</h1>
            <p className='mt-5'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button className='bg-[#232742] p-4 mt-55 font-semibold text-white rounded-[10px] w-full'>Dismiss message</button>
        </div>
    )
}

export default Sucesso