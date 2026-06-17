function Started() {
    return (
        <div className="bg-[#F3613C] py-20 mt-2 bg-[url('./assets/images/bg-simplify-section-mobile.svg')] lg:bg-[url('./assets/images/bg-simplify-section-desktop.svg')] bg-no-repeat bg-left lg:bg-right p-8 lg:px-30 flex flex-col lg:flex-row lg:justify-between items-center gap-6">
            <h2 className="text-white text-center lg:text-left text-[40px] font-semibold leading-12 max-w-85 lg:max-w-120 mx-auto lg:mx-0">
                Simplify how your team works today.
            </h2>
            <button className="bg-white cursor-pointer rounded-full px-6 py-3 font-bold shadow-2xl text-[#F0876D]">
                Get Started
            </button>
        </div>
    )
}

export default Started