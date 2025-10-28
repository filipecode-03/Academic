import { useState } from 'react'
import profilePicture from '../images/avatar-michelle.jpg'
import share from '../images/icon-share.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

function Profile() {
    const [isShared, setIsShared] = useState(false)

    return (
        <div className='flex gap-5 pt-5'>
            <img src={profilePicture} alt="profile picture" className='rounded-full h-[50px] w-[50px] ' />
            <div>
                <h1 className='font-bold text-[#48556A]'>Michelle Appleton</h1>
                <p className='text-[#9EAFC2]'>28 Jun 2020</p>
            </div>
            <div 
            className="bg-[#e2ebf3] rounded-full h-[35px] w-[35px] flex items-center justify-center ml-auto my-auto"
            onClick={() => setIsShared(!isShared)}
            >
                <img src={share} alt="share" className="h-[15px]" />
            </div>
             {isShared && (
                <div className="absolute index-10 bg-[#48556A] rounded-b-2xl p-5 flex gap-[20px]">
                    <p className="tracking-[3px] text-[#9EAFC2]">SHARE</p>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                </div>
            )}
        </div>
    )
}

export default Profile