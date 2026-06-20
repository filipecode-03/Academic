import Header from "./components/Header";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="min-h-screen bg-[#EFFAFA] font-['League_Spartan']">
      <Header />
      <main className="-mt-8 pb-12">
        <JobList />
      </main>
    </div>
  );
}

export default App;