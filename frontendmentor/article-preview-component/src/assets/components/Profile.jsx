import { useState } from 'react'
import profilePicture from '../images/avatar-michelle.jpg'
import share from '../images/icon-share.svg'
import shareWhite from '../images/icon-share-white.png'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

function Profile() {
  const [isShared, setIsShared] = useState(false)

  return (
      <div
        className={`flex items-center gap-5 ${
          isShared ? 'bg-[#48556A] text-white px-8 py-6 rounded-b-2xl' : 'px-10 pt-4 pb-6'
        }`}>

        {isShared ? (
          <div className="flex items-center justify-between w-full px-2">
            <div className="flex items-center gap-6">
              <p className="tracking-[3px] text-[#9EAFC2] text-[18px] uppercase">Share</p>
              <img src={facebook} alt="facebook" className="h-[25px]" />
              <img src={twitter} alt="twitter" className="h-[25px]" />
              <img src={pinterest} alt="pinterest" className="h-[25px]" />
            </div>
            <button
              className="bg-[#6E8098] rounded-full h-[35px] w-[35px] flex items-center justify-center"
              onClick={() => setIsShared(false)}
            >
              <img src={shareWhite} alt="share" className="h-[15px]" />
            </button>
          </div>
        ) : (
          <>
            <img
              src={profilePicture}
              alt="profile"
              className="rounded-full h-[50px] w-[50px]"
            />
            <div>
              <h1 className="font-bold text-[#48556A]">Michelle Appleton</h1>
              <p className="text-[#9EAFC2]">28 Jun 2020</p>
            </div>
            <button
              className="bg-[#e2ebf3] rounded-full h-[35px] w-[35px] flex items-center justify-center ml-auto my-auto"
              onClick={() => setIsShared(true)}
            >
              <img src={share} alt="share" className="h-[15px]" />
            </button>
          </>
        )}
      </div>
  )
}

export default Profile
