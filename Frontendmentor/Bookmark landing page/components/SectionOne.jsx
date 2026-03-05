import hero from '../src/assets/images/illustration-hero.svg'

function SectionOne() {
    return (
        <section>
            <div className='relative'>
                <img src={hero} alt="hero" className="absolute top-5 lg:top-15 left-0 lg:left-200 z-10" />
                <div className="relative top-25 lg:top-50 bg-[#4F63D6] h-70 lg:h-80 w-100 ml-auto rounded-tl-full rounded-bl-full"></div>
            </div>        
            <div className='mt-40 lg:mt-0 lg:absolute lg:left-25 lg:top-60 text-center lg:text-left px-12 lg:pr-200'>
                <h1 className='font-medium text-[40px] lg:text-[50px] lg:leading-14 leading-12'>A Simple Bookmark Manager</h1>
                <p className='mt-4 text-gray-500 leading-7 lg:text-[18px]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='mt-8 flex gap-5 justify-center lg:justify-start'>
                    <button className='bg-[#5266DE] cursor-pointer p-3 rounded-[5px] text-white'>Get it on Chrome</button>
                    <button className='bg-[#F7F7F7] cursor-pointer p-3 shadowBox rounded-[5px]'>Get it on Firefox</button>
                </div>
            </div>
        </section>
    )
}

export default SectionOne