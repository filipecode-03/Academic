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
        <button
            className="
              cursor-pointer
              rounded-full
              bg-[#F3613C]
              px-8
              py-3 mt-15 lg:mt-0
              text-white
              font-semibold
              shadow-lg block mx-auto
              transition
              hover:opacity-80
            "
          >
            Get Started
          </button>    
    </div>
  );
}

export default Avatar