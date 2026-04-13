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

                <p className="mt-3 text-[18px] text-gray-600">
                    Sign-up for our 30-day trial.
                </p>

                <p className="text-gray-600 text-[18px]">
                    No credit card required
                </p>
            </div>
        </div>
    </div>
  );
}

export default Nav;