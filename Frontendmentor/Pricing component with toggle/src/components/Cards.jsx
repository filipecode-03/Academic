

function Cards({ monthly }) {
    return (
        <div className="flex flex-col lg:flex-row mt-20 lg:justify-center gap-12 lg:gap-0">
            <div className="bg-white rounded-2xl p-8 shadowB lg:mt-3 lg:w-100">
                <h1 className="font-bold text-[22px]">Basic</h1>
                <div className="flex items-center justify-center">
                    <span className="text-[40px] font-bold">$</span>
                    <p className="text-[80px] font-bold">{monthly ? "199.99" : "19.99"}</p>
                </div>
                <div className="space-y-4 mt-4">
                    <hr className="text-gray-400" />
                    <p className="font-bold">500 GB Storage</p>
                    <hr className="text-gray-400" />
                    <p className="font-bold">2 Users Allowed</p>
                    <hr className="text-gray-400" />
                    <p className="font-bold">Send up to 3 GB</p>
                    <hr className="text-gray-400" />
                </div>
                <button className="font-semibold tracking-[1px] p-3 mt-10 w-full rounded-[5px]
                    text-white bg-gradient-to-r from-[#979DE7] to-[#737ADB]
                    border border-transparent hover:bg-none hover:bg-white hover:text-[#737ADB]
                    hover:border-[#737ADB] cursor-pointer">
                LEARN MORE
                </button>
            </div>
            <div className="lg:scale-110 lg:z-10 lg:w-100
            bg-gradient-to-b from-[#979DE7] to-[#737ADB] rounded-2xl p-8 lg:py-14 shadowB text-white">
                <h1 className="font-bold text-[22px]">Profissional</h1>
                <div className="flex items-center justify-center">
                    <span className="text-[40px] font-bold">$</span>
                    <p className="text-[80px] font-bold">{monthly ? "249.99" : "24.99"}</p>
                </div>
                <div className="space-y-4 mt-4">
                    <hr className="text-gray-300" />
                    <p className="font-bold">1 TB Storage</p>
                    <hr className="text-gray-300" />
                    <p className="font-bold">5 Users Allowed</p>
                    <hr className="text-gray-300" />
                    <p className="font-bold">Send up to 10 GB</p>
                    <hr className="text-gray-300" />
                </div>
                <button className="font-semibold tracking-[1px] p-3 mt-10 w-full rounded-[5px]
                    text-[#737ADB] hover:text-white bg-white
                    border border-transparent hover:bg-none hover:bg-[#737ADB]
                    hover:border-white cursor-pointer">
                LEARN MORE
                </button>
            </div>
           <div className="bg-white rounded-2xl p-8 shadowB lg:mt-3 lg:w-100">
                <h1 className="font-bold text-[22px]">Master</h1>
                <div className="flex items-center justify-center">
                    <span className="text-[40px] font-bold">$</span>
                    <p className="text-[80px] font-bold">{monthly ? "399.99" : "39.99"}</p>
                </div>
                <div className="space-y-4 mt-4">
                    <hr className="text-gray-400" />
                    <p className="font-bold">2 TB Storage</p>
                    <hr className="text-gray-400" />
                    <p className="font-bold">10 Users Allowed</p>
                    <hr className="text-gray-400" />
                    <p className="font-bold">Send up to 20 GB</p>
                    <hr className="text-gray-400" />
                </div>
                <button className="font-semibold tracking-[1px] p-3 mt-10 w-full rounded-[5px]
                    text-white bg-gradient-to-r from-[#979DE7] to-[#737ADB]
                    border border-transparent hover:bg-none hover:bg-white hover:text-[#737ADB]
                    hover:border-[#737ADB] cursor-pointer">
                LEARN MORE
                </button>
            </div>
        </div>
    )
}

export default Cards