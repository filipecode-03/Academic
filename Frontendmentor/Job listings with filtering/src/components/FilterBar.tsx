interface FilterBarProps {
  filters: string[];
  removeFilter: (tag: string) => void;
  clearFilters: () => void;
}

function FilterBar({
  filters,
  removeFilter,
  clearFilters,
}: FilterBarProps) {
  return (
    <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-md p-6 flex justify-between items-center">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <div key={filter} className="flex overflow-hidden rounded">
            <span className="bg-[#EEF6F6] px-3 py-2 font-bold text-[#5CA5A5]">
              {filter}
            </span>
            <button onClick={() => removeFilter(filter)} className="cursor-pointer bg-[#5CA5A5] text-white px-3 hover:bg-[#2C3A3A]">
              ✕
            </button>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className="font-bold cursor-pointer text-gray-500 hover:text-[#5CA5A5] hover:underline">
        Clear
      </button>
    </section>
  );
}

export default FilterBar;