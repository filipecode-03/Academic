import avatar04 from '../images/avatar-rizky-hasanuddin.webp'

function ChatOpen() {
    return (
        <div className='mt-4'>
            <section className="flex items-start gap-5 p-5 text-gray-700">
                <img src={avatar04} alt="mark webber" className='w-12' />
                <div>
                    <p><span className='text-black font-bold pr-1'>Jacob Thompson</span> sent you a private message</p>
                    <p className='text-gray-500'>5 days ago</p>
                    <p className='border border-gray-400 p-4 mt-2 rounded-[5px]'>Hello. thanks for setting up the Chess Club, I've been a member for a few weeks now and l'm already having Iots of fun and improving my game.</p>
                </div>
            </section>
        </div>
    )
}

export default ChatOpen