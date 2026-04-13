import check from '../images/icon-check.svg'

function Card() {
    return (
        <main className="absolute p-8 bg-white rounded-[10px] shadow-2xl top-80 left-1/2 -translate-x-1/2 w-[90%]">
            <p className='text-center'>100K PAGEVIEWS</p>

            <p><span className="font-bold text-[32px]">$16.00</span> / month</p>

            <hr className='my-8' />
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-center gap-5'>
                    <img src={check} alt="check" className='w-3' />
                    <p>Unlimited websites</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <img src={check} alt="check" className='w-3' />
                    <p>100% data ownership</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <img src={check} alt="check" className='w-3' />
                    <p>Email reports</p>
                </div>
            </div>
            <button className="bg-[#293356] mt-10 cursor-pointer px-14 p-4 rounded-full font-semibold text-[#9FACD8] hover:text-white">Start my trial</button>
        </main>
    )
}

export default Card