import logo from '../images/logo.svg'
import arrow from '../images/icon-arrow-down.svg'

function Sec01() {
    return (
        <div className="text-center text-white bg-[url('./assets/images/desktop/image-header.jpg')] bg-cover bg-center h-screen p-10">
            <div className='flex items-start justify-between'>
                <img src={logo} alt="logo" className='w-50 mt-2' />
                <div className='flex gap-12 text-[18px] font-medium'>
                    <p className='my-auto'>About</p>
                    <p className='my-auto'>Services</p>
                    <p className='my-auto'>Projects</p>
                    <p className='bg-white rounded-full p-3 px-6 text-black font-["Fraunces"] font-bold'>CONTACT</p>
                </div>
            </div>
            <h1 className='font-["Fraunces"] font-extrabold mt-17 text-[70px] tracking-[8px]'>WE ARE CREATIVES</h1>
            <img src={arrow} alt="arrow" className='mx-auto mt-17' />
        </div>
    )
}

export default Sec01