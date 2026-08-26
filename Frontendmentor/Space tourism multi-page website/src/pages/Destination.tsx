import { useParams } from "react-router-dom";

import PageBackground from "../components/PageBackground";
import DestinationNavigation from "../components/DestinationNavigation";

import { backgrounds } from "../config/backgrounds";
import { destinationImages } from "../config/destinationImages";

import data from "../assets/data.json";

function Destination() {
  const { destination } = useParams();

  const selectedDestination = data.destinations.find(
    (item) => item.name.toLowerCase() === destination
  );

  if (!selectedDestination) {
    return <div>Destination not found</div>;
  }

  const image =
    destinationImages[
      selectedDestination.name as keyof typeof destinationImages
    ];

  return (
    <PageBackground
      mobile={backgrounds.destination.mobile}
      tablet={backgrounds.destination.tablet}
      desktop={backgrounds.destination.desktop}
    >
      <div className="p-6 md:p-10 text-center text-white lg:mx-auto lg:max-w-6xl lg:text-left">
        <h2 className="font-['Barlow_Condensed'] text-[20px] tracking-[3px] md:text-left lg:text-[28px]">
          <span className="mr-5 font-semibold text-gray-500">
            01
          </span>

          PICK YOUR DESTINATION
        </h2>

        <div className="flex flex-col gap-8 md:gap-14 lg:flex-row lg:items-center lg:gap-18">
          {/* Imagem */}
          <div className="mt-6 flex justify-center py-6 lg:w-1/2">
            <img
              src={image}
              alt={selectedDestination.name}
              className="w-38 object-contain md:w-75 lg:w-120"
            />
          </div>

          {/* Informações */}
          <div className="lg:w-1/2">
            <DestinationNavigation />

            <h3 className="mt-6 font-['Bellefair'] text-[56px] uppercase md:text-[80px] lg:text-[96px]">
              {selectedDestination.name}
            </h3>

            <p className="mx-auto max-w-135 font-['Barlow_Condensed'] text-[18px] leading-8 tracking-[1px] text-[#D0D6F9] lg:mx-0 lg:max-w-120">
              {selectedDestination.description}
            </p>

            <div className="mt-6 flex flex-col gap-6 border-t border-gray-600 pt-6 md:mx-auto md:max-w-135 md:flex-row md:items-center md:justify-center lg:mx-0 lg:max-w-none lg:justify-start lg:gap-20">
              <div className="flex flex-col">
                <span className="text-[14px] tracking-[2px] text-[#D0D6F9]">
                  AVG. DISTANCE
                </span>

                <strong className="font-['Bellefair'] text-[28px] font-normal uppercase">
                  {selectedDestination.distance}
                </strong>
              </div>

              <div className="flex flex-col">
                <span className="text-[14px] tracking-[2px] text-[#D0D6F9]">
                  EST. TRAVEL TIME
                </span>

                <strong className="font-['Bellefair'] text-[28px] font-normal uppercase">
                  {selectedDestination.travel}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}

export default Destination;