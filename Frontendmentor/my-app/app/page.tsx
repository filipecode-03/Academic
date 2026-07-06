import Nav from './components/Nav'
import BoostLin from "./components/BoostLink";
import Footer from "./components/Footer";
import Advanced from './components/Advanced';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Nav />
      <Advanced />
      <BoostLin />
      <Footer />
    </div>
  );
}
