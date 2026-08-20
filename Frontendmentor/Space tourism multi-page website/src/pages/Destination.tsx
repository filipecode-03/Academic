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

        <h2 className="font-['Barlow_Condensed'] text-[20px]">
          <span className="mr-5 font-semibold text-gray-500">
            01
          </span>

          PICK YOUR DESTINATION
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center">

          <div>
            <img
              src={image}
              alt={selectedDestination.name}
            />
          </div>

          <div>
            <DestinationNavigation />

            <h1 className="font-['Bellefair'] text-[56px] uppercase">
              {selectedDestination.name}
            </h1>

            <p className="font-['Barlow_Condensed'] text-[#D0D6F9]">
              {selectedDestination.description}
            </p>

            <div>
              <span>
                AVG. DISTANCE
              </span>

              <strong>
                {selectedDestination.distance}
              </strong>

              <span>
                EST. TRAVEL TIME
              </span>

              <strong>
                {selectedDestination.travel}
              </strong>
            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}

export default Destination;