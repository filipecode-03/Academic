import intro from '../assets/images/group.svg'

function Prin() {
    return (
        <main>
            <div className="rounded-bl-[80px] bg-gray-200 h-130 lg:h-100 w-[50%] ml-auto"></div>
            <img src={intro} alt="intro" className='absolute top-35 lg:right-0 lg:top-40' />
            <section className='absolute lg:top-50 lg:left-32 p-8 pb-25'>
                <div className='flex items-center gap-5'>
                    <h1 className='bg-[#212840] text-white text-[18px] rounded-full px-3 p-0.5 font-["Barlow_Condensed"] font-semibold tracking-[1px]'>NEW</h1>
                    <h2 className='font-["Barlow"] text-gray-500 text-[18px] tracking-[3px]'>MONOGRAPH DASHBOARD</h2>
                </div>
                <h1 className='font-["Barlow_Condensed"] mt-5 font-bold text-[#212840] text-[50px] lg:text-[65px] leading-[50px] lg:leading-16 lg:w-[60%]'>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
                <p className='font-["Barlow_Condensed"] text-[25px] lg:text-[20px] mt-5 text-gray-500 w-[70%] lg:w-[28%]'>Project planning and time tracking for agile teams</p>
                <div className='mt-5 lg:mt-10 flex gap-6'>
                    <button className='bg-[#FF5D5E] hover:bg-[#ff5d5dd8] p-2 px-7 font-semibold text-white font-["Barlow_Condensed"] rounded-[5px] tracking-[1px] cursor-pointer'>SCHEDULE A DEMO</button>
                    <button className='font-["Barlow"] tracking-[2px] text-gray-500 cursor-pointer'>TO SEE A PREVIEW</button>
                </div>
            </section>
        </main>
    )
}

export default Prin