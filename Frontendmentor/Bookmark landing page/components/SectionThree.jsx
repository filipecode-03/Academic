import chrome from '../src/assets/images/logo-chrome.svg'
import firefox from '../src/assets/images/logo-firefox.svg'
import opera from '../src/assets/images/logo-opera.svg'
import dots from '../src/assets/images/bg-dots.svg'

function SectionThree() {
    return (
        <section className='text-center p-8'>
            <h2 className='text-[25px] font-medium'>Download the extension</h2>
            <p className='text-gray-500'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className='mt-15'>
                <div className='shadow2 py-8 rounded-[15px]'>
                    <img src={chrome} alt="chrome" className='mx-auto' />
                    <h3 className='text-[20px] mt-5'>Add to Chrome</h3>
                    <p className='text-[14px] text-gray-500'>Minimum version 62</p>
                    <img src={dots} alt="dots" className='w-full mx-auto mt-10' />
                    <button className='bg-[#5266DF] p-3 px-8 text-white mt-6 rounded-[5px] font-medium'>Add & Install Extension</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default SectionThree