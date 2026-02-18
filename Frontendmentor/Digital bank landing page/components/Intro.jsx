import phone from '../src/assets/images/image-mockups.png'

function Intro() {
    return (
        <section className='pb-15 px-4' style={{
    backgroundColor: "#FAFAFA",
    backgroundImage: `url("../src/assets/images/bg-intro-mobile.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "100% 63%"
  }}>
                <img src={phone} alt="phone" className="relative -top-19" />
                <div className='text-center'>
                    <h1 className='text-[46px] leading-13 font-light'>Next generation digital banking</h1>
                    <p className='text-gray-500 px-8 mt-8 leading-5'>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className='bg-linear-to-r mt-6 from-[#2BBBC4] to-[#34CF65] p-2.5 px-8 font-semibold rounded-full shadow-2xl text-white'>Request Invite</button>
                </div>
        </section>
    )
}

export default Intro