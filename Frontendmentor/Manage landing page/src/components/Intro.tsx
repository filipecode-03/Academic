import intro from '../assets/images/illustration-intro.svg'

function Intro() {
    return (
        <div className='text-center p-8'>
            <img src={intro} alt="intro" />
            <h1 className='font-semibold text-[40px] leading-12'>Bring everyone together to build better products.</h1>
            <p className='text-gray-500 text-[17px] max-w-80 mt-2 mx-auto'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button className='bg-[#F85E3D] mt-5 text-white rounded-full px-8 py-3'>Get Started</button>
        </div>
    )
}

export default Intro