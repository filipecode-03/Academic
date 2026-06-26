import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="font-['Roboto']">
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;