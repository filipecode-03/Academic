import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="font-[League_Spartan]">
      <main>
        <Header />
        <Hero
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <About />
      </main>
    </div>
  );
}

export default App;