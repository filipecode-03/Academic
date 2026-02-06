
function Button({ monthly, setMonthly }) {

    return (
        <div className="flex items-center gap-7 font-semibold mt-5 justify-center">
            <span className="text-gray-400">
                Annually
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
                <input
                type="checkbox"
                className="peer sr-only"
                checked={monthly}
                onChange={() => setMonthly(!monthly)}
                        />

                <div className="
                w-15 h-8 rounded-full
                bg-gradient-to-r
                from-[#979DE7]
                to-[#737ADB]
                transition-all duration-300
                " />

                <div className="
                absolute left-1.5 top-1.5
                h-5 w-5 rounded-full bg-white
                transition-transform duration-300
                peer-checked:translate-x-7
                " />
            </label>
            <span className="text-gray-400">
                Monthly
            </span>
        </div>
    )
}

export default Button