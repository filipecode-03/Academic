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
      <div className="p-6 text-center text-white">
        <h2 className="font-['Barlow_Condensed'] text-[20px] tracking-[3px]">
          <span className="mr-5 font-semibold text-gray-500">
            02
          </span>
          MEET YOUR CREW
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* IMAGEM DO MEMBRO */}
          <div className="order-2 mt-8 flex justify-center lg:order-2 lg:flex-1">
            <img
              src={image}
              alt={selectedMember.name}
              className="max-h-100 w-auto"
            />
          </div>
          {/* CONTEÚDO */}
          <div className="order-1 lg:order-1 lg:flex-1">
            <p className="mt-12 font-['Bellefair'] text-[20px] uppercase text-gray-400">
              {selectedMember.role}
            </p>
            <h1 className="mt-2 font-['Bellefair'] text-[36px] uppercase">
              {selectedMember.name}
            </h1>
            <p className="mt-6 font-['Barlow_Condensed'] text-[15px] leading-7 text-[#D0D6F9]">
              {selectedMember.bio}
            </p>
            <div className="mt-8">
                <CrewNavigation />
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}

export default Crew;