import phone from '../src/assets/images/image-mockups.png'

function Intro() {
    return (
        <section
  className="
    pb-15 lg:pb-40 lg:pl-30 pt-140 lg:pt-70
    bg-[#FAFAFA]
    bg-[url('../src/assets/images/bg-intro-mobile.svg')]
    bg-no-repeat
    bg-top
    bg-size-[100%_66%]

    lg:bg-[url('../src/assets/images/bg-intro-desktop.svg')]
    lg:bg-position-[right_-200px_top_-130px]
    lg:bg-size-[65%_125%]
  "
>

                <img src={phone} alt="phone" className="absolute drop-shadow-2xl -top-22 lg:-top-15 lg:-right-33" />
                <div className='text-center lg:text-left lg:w-[32%]'>
                    <h1 className='text-[46px] lg:text-[60px] leading-13 lg:leading-18 font-light'>Next generation digital banking</h1>
                    <p className='text-gray-500 mt-8 leading-5 lg:leading-6'>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className='bg-linear-to-r mt-6 from-[#2BBBC4] to-[#34CF65] p-2.5 px-8 font-semibold rounded-full shadow-2xl text-white'>Request Invite</button>
                </div>
        </section>
    )
}

export default Intro