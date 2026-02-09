import { useState } from "react"

function Nav({ dark, setDark }) {
    
    return (
        <nav>
            <div>
                <h1 className="font-bold text-[30px]">Social Media Dashboard</h1>
                <p className="font-medium">Total Followers: 23,004</p>
            </div>
            <hr className="my-5" />
            <div className="flex items-center justify-between">
                <p>Dark Mode</p>
                <label className="relative inline-flex cursor-pointer items-center">
                <input
                type="checkbox"
                className="peer sr-only"
                checked={dark}
                onChange={() => setDark(!dark)}/>

                <div className="
                w-15 h-8 rounded-full
                bg-gray-400
                transition-all duration-300
                " />

                <div className="
                absolute left-1.5 top-1.5
                h-5 w-5 rounded-full bg-gray-100
                transition-transform duration-300
                translate-x-7
                peer-checked:translate-x-0
            " />
            </label>
            </div>
        </nav>
    )
}

export default Nav