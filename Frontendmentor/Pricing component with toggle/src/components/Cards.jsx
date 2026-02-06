function Cards({ monthly }) {
    return (
        <div>
            <div className="bg-white rounded-2xl mt-15 p-8 shadowB">
                <h1 className="font-bold text-[22px]">Basic</h1>
                <div className="flex items-center justify-center">
                    <span className="text-[40px] font-bold">$</span>
                    <p className="text-[80px] font-bold">19.99</p>
                </div>
                <div className="space-y-4 mt-4">
                    <hr />
                    <p className="font-semibold">500 GB Storage</p>
                    <hr />
                    <p className="font-semibold">2 Users Allowed</p>
                    <hr />
                    <p className="font-semibold">Send up to 3 GB</p>
                    <hr />
                </div>
                <button className="font-semibold p-3 text-white mt-10 bg-gradient-to-r
                from-[#979DE7] w-full rounded-[5px]
                to-[#737ADB]">LEARN MORE</button>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Cards