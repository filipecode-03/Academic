import { Navbar } from "./components/Navbar";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="font-['Roboto']">
      <Navbar />
      <main className="p-4">
        <Router />
      </main>
    </div>
  );
}

export default App;