import intro from '../assets/images/illustration-intro.svg'

function Intro() {
    return (
        <div className="p-8 text-center lg:mx-auto lg:flex lg:max-w-300 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16 lg:text-left">
            <img
                src={intro}
                alt="intro"
                className="mx-auto lg:mx-0 lg:w-137.5"
            />

            <div>
                <h1 className="text-[40px] font-semibold leading-12 lg:max-w-125 lg:text-[56px] lg:leading-16">
                Bring everyone together to build better products.
                </h1>

                <p className="mt-4 text-[17px] text-gray-500 lg:max-w-107.5">
                Manage makes it simple for software teams to plan day-to-day tasks while
                keeping the larger team goals in view.
                </p>

                <button className="mt-8 cursor-pointer rounded-full bg-[#F85E3D] px-8 py-3 text-white shadow-lg hover:opacity-80 transition">
                Get Started
                </button>
            </div>
        </div>
    )
}

export default Intro