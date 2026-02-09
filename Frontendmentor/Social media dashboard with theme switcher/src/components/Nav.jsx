import { useState } from "react"

function Nav({ dark, setDark }) {
    
    return (
        <nav className="lg:flex lg:items-center lg:justify-between">
            <div>
                <h1 className="font-bold text-[30px]">Social Media Dashboard</h1>
                <p className="font-medium">Total Followers: 23,004</p>
            </div>
            <hr className="my-5 block lg:hidden" />
            <div className="flex items-center justify-between lg:gap-5">
                <p>Dark Mode</p>
                <label className="relative inline-flex cursor-pointer items-center group">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={dark}
                        onChange={() => setDark(!dark)}
                    />

                    {/* Fundo */}
                    <div
                        className="
                        w-14 h-8 rounded-full
                        bg-gray-400
                        transition-all duration-300

                        group-hover:bg-gradient-to-r 
                        group-hover:from-[#3D96D8] 
                        group-hover:to-[#4FCE97]

                        peer-checked:bg-gradient-to-r
                        peer-checked:from-[#3D96D8]
                        peer-checked:to-[#4FCE97]
                        "
                    />

                    {/* Bola */}
                    <div
                        className="
                        absolute right-1 top-1
                        h-6 w-6 rounded-full bg-white
                        transition-transform duration-300

                        peer-checked:-translate-x-6
                        "
                    />
                </label>
            </div>
        </nav>
    )
}

export default Nav