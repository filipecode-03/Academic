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
        <div className={`${ share ? 'px-0 pt-[15px] pb-7 relative flex gap-5' : 'px-10 pt-[15px] pb-7 relative flex gap-5' }`}>
            <img src={profileImg} alt="profile" className='rounded-full w-[50px]' />
            <div className='tracking-[0.5px]'>
                <h1 className='font-semibold'>Michelle Appleton</h1>
                <p className='text-gray-400'>28 Jun 2020</p>
            </div>
            <div className='ml-auto my-auto'>
                <button className={`${ share ? 'bg-[#49556B]' : 'bg-[#e4eaf0] p-2.5 rounded-full'}`} onClick={() => setShare(!share)}>
                    <img src={ share ? shareImgP2 : shareImgP1 } alt="icon share" className='w-[18px]' />
                </button>
            </div>
            { share && (
                <div className='absolute z-10 bg-[#49556B] flex gap-[15px] w-full h-full rounded-b-2xl px-10'>
                    <h1 className='my-auto uppercase tracking-[3px]'>Share</h1>
                    <div className='flex gap-5 my-auto'>
                        <img src={iconFacebook} alt="" className='' />
                        <img src={iconTwitter} alt="" />
                        <img src={iconPinterest} alt="" />
                    </div>
                    <div className='ml-auto my-auto'>
                            <button className={`${ share ? 'bg-[#6C7F98] p-2.5 rounded-full' : 'bg-[#e4eaf0] p-2.5 rounded-full'}`} onClick={() => setShare(!share)}>
                                <img src={ share ? shareImgP2 : shareImgP1 } alt="icon share" className='w-[18px]' />
                            </button>
                        </div>
                </div>
            )}
        </div>
    )
}

export default Profile2