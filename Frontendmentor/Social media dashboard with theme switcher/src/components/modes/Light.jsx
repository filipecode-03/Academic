import facebook from '../../assets/images/icon-facebook.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import youtube from '../../assets/images/icon-youtube.svg'
import arrowUp from '../../assets/images/icon-up.svg'
import arrowDown from '../../assets/images/icon-down.svg'

function Light() {
    return (
        <div>
            <section className='mt-12 text-center grid grid-cols-1'>
                <div className="rounded-[10px] overflow-hidden bg-gray-100">
                    <div className="h-[7px] bg-blue-600" />
                    <div className="p-8 text-center">
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={facebook} alt="facebook" />
                            <p>@nathanf</p>
                        </div>
                        <h1 className='text-[65px] font-bold mt-5 leading-none'>1987</h1>
                        <p className='tracking-[5px] font-light'>FOLLOWERS</p>
                        <div className='flex items-center gap-1 justify-center mt-5'>
                            <img src={arrowUp} alt="arrow up" />
                            <p className='text-[14px] text-[#1EB589] font-medium'>12 Today</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 rounded-[10px] overflow-hidden bg-gray-100">
                    <div className="h-[7px] bg-blue-500" />
                    <div className="p-8 text-center">
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={twitter} alt="twitter" />
                            <p>@nathanf</p>
                        </div>
                        <h1 className='text-[65px] font-bold mt-5 leading-none'>1044</h1>
                        <p className='tracking-[5px] font-light'>FOLLOWERS</p>
                        <div className='flex items-center gap-1 justify-center mt-5'>
                            <img src={arrowUp} alt="arrow up" />
                            <p className='text-[14px] text-[#1EB589] font-medium'>99 Today</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 rounded-[10px] overflow-hidden bg-gray-100">
                    <div className="h-[7px] bg-gradient-to-r from-[#F5C075] to-[#D45A8F]" />
                    <div className="p-8 text-center">
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={instagram} alt="instagram" />
                            <p>@realnathanf</p>
                        </div>
                        <h1 className='text-[65px] font-bold mt-5 leading-none'>11k</h1>
                        <p className='tracking-[5px] font-light'>FOLLOWERS</p>
                        <div className='flex items-center gap-1 justify-center mt-5'>
                            <img src={arrowUp} alt="arrow up" />
                            <p className='text-[14px] text-[#1EB589] font-medium'>1099 Today</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 rounded-[10px] overflow-hidden bg-gray-100">
                    <div className="h-[7px] bg-red-700" />
                    <div className="p-8 text-center">
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={youtube} alt="youtube" />
                            <p>Nathan F.</p>
                        </div>
                        <h1 className='text-[65px] font-bold mt-5 leading-none'>8239</h1>
                        <p className='tracking-[5px] font-light'>SUBSCRIBERS</p>
                        <div className='flex items-center gap-1 justify-center mt-5'>
                            <img src={arrowDown} alt="arrow up" />
                            <p className='text-[14px] text-red-600 font-medium'>144 Today</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-10'>
                <h1 className='font-bold text-gray-600 text-[28px]'>Overview - Today</h1>
                <div className='grid grid-cols-1'>
                    <div className='bg-gray-100 rounded-[10px] p-5'>
                        <div className='flex items-center justify-between'>
                            <p>Page Views</p>
                            <img src={facebook} alt="facebook" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Light