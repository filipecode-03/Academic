function SectionThree({ setIsModalOpen, setSelectedCard }) {
    return (
        <section className="bg-white lg:w-[55%] lg:mx-auto text-gray-600 shadow-2xs p-10 mt-8 rounded-[10px]">
            <h2 className="text-[22px] font-bold text-black">About this project</h2>
            <p className="mt-5">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p className="mt-5">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <div className="border rounded-[10px] p-5 mt-10">
                <div className="lg:flex lg:justify-between">
                    <h3 className="font-bold text-black lg:text-[18px]">Bamboo Stand</h3>
                    <h4 className="text-[#3CB4AB] font-medium">Pledge $25 or more</h4>
                </div>
                <p className="mt-5">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                <div className="mt-5 lg:flex lg:justify-between">
                    <div className="flex items-center gap-2">
                        <h5 className="text-black font-bold text-[30px] lg:text-[40px]">101</h5>
                        <p>left</p>
                    </div>
                    <button onClick={() => {
                        setIsModalOpen(true)
                        setSelectedCard(2)
                    }} className="bg-[#3CB4AB] hover:bg-[#157A74] cursor-pointer mt-3 text-white p-3 px-6 rounded-full">Select Reward</button>
                </div>
            </div>
            <div className="border rounded-[10px] p-5 mt-8">
                <div className="lg:flex lg:justify-between">
                    <h3 className="font-bold text-black lg:text-[18px]">Black Edition Stand</h3>
                    <h4 className="text-[#3CB4AB] font-medium">Pledge $75 or more</h4>
                </div>
                <p className="mt-5">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                <div className="mt-5 lg:flex lg:justify-between">
                    <div className="flex items-center gap-2">
                        <h5 className="text-black font-bold text-[30px] lg:text-[40px]">64</h5>
                        <p>left</p>
                    </div>
                    <button onClick={() => {
                        setIsModalOpen(true)
                        setSelectedCard(3)
                    }} className="bg-[#3CB4AB] hover:bg-[#157A74] cursor-pointer mt-3 text-white p-3 px-6 rounded-full">Select Reward</button>
                </div>
            </div>
            <div className="border border-gray-400 rounded-[10px] p-5 mt-8">
                <div className="lg:flex lg:justify-between">
                    <h3 className="font-bold text-gray-400 lg:text-[18px]">Mahogany Special Edition</h3>
                    <h4 className="text-[#3cb4ac70] font-medium">Pledge $200 or more</h4>
                </div>
                <p className="mt-5 text-gray-400">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                <div className="mt-5 lg:flex lg:justify-between">
                    <div className="flex items-center gap-2">
                        <h5 className="text-gray-500 font-bold text-[30px] lg:text-[40px]">0</h5>
                        <p className="text-gray-400">left</p>
                    </div>
                    <button className="bg-[#CBCBCB] mt-3 text-white p-3 px-6 rounded-full">Out of Stock</button>
                </div>
            </div>
        </section>
    )
}

export default SectionThree