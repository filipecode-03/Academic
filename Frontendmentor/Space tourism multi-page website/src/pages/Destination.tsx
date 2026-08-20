import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";

function Destination() {
  return (
    <PageBackground
      mobile={backgrounds.destination.mobile}
      tablet={backgrounds.destination.tablet}
      desktop={backgrounds.destination.desktop}
    >
      <div className="min-h-screen">
        <h1>Destination</h1>
      </div>
    </PageBackground>
  );
}

export default Destination;