
import Cards from "./Cards";

function Avatar() {

  return (
    <div className="p-8">
      {/* MOBILE */}
      <div className="lg:hidden">
        <Cards />
      </div>
      {/* DESKTOP */}
      <div className="hidden lg:block">
        {/* Marquee do Kibo UI */}
      </div>
    </div>
  );
}

export default Avatar