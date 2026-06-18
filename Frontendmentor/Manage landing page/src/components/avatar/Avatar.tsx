import CardsDesktop from "./CardsDesktop";
import Cards from "./Cards";

function Avatar() {

  return (
    <div className="p-8 mt-10 lg:mt-30">
        <h2 className="font-semibold text-[30px] lg:text-[40px] text-center leading-10">What they've said</h2>
        {/* MOBILE */}
        <div className="lg:hidden mt-10">
            <Cards />
        </div>
        {/* DESKTOP */}
        <div className="hidden lg:block mt-10 lg:mt-15">
          <CardsDesktop />
        </div>
        <button className='bg-[#F85E3D] mt-15 lg:mt-0 cursor-pointer text-white rounded-full px-8 py-3 block mx-auto'>Get Started</button>
    </div>
  );
}

export default Avatar