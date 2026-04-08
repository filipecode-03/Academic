function SectionTwo() {
    return (
        <section className="bg-white text-center lg:w-[55%] lg:mx-auto p-10 mt-8 shadow-2xs rounded-[10px]">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="border-r border-gray-400 pr">
                    <h2 className="font-bold text-[35px]">$89,914</h2>
                    <p className="text-gray-600">of $100,000 backed</p>
                    <hr className="w-[26%] block lg:hidden text-gray-400 mt-5 mx-auto" />
                </div>
                <div>
                    <h2 className="font-bold text-[35px]">5,007</h2>
                    <p className="text-gray-600">total backers</p>
                    <hr className="w-[26%] block lg:hidden text-gray-400 mt-5 mx-auto" />
                </div>
                <div>
                    <h2 className="font-bold text-[35px]">56</h2>
                    <p className="text-gray-600">days left</p>
                </div>
            </div>
            <div className="bg-gray-200 w-full h-5 mt-8 rounded-full">
                <div className="bg-[#3AB4AE] w-[80%] h-5 rounded-full"></div>
            </div>
        </section>
    )
}

export default SectionTwo