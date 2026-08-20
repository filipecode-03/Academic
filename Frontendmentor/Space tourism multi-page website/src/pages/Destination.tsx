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
      <div className="p-6 text-center text-white lg:text-left">

        <h2 className="font-['Barlow_Condensed'] tracking-[3px] text-[20px]">
          <span className="mr-5 font-semibold text-gray-500">
            01
          </span>

          PICK YOUR DESTINATION
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="mt-6 py-6.5">
            <img
              src={image}
              alt={selectedDestination.name}
              className="w-38 mx-auto"
            />
          </div>
          <div>
            <DestinationNavigation />
            <h1 className="font-['Bellefair'] mt-6 text-[56px] uppercase">
              {selectedDestination.name}
            </h1>
            <p className="font-['Barlow_Condensed'] text-[#D0D6F9]">
              {selectedDestination.description}
            </p>
            <div className="border-t border-gray-600 flex flex-col gap-6 mt-6 pt-6">
              <div className="flex flex-col">
                <span className="text-[#D0D6F9] tracking-[2px] text-[14px]">
                  AVG. DISTANCE
                </span>
                <strong className="font-['Bellefair'] font-normal text-[28px] uppercase">
                  {selectedDestination.distance}
                </strong>
              </div>
              <div className="flex flex-col">
                <span className="text-[#D0D6F9] tracking-[2px] text-[14px]">
                  EST. TRAVEL TIME
                </span>
                <strong className="font-['Bellefair'] font-normal text-[28px] uppercase">
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