import avatar01 from '../images/avatar-mark-webber.webp'
import avatar02 from '../images/avatar-angela-gray.webp'
import avatar03 from '../images/avatar-jacob-thompson.webp'

function Prin() {
    return (
        <div className='mt-5 flex flex-col gap-4'>
            <section className="bg-[#F6FAFD] flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar01} alt="mark webber" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Mark Webber</span> reacted to your recent post <span className='px-1 font-semibold text-gray-600'>My first tournament today!</span><span className='bg-red-500 inline-block w-2.5 h-2.5 rounded-full'></span></p>
                    <p className='text-gray-500'>1m ago</p>
                </div>
            </section>
            <section className="bg-[#F6FAFD] flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar02} alt="mark webber" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Angela Gray</span> followed <span className='pr-0.5'>you</span> <span className='bg-red-500 inline-block w-2.5 h-2.5 rounded-full'></span></p>
                    <p className='text-gray-500'>5m ago</p>
                </div>
            </section>
            <section className="bg-[#F6FAFD] flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar03} alt="mark webber" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Jacob Thompson</span> has joined your group <span className='px-1 font-bold text-[#08337B]'>Chess Club</span><span className='bg-red-500 inline-block w-2.5 h-2.5 rounded-full'></span></p>
                    <p className='text-gray-500'>1 day ago</p>
                </div>
            </section>
        </div>
    )
}

export default Prin