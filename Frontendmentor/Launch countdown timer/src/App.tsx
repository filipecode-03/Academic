import Header from "./components/Header";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

import stars from "./assets/images/bg-stars.svg";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1d1e28]">
      <img
        src={stars}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative min-h-screen">
        <Header />
        <Timer />
        <Footer />
      </div>
    </main>
  );
}

export default App;