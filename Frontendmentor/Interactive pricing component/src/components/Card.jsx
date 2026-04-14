import check from '../images/icon-check.svg'
import Switch from './Switch'
import Slider from './Slider'

function Card() {
    return (
        <main className="absolute py-8 bg-white rounded-[10px] shadow-2xl top-80 left-1/2 -translate-x-1/2 w-[90%] lg:w-[48%]">
            <div className='lg:flex lg:items-center lg:justify-between lg:px-20'>
                <p className='text-center text-[18px] lg:text-left tracking-[2px] text-gray-500 font-semibold'>100K PAGEVIEWS</p>
                <div className='hidden lg:block'>
                    <div className='text-center flex items-center justify-center gap-2'>
                        <span className="font-extrabold text-[42px]">$16.00</span>
                        <p>/ month</p>
                    </div>
                </div>
            </div>
            <Slider />
            <div className='block lg:hidden'>
                <div className='text-center flex items-center justify-center gap-2'>
                    <span className="font-extrabold text-[32px]">$16.00</span>
                    <p>/ month</p>
                </div>
            </div>
            <Switch />
            <hr className='my-8 mt-12 text-gray-300' />
            <div className='lg:flex lg:items-center lg:justify-between lg:px-20'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-center lg:justify-start gap-5'>
                        <img src={check} alt="check" className='w-3' />
                        <p className='text-gray-500'>Unlimited websites</p>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start gap-5'>
                        <img src={check} alt="check" className='w-3' />
                        <p className='text-gray-500'>100% data ownership</p>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start gap-5'>
                        <img src={check} alt="check" className='w-3' />
                        <p className='text-gray-500'>Email reports</p>
                    </div>
                </div>
                <button className="block mx-auto lg:mx-0 bg-[#293356] mt-10 lg:mt-0 cursor-pointer px-14 p-4 rounded-full font-semibold text-[#9FACD8] hover:text-white">
                Start my trial
                </button>
            </div>
        </main>
    )
}

export default Card