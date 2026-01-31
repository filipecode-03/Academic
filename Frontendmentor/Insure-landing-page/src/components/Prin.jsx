import intro from '../assets/images/image-intro-desktop.jpg'
import iconSnappy from '../assets/images/icon-snappy-process.svg'
import iconAffordable from '../assets/images/icon-affordable-prices.svg'
import iconPeople from '../assets/images/icon-people-first.svg'
import bgImageMobile from '../assets/images/bg-pattern-intro-right-mobile.svg'
import bgImageDesktop from '../assets/images/bg-pattern-intro-left-desktop.svg'

function Prin() {
    return (
        <main>
            <img src={intro} alt="intro" className='lg:absolute lg:left-215 lg:top-47' />
            <section className='text-white text-center lg:text-left py-25 lg:pb-35 p-8 lg:px-30 bg-[url("./assets/images/bg-pattern-intro-left-mobile.svg")] lg:bg-[url("./assets/images/bg-pattern-intro-right-desktop.svg")] bg-no-repeat bg-top-left lg:bg-top-right bg-[#2C2640]'>
                <hr className='hidden lg:block w-[15%]' />
                <h1 className='font-["DM_Serif_Display"] text-[55px] lg:text-[85px] px-4 lg:px-0 leading-14 lg:leading-20 lg:w-[50%] lg:mt-15'>Humanizing your insurance.</h1>
                <p className='mt-5 lg:pr-150 lg:text-[20px]'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <button className='border-2 p-2 px-6 mt-10 hover:bg-white hover:text-black cursor-pointer'>VIEW PLANS</button>
            </section>
            <img src={bgImageMobile} alt="bg image" className='absolute top-253 right-0 block lg:hidden' />
            <img src={bgImageDesktop} alt="bg image desktop" className='hidden lg:block absolute top-150' />
            <section className='py-35 lg:pt-80 p-8 lg:p-30 text-center lg:text-left'>
                <hr className='w-[40%] lg:w-[8%] mx-auto lg:mx-0 text-[#CDBECD] border' />
                <h1 className='font-["DM_Serif_Display"] text-[55px] lg:text-[65px] mt-8'>We're different</h1>
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-20 mt-15'>
                    <div>
                        <img src={iconSnappy} alt="snappy" className='mx-auto lg:mx-0' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'>Snappy Process</h1>
                        <p className='mt-2 px-4 lg:px-0 text-gray-600'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                    </div>
                    <div>
                        <img src={iconAffordable} alt="affordable" className='mx-auto lg:mx-0' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'>Affordable Prices</h1>
                        <p className='mt-2 px-4 lg:px-0 text-gray-600'>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>
                    <div>
                        <img src={iconPeople} alt="people" className='mx-auto lg:mx-0' />
                        <h1 className='font-["DM_Serif_Display"] text-[28px] mt-5'>People First</h1>
                        <p className='mt-2 px-4 lg:px-0 text-gray-600'>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                    </div>
                </div>
                <div className='p-5 lg:px-20 py-15 mt-36 text-white bg-[url("./assets/images/bg-pattern-how-we-work-mobile.svg")] lg:bg-[url("./assets/images/bg-pattern-how-we-work-desktop.svg")] bg-no-repeat bg-top-right bg-[#2C2640] lg:flex lg:items-center lg:justify-between'>
                    <h1 className='font-["DM_Serif_Display"] text-[45px] lg:text-[55px] leading-12 lg:w-[44%]'>Find out more about how we work</h1>
                    <button className='border-2 mt-8 lg:mt-0 tracking-[1px] p-2 px-6 hover:bg-white hover:text-black cursor-pointer'>HOW WE WORK</button>
                </div>
            </section>
        </main>
    )
}

export default Prin