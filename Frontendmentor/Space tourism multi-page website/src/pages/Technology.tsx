import { useParams } from "react-router-dom";

import PageBackground from "../components/PageBackground";
import TechnologyNavigation from "../components/TechnologyNavigation";

import { backgrounds } from "../config/backgrounds";
import { technologyImages } from "../config/technologyImages";

import data from "../assets/data.json";

function Technology() {
  const { technology } = useParams();

  const selectedTechnology = data.technology.find(
    (item) =>
      item.name.toLowerCase().replaceAll(" ", "-") ===
      technology
  );

  if (!selectedTechnology) {
    return <div>Technology not found</div>;
  }

  const images =
    technologyImages[
      selectedTechnology.name as keyof typeof technologyImages
    ];

  return (
    <PageBackground
      mobile={backgrounds.technology.mobile}
      tablet={backgrounds.technology.tablet}
      desktop={backgrounds.technology.desktop}
    >
      <div className="py-6 text-center text-white lg:text-left">

        <h2 className="font-['Barlow_Condensed'] text-[20px] tracking-[3px]">
          <span className="mr-5 font-semibold text-gray-500">
            03
          </span>

          SPACE LAUNCH 101
        </h2>

        <div className="mt-8 flex flex-col lg:flex-row">

          {/* IMAGEM */}
          <picture className="order-1 lg:order-2 lg:flex-1">
            <source
              media="(min-width: 1024px)"
              srcSet={images.portrait}
            />

            <img
              src={images.landscape}
              alt={selectedTechnology.name}
              className="w-full object-cover"
            />
          </picture>

          {/* CONTEÚDO */}
          <div className="order-2 mt-8 lg:order-1 lg:flex lg:flex-1 lg:items-center">

            {/* NAVEGAÇÃO */}
            <div>
              <TechnologyNavigation />
            </div>

            {/* TEXTO */}
            <div className="mt-8 lg:ml-12 lg:mt-0">

              <span className="font-['Bellefair'] text-[16px] uppercase text-gray-400">
                THE TERMINOLOGY...
              </span>

              <h1 className="mt-2 font-['Bellefair'] text-[36px] uppercase">
                {selectedTechnology.name}
              </h1>

              <p className="mt-6 font-['Barlow_Condensed'] text-[15px] leading-7 text-[#D0D6F9]">
                {selectedTechnology.description}
              </p>

            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}

export default Technology;