import avatar04 from '../images/avatar-rizky-hasanuddin.webp'
import avatar05 from '../images/avatar-kimberly-smith.webp'
import post from '../images/image-chess.webp'
import avatar06 from '../images/avatar-nathan-peterson.webp'
import avatar07 from '../images/avatar-anna-kim.webp'

function ChatOpen() {
    return (
        <div className='mt-4'>
            <section className="flex items-start gap-5 p-5 text-gray-700">
                <img src={avatar04} alt="rizky hasanuddin" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1 hover:text-[#13366D] cursor-pointer'>Jacob Thompson</span> sent you a private message</p>
                    <p className='text-gray-500'>5 days ago</p>
                    <p className='border border-gray-400 hover:bg-[#E5EFF9] cursor-pointer p-4 mt-2 rounded-[5px]'>Hello. thanks for setting up the Chess Club, I've been a member for a few weeks now and l'm already having Iots of fun and improving my game.</p>
                </div>
            </section>
            <section className="flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar05} alt="kimberly smith" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1 hover:text-[#13366D] cursor-pointer'>kimberly Smith</span> commented on your picture</p>
                    <p className='text-gray-500'>1 week ago</p>
                </div>
                <img src={post} alt="post" className='w-14 hover:bg-gray-300 cursor-pointer rounded-[5px] p-0.5' />
            </section>
            <section className="flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar06} alt="nathan peterson" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1 hover:text-[#13366D] cursor-pointer'>Nathan Peterson</span> reacted to your recent post <span className='font-semibold text-gray-600 hover:text-[#13366D] cursor-pointer'>5 end-game strategies to increase your win rate</span></p>
                    <p className='text-gray-500'>2 week ago</p>
                </div>
            </section>
            <section className="flex items-start gap-5 p-5 text-gray-700 rounded-[10px]">
                <img src={avatar07} alt="Anna Kim" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1 hover:text-[#13366D] cursor-pointer'>Anna Kim</span> left the group <span className='px-1 font-bold text-[#08337B]'>Chess Club</span></p>
                    <p className='text-gray-500'>2 week ago</p>
                </div>
            </section>
        </div>
    )
}

export default ChatOpen