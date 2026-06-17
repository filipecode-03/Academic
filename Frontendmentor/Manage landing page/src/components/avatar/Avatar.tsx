
import Cards from "./Cards";

function Avatar() {

  return (
    <div className="p-8 mt-10">
        <h2 className="font-semibold text-[30px] text-center leading-10">What they've said</h2>
        {/* MOBILE */}
        <div className="lg:hidden mt-10">
            <Cards />
            <button className='bg-[#F85E3D] mt-15 cursor-pointer text-white rounded-full px-8 py-3 block mx-auto'>Get Started</button>
        </div>
        {/* DESKTOP */}
        <div className="hidden lg:block">
            {/* Marquee do Kibo UI */}
        </div>
    </div>
  );
}

export default Avatar