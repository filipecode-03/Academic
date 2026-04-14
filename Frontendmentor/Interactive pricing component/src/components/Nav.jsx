import circle from '../images/pattern-circles.svg'

function Nav() {
  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%]">
        <div className="relative">
            <img src={circle} alt="circle" className="mx-auto h-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-[28px] font-bold">
                    Simple, traffic-based pricing
                </h1>

                <div className='mt-3 lg:flex lg:gap-1 text-[18px] text-gray-600'>
                    <p>
                        Sign-up for our 30-day trial.
                    </p>
                    <p>
                        No credit card required
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Nav;