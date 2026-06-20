import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

function App() {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (tag: string) => {
    if (filters.includes(tag)) return;

    setFilters((prev) => [...prev, tag]);
  };

  const removeFilter = (tag: string) => {
    setFilters((prev) => prev.filter((item) => item !== tag));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="min-h-screen bg-[#EFFAFA] font-['League_Spartan']">
      <Header />

      <main className="-mt-8 px-6 pb-12">
        {filters.length > 0 && (
          <FilterBar
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        )}

        <JobList
          filters={filters}
          addFilter={addFilter}
        />
      </main>
    </div>
  );
}

export default App;