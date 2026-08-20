import PageBackground from "../components/PageBackground";
import { backgrounds } from "../config/backgrounds";

function Home() {
  return (
    <PageBackground
      mobile={backgrounds.home.mobile}
      tablet={backgrounds.home.tablet}
      desktop={backgrounds.home.desktop}
    >
      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
    </PageBackground>
  );
}

export default Home;