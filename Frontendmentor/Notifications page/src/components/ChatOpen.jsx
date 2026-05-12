import avatar04 from '../images/avatar-rizky-hasanuddin.webp'
import avatar05 from '../images/avatar-kimberly-smith.webp'

function ChatOpen() {
    return (
        <div className='mt-4'>
            <section className="flex items-start gap-5 p-5 text-gray-700">
                <img src={avatar04} alt="rizky hasanuddin" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Jacob Thompson</span> sent you a private message</p>
                    <p className='text-gray-500'>5 days ago</p>
                    <p className='border border-gray-400 p-4 mt-2 rounded-[5px]'>Hello. thanks for setting up the Chess Club, I've been a member for a few weeks now and l'm already having Iots of fun and improving my game.</p>
                </div>
            </section>
            <section className="bg-[#F6FAFD] flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar05} alt="kimberly smith" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Mark Webber</span> reacted to your recent post <span className='px-1 font-semibold text-gray-600'>My first tournament today!</span><span className='bg-red-500 inline-block w-2.5 h-2.5 rounded-full'></span></p>
                    <p className='text-gray-500'>1m ago</p>
                </div>
            </section>
        </div>
    )
}

export default ChatOpen