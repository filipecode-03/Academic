import Nav from './components/Nav'
import BoostLin from "./components/BoostLink";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Nav />
      <BoostLin />
      <Footer />
    </div>
  );
}
