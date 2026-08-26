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
      <div className="py-6 text-center text-white md:py-10 lg:ml-auto lg:max-w-335 lg:text-left">
        {/* TÍTULO */}
        <h2 className="font-['Barlow_Condensed'] text-[20px] lg:text-[28px] tracking-[3px] md:px-10 md:text-left lg:px-0">
          <span className="mr-5 font-semibold text-gray-500">
            03
          </span>

          SPACE LAUNCH 101
        </h2>

        <div className="mt-10 flex flex-col md:mt-16 lg:mt-20 lg:flex-row lg:items-center">
          {/* IMAGEM */}
          <picture className="order-1 block lg:order-2 lg:w-1/2">
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
          <div className="order-2 mt-8 flex flex-col md:mt-10 lg:order-1 lg:w-1/2 lg:flex-row lg:items-center lg:gap-12 lg:pr-12">
            {/* NAVEGAÇÃO */}
            <div className="shrink-0">
              <TechnologyNavigation />
            </div>

            {/* TEXTO */}
            <div className="mt-8 lg:mt-0">
              <span className="font-['Bellefair'] text-[16px] uppercase text-gray-400 md:text-[24px]">
                THE TERMINOLOGY...
              </span>

              <h1 className="mt-2 font-['Bellefair'] text-[36px] uppercase md:text-[40px] lg:text-[56px]">
                {selectedTechnology.name}
              </h1>

              <p className="mx-auto mt-4 px-6 font-['Barlow_Condensed'] text-[16px] leading-7 text-[#D0D6F9] md:max-w-lg md:text-[18px] lg:mx-0 lg:max-w-[500px] lg:px-0">
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