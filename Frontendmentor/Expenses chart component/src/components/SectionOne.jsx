import logo from '../assets/images/logo.svg'

function SectionOne() {
    return (
        <nav className="bg-[#EC755D] lg:w-[40%] lg:mx-auto rounded-[10px] p-6 flex justify-between text-white">
            <div>
                <h1 className='text-[18px] '>My balance</h1>
                <h2 className='font-semibold text-[28px]'>$921.48</h2>
            </div>
            <img src={logo} alt="logo" />
        </nav>
    )
}

export default SectionOne