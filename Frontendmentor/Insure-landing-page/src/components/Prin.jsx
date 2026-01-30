import intro from '../assets/images/image-intro-desktop.jpg'
import iconSnappy from '../assets/images/icon-snappy-process.svg'
import iconAffordable from '../assets/images/icon-affordable-prices.svg'
import iconPeople from '../assets/images/icon-people-first.svg'
import bgImageMobile from '../assets/images/bg-pattern-intro-right-mobile.svg'

function Prin() {
    return (
        <main>
            <img src={intro} alt="intro" />
            <section className='text-white text-center py-25 p-8 bg-[url("./assets/images/bg-pattern-intro-left-mobile.svg")] bg-no-repeat bg-top-left bg-[#2C2640]'>
                <h1 className='font-["DM_Serif_Display"] text-[55px] px-4 leading-14'>Humanizing your insurance.</h1>
                <p className='mt-5'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <button className='border-2 p-2 px-6 mt-10'>VIEW PLANS</button>
            </section>
            <img src={bgImageMobile} alt="bg image" className='absolute top-253 right-0' />
            <section className='py-35 p-8 text-center'>
                <hr className='w-[40%] mx-auto text-[#CDBECD] border' />
                <h1 className='font-["DM_Serif_Display"] text-[55px] mt-8'>We're different</h1>
                <div className='flex flex-col gap-5 mt-15'>
                    <div>
                        <img src={iconSnappy} alt="snappy" className='mx-auto' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'>Snappy Process</h1>
                        <p className='mt-2 text-gray-600'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                    </div>
                    <div>
                        <img src={iconAffordable} alt="affordable" className='mx-auto' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'></h1>
                        <p className='mt-2 text-gray-600'>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>
                    <div>
                        <img src={iconPeople} alt="people" className='mx-auto' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'></h1>
                        <p className='mt-2 text-gray-600'>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-["DM_Serif_Display"]'>Find out more about how we work</h1>
                    <button>HOW WE WORK</button>
                </div>
            </section>
        </main>
    )
}

export default Prin