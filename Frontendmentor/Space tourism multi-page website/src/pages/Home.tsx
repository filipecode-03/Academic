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
      <div
        className="
          flex
          min-h-[calc(100vh-88px)]
          flex-col
          items-center
          justify-center
          px-6
          text-center
          text-white

          md:min-h-[calc(100vh-96px)]
          md:justify-between
          md:px-10
          md:pt-24
          md:pb-16

          lg:grid
          lg:min-h-[calc(100vh-96px)]
          lg:grid-cols-2
          lg:items-end
          lg:justify-items-center
          lg:px-20
          lg:pt-0
          lg:pb-20
          lg:text-left
        "
      >
        {/* CONTEÚDO */}
        <div
          className="
            max-w-md
            md:max-w-xl
            lg:max-w-lg
          "
        >
          <h2
            className="
              font-['Barlow_Condensed']
              text-[16px]
              tracking-[3px]
              text-[#D0D6F9]

              md:text-[28px]

              lg:text-[28px]
            "
          >
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1
            className="
              mt-2
              font-['Bellefair']
              text-[80px]
              leading-none

              md:text-[144px]

              lg:text-[144px]
            "
          >
            SPACE
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-85
              font-['Barlow_Condensed']
              text-[15px]
              leading-7
              text-[#D0D6F9]

              md:max-w-111.25
              md:text-[16px]

              lg:mx-0
              lg:max-w-135
            "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </div>

        {/* BOTÃO */}
        <Link
          to="/destination"
          className="
            relative
            mt-16
            flex
            h-36
            w-36
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            font-['Bellefair']
            text-[18px]
            text-black

            before:absolute
            before:-inset-7
            before:rounded-full
            before:bg-white/15
            before:opacity-0
            before:scale-75
            before:transition-all
            before:duration-300

            hover:before:scale-100
            hover:before:opacity-100

            md:mt-16
            md:h-68
            md:w-68
            md:text-[32px]

            lg:mt-0
            lg:h-68
            lg:w-68
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