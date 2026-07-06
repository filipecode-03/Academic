import Nav from './components/nav'
import Boost from "./components/boost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Nav />
      <Boost />
      <Footer />
    </div>
  );
}
