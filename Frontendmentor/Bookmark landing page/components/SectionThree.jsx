import chrome from '../src/assets/images/logo-chrome.svg'
import firefox from '../src/assets/images/logo-firefox.svg'
import opera from '../src/assets/images/logo-opera.svg'
import dots from '../src/assets/images/bg-dots.svg'

function SectionThree() {
    return (
        <section className='text-center p-12 mt-25 lg:mt-50'>
            <h2 className='text-[25px] lg:text-[30px] font-medium'>Download the extension</h2>
            <p className='text-gray-500 mt-2 lg:w-[35%] lg:mx-auto'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className='mt-15 flex flex-col lg:flex-row lg:items-start lg:justify-center gap-20 lg:gap-8'>
                <div className='shadow2 py-8 rounded-[15px]'>
                    <img src={chrome} alt="chrome" className='mx-auto' />
                    <h3 className='text-[20px] font-medium mt-8'>Add to Chrome</h3>
                    <p className='text-[14px] text-gray-500'>Minimum version 62</p>
                    <img src={dots} alt="dots" className='w-full mx-auto mt-10' />
                    <button className='bg-[#5266DF] hover:bg-white hover:text-[#5266DF] border-3 border-transparent hover:border-[#5266DF] cursor-pointer p-3 px-8 text-white mt-6 rounded-[5px] font-medium'>Add & Install Extension</button>
                </div>
                <div className='shadow2 py-8 rounded-[15px] lg:mt-10'>
                    <img src={firefox} alt="firefox" className='mx-auto' />
                    <h3 className='text-[20px] font-medium mt-8'>Add to Firefox</h3>
                    <p className='text-[14px] text-gray-500'>Minimum version 55</p>
                    <img src={dots} alt="dots" className='w-full mx-auto mt-10' />
                    <button className='bg-[#5266DF] hover:bg-white hover:text-[#5266DF] border-3 border-transparent hover:border-[#5266DF] cursor-pointer p-3 px-8 text-white mt-6 rounded-[5px] font-medium'>Add & Install Extension</button>
                </div>
                <div className='shadow2 py-8 rounded-[15px] lg:mt-20'>
                    <img src={opera} alt="opera" className='mx-auto' />
                    <h3 className='text-[20px] font-medium mt-8'>Add to Opera</h3>
                    <p className='text-[14px] text-gray-500'>Minimum version 46</p>
                    <img src={dots} alt="dots" className='w-full mx-auto mt-10' />
                    <button className='bg-[#5266DF] hover:bg-white hover:text-[#5266DF] border-3 border-transparent hover:border-[#5266DF] cursor-pointer p-3 px-8 text-white mt-6 rounded-[5px] font-medium'>Add & Install Extension</button>
                </div>
            </div>
        </section>
    )
}

export default SectionThree