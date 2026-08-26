import { useParams } from "react-router-dom";

import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";
import { crewImages } from "../config/crewImages";

import data from "../assets/data.json";

import CrewNavigation from "../components/CrewNavigation";

function Crew() {
  const { member } = useParams();

  const selectedMember = data.crew.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === member
  );

  if (!selectedMember) {
    return <div>Member not found</div>;
  }

  const image =
    crewImages[
      selectedMember.name as keyof typeof crewImages
    ];

  return (
    <PageBackground
      mobile={backgrounds.crew.mobile}
      tablet={backgrounds.crew.tablet}
      desktop={backgrounds.crew.desktop}
    >
      <div className="p-6 md:pb-0 md:p-10 lg:p-10 text-center lg:text-left lg:max-w-6xl lg:mx-auto text-white">
        <h2 className="font-['Barlow_Condensed'] text-[20px] lg:text-[28px] md:text-left tracking-[3px]">
          <span className="mr-5 font-semibold text-gray-500">
            02
          </span>
          MEET YOUR CREW
        </h2>
        <div className="flex flex-col lg:min-h-125 lg:flex-row lg:items-stretch">
          {/* IMAGEM */}
          <div className="order-2 mt-8 flex justify-center lg:order-2 lg:flex-1">
            <div className="relative">
              <img
                src={image}
                alt={selectedMember.name}
                className="h-85 w-67.75 md:w-105 md:h-115 lg:h-120 lg:w-100"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 block h-24 bg-linear-to-t from-[#0B0D17] via-[#0B0D17]/70 to-transparent md:hidden lg:block" />
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="order-1 flex flex-col lg:order-1 lg:flex-1">
            <p className="mt-12 lg:mt-30 font-['Bellefair'] text-[20px] uppercase text-gray-400 md:text-[24px]">
              {selectedMember.role}
            </p>

            <h1 className="font-['Bellefair'] text-[24px] uppercase md:text-[40px]">
              {selectedMember.name}
            </h1>

            <p className="mt-4 text-[18px] leading-7 tracking-[1px] text-[#D0D6F9] md:mx-auto md:max-w-lg lg:mx-0">
              {selectedMember.bio}
            </p>

            <div className="mt-8 lg:mt-auto">
              <CrewNavigation />
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}

export default Crew;