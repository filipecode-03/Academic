import { Link } from "react-router-dom";

import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";

function Home() {
  return (
    <PageBackground
      mobile={backgrounds.home.mobile}
      tablet={backgrounds.home.tablet}
      desktop={backgrounds.home.desktop}
    >
      <div className="p-6 text-center text-white">
        <h2 className="font-['Barlow_Condensed'] tracking-[3px] text-[#D0D6F9]">
          SO, YOU WANT TO TRAVEL TO
        </h2>

        <h1 className="font-['Bellefair'] text-[80px]">
          SPACE
        </h1>

        <p className="font-['Barlow_Condensed'] text-[15px] leading-7 text-[#D0D6F9]">
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!
        </p>

        <Link
          to="/destination"
          className="
            relative
            mt-30 mx-auto
            flex
            h-36
            w-36
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            text-[18px]
            font-['Bellefair']
            text-black

            before:absolute
            before:-inset-7.5
            before:rounded-full
            before:bg-white/20
            before:opacity-0
            before:scale-75
            before:transition-all
            before:duration-300

            hover:before:scale-120
            hover:before:opacity-100
          "
        >
          <span className="relative z-10">
            EXPLORE
          </span>
        </Link>
      </div>
    </PageBackground>
  );
}

export default Home;