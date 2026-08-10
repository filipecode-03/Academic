import Nav from "./components/Nav";
import BoostLin from "./components/BoostLink";
import Footer from "./components/Footer";
import ShortenSection from "./components/ShortenSection";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <Intro />
      <ShortenSection />
      <BoostLin />
      <Footer />
    </div>
  );
}