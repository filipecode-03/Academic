import { useState } from "react";
import tab1 from '../src/assets/images/illustration-features-tab-1.svg'
import tab2 from '../src/assets/images/illustration-features-tab-2.svg'
import tab3 from '../src/assets/images/illustration-features-tab-3.svg'

function SectionTwo() {

    const [active, setActive] = useState("btn1");

    return (
        <section className="mt-20 text-center">
            <h2 className="text-[25px] font-medium">Features</h2>
            <p className="text-gray-500 mt-2 px-12">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="px-12">
                <div className="mt-10 flex flex-col border-t border-b border-gray-200">
                    <button
                        onClick={() => setActive("btn1")}
                        className="relative cursor-pointer py-4 border-b border-gray-200 text-gray-600"
                    >
                        Simple Bookmarking
                        <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-red-500
                        transform transition-all duration-300
                        ${active === "btn1" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                        />
                    </button>
                    <button
                        onClick={() => setActive("btn2")}
                        className="relative cursor-pointer py-4 border-b border-gray-200 text-gray-600"
                    >
                        Speedy Searching

                        <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-red-500
                        transform transition-all duration-300
                        ${active === "btn2" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                        />
                    </button>
                    <button
                        onClick={() => setActive("btn3")}
                        className="relative cursor-pointer py-4 text-gray-600"
                    >
                        Easy Sharing

                        <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-red-500
                        transform transition-all duration-300
                        ${active === "btn3" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                        />
                    </button>
                </div>
            </div>
            <div className='relative'>
                {active === "btn1" && <img src={tab1} alt="hero" className="px-10 absolute top-14 left-0 z-10" />}
                {active === "btn2" && <img src={tab2} alt="hero" className="px-10 absolute top-14 left-0 z-10" />}
                {active === "btn3" && <img src={tab3} alt="hero" className="px-10 absolute top-14 left-0 z-10" />}
                <div className="relative top-25 bg-[#4F63D6] h-65 w-100 mr-auto rounded-tr-full rounded-br-full"></div>
            </div>
            {active === "btn1" && (
                <div className='mt-40 text-center px-12'>
                    <h2 className='font-medium text-[25px] leading-12'>Bookmark in one click</h2>
                    <p className='mt-1 text-gray-500 leading-7'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                </div>
            )}
            {active === "btn2" && (
                <div className='mt-50 text-center px-12'>
                    <h2 className='font-medium text-[25px] leading-12'>Intelligent search</h2>
                    <p className='mt-1 text-gray-500 leading-7'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <button className="cursor-pointer bg-[#5266DF] text-white p-2.5 px-4 rounded-[5px] mt-10 font-medium">
                    More Info
                    </button>
                </div>
            )}    
            {active === "btn3" && (
                <div className='mt-50 text-center px-12'>
                    <h2 className='font-medium text-[25px] leading-12'>Share your bookmarks</h2>
                    <p className='mt-1 text-gray-500 leading-7'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <button className="cursor-pointer bg-[#5266DF] text-white p-2.5 px-4 rounded-[5px] mt-10 font-medium">
                    More Info
                    </button>
                </div>
            )}    
        </section>
    )
}

export default SectionTwo