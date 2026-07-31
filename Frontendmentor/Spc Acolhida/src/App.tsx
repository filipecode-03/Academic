import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import PageBanner from "./components/PageBanner";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="font-['Roboto']">
      <Navbar />
      <PageBanner />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;