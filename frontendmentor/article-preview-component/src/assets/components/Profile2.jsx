import { useState } from 'react'
import profileImg from '../images/avatar-michelle.jpg'
import shareImgP1 from '../images/icon-share.svg'
import shareImgP2 from '../images/icon-share-white.png'
import iconFacebook from '../images/icon-facebook.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'

function Profile2() {
    const [share, setShare] = useState(false)
    
    return (
        <div className={`relative gap-5 pb-7 flex  pt-[15px] 
                        lg:pt-[22px] ${share ? 'px-0 lg:px-10' : 'px-10' }`}>
            <img src={profileImg} alt="profile" className='rounded-full w-[50px]' />
            <div className='tracking-[0.5px]'>
                <h1 className='font-semibold'>Michelle Appleton</h1>
                <p className='text-gray-400'>28 Jun 2020</p>
            </div>
            <div className='ml-auto my-auto'>
                <button className={'bg-[#e4eaf0] p-2.5 rounded-full'} onClick={() => setShare(!share)}>
                    <img src={shareImgP1} alt="icon share" className='w-[18px]' />
                </button>
            </div>
            { share && (
                <div className='absolute z-10 bg-[#49556B] flex gap-5 w-full h-[85%] rounded-b-2xl px-10
                                lg:w-[265px] lg:h-[55%] lg:rounded-2xl lg:px-0 lg:gap-3 lg:left-[363px] lg:bottom-[100px]'>
                    <div class="hidden lg:block absolute top-[55px] left-[119px] z-11
                                w-0 h-0
                                border-l-15 border-l-transparent
                                border-r-15 border-r-transparent
                                border-t-20 border-t-[#49556B]">
                                </div>
                    <h1 className='my-auto uppercase tracking-[5px] text-gray-400 lg:pl-[38px]'>Share</h1>
                    <div className='flex gap-5 my-auto'>
                        <img src={iconFacebook} alt="" className='w-[25px] lg:w-5' />
                        <img src={iconTwitter} alt="" className='w-[25px] lg:w-5' />
                        <img src={iconPinterest} alt="" className='w-[25px] lg:w-5' />
                    </div>
                    <div className='ml-auto my-auto'>
                        <button className={`lg:hidden ${ share ? 'bg-[#6C7F98] p-2.5 rounded-full' : 'bg-[#e4eaf0] p-2.5 rounded-full'}`} onClick={() => setShare(!share)}>
                            <img src={shareImgP2} alt="icon share" className='w-[18px]' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile2