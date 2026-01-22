import interactiveMobile from '../images/mobile/image-interactive.jpg'
import { useState } from 'react'

function Main() {
    return (
        <section className='p-8'>
            <img src={interactiveMobile} alt="interactive" className='mt-20' />
            <div className='text-center mt-15 space-y-4'>
                <h1 className='font-["Josefin_Sans"] leading-11 font-light text-[45px]'>THE LEADER IN INTERACTIVE VR</h1>
                <p className='text-gray-600 px-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            <div className='mt-20'>
                <h1 className='text-[45px] text-center font-["Josefin_Sans"] leading-11 font-light'>OUR CREATIONS</h1>
                <div className='mt-10 space-y-8 grid lg:grid-cols-4'>
                    <div className="group relative p-6 pt-20 bg-[url('./assets/images/mobile/image-deep-earth.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">DEEP EARTH</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.9),rgba(0,0,0,0.4),transparent),url('./assets/images/mobile/image-night-arcade.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">NIGHT ARCADE</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-soccer-team.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">SOCCER TEAM VR</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-grid.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[30%] leading-8 text-white transition-colors duration-300 group-hover:text-black">THE GRID</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-from-above.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[50%] leading-8 text-white transition-colors duration-300 group-hover:text-black">FROM UP ABOVE VR</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-pocket-borealis.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">POCKET BOREALIS</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-curiosity.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">THE CURIOSITY</h1>
                    </div>
                    <div className="group relative p-6 pt-20 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),transparent),url('./assets/images/mobile/image-fisheye.jpg')] bg-center bg-cover font-['Josefin_Sans'] font-light text-[30px] cursor-pointer">
                        <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h1 className="relative z-10 w-[40%] leading-8 text-white transition-colors duration-300 group-hover:text-black">MAKE IT FISHEYE</h1>
                    </div>
                </div>
                <button className='mt-10 mx-auto tracking-[5px] border-2 p-2 px-10 hover:bg-black cursor-pointer hover:text-white'>SEE ALL</button>
            </div>
        </section>
    )
}

export default Main