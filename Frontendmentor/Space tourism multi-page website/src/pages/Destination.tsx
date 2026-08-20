import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";

function Destination() {
  return (
    <PageBackground
      mobile={backgrounds.destination.mobile}
      tablet={backgrounds.destination.tablet}
      desktop={backgrounds.destination.desktop}
    >
      <div className="text-center lg:text-left text-white p-6">
        <h2 className="font-['Barlow_Condensed'] text-[20px]"><span className="text-gray-500 font-semibold mr-5">01</span>PICK YOUR DESTINATION</h2>
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* a imagens dos planetas */}
          <div>
          {/* os links e o conteudo vindos do data.json */}
          </div>
        </div>
      </div>
    </PageBackground>
  );
}

export default Destination;