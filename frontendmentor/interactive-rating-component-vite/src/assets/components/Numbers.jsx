function Numbers({ selected, onSelect }) {
    const numbers = [1, 2, 3, 4, 5]
    return (    
        <div className="flex flex-row justify-between w-full">
            {numbers.map((num) => (
                <div
                key={num}
                onClick={() => onSelect(num)}
                className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer
                    ${selected === num ? "bg-white text-black" : "bg-[#262D37] text-gray-500 hover:bg-[#FC7613] hover:text-black"}`}
                >
                <a className="font-semibold">{num}</a>
                </div>
            ))}
        </div>

    )
}

export default Numbers