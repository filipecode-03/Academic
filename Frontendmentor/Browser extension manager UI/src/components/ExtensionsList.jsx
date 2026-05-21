import { useState } from "react";
import data from "../../data.json";

function ExtensionsList() {
  const [extensions, setExtensions] = useState(data);

  const [filter, setFilter] = useState("all");

  // REMOVE EXTENSÃO
  function removeExtension(name) {
    const updatedExtensions = extensions.filter(
      (extension) => extension.name !== name
    );

    setExtensions(updatedExtensions);
  }

  // TOGGLE ACTIVE
  function toggleActive(name) {
    const updatedExtensions = extensions.map((extension) => {
      if (extension.name === name) {
        return {
          ...extension,
          isActive: !extension.isActive,
        };
      }

      return extension;
    });

    setExtensions(updatedExtensions);
  }

  // FILTRO
  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") return extension.isActive;

    if (filter === "inactive") return !extension.isActive;

    return true;
  });

  return (
    <section className="lg:max-w-280 lg:mx-auto">
      {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-5 lg:mt-12">
          <h2 className="font-bold text-neutral-900 text-[35px] text-center dark:text-white">Extensions List</h2>
          {/* FILTER BUTTONS */}
          <div className="flex justify-center mt-3 gap-5 text-[18px]">
            <button onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-full font-medium transition-all shadow-sm dark:shadow-none cursor-pointer duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E]
                ${
                  filter === "all"
                    ? "bg-[#C6231D] text-white dark:text-[#0A1541]"
                    : "bg-white hover:bg-[#F6FAFB] dark:bg-neutral-800 dark:border dark:border-neutral-600 text-black dark:text-white"
                }`}>
              All
            </button>
            <button onClick={() => setFilter("active")}
              className={`px-5 py-2 rounded-full font-medium transition-all shadow-sm dark:shadow-none cursor-pointer duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E]
                ${
                  filter === "active"
                    ? "bg-[#C6231D] text-white dark:text-[#0A1541]"
                    : "bg-white hover:bg-[#F6FAFB] dark:bg-neutral-800 dark:border dark:border-neutral-600 text-black dark:text-white"
                }
              `}>
              Active
            </button>
            <button onClick={() => setFilter("inactive")}
              className={`px-5 py-2 rounded-full font-medium transition-all shadow-sm dark:shadow-none cursor-pointer duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E]
                ${
                  filter === "inactive"
                    ? "bg-[#C6231D] text-white dark:text-[#0A1541]"
                    : "bg-white hover:bg-[#F6FAFB] dark:bg-neutral-800 dark:border dark:border-neutral-600 text-black dark:text-white"
                }
              `}
            >
              Inactive
            </button>
          </div>
        </div>
      {/* GRID */}
      <div className="grid gap-6 mt-10 lg:grid-cols-3">
        {filteredExtensions.map((extension) => (
          <article key={extension.name} className="bg-white flex flex-col justify-between dark:bg-neutral-800 dark:border dark:border-neutral-600 rounded-2xl p-5 shadow-sm dark:shadow-none transition-all duration-300">
            {/* TOP */}
            <div className="flex items-start gap-4">
              <img src={extension.logo} alt={extension.name}/>
              <div>
                <h3 className="font-bold text-[18px] text-neutral-900 dark:text-white">
                  {extension.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mt-1">
                  {extension.description}
                </p>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex items-center mt-8 justify-between">
              {/* REMOVE */}
              <button
                onClick={() => removeExtension(extension.name)}
                className="cursor-pointer px-4 py-2 dark:text-white rounded-full border border-neutral-300 dark:border-neutral-600 text-sm font-medium hover:bg-[#C6231D] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E]">
                Remove
              </button>
              {/* TOGGLE */}
              <button onClick={() => toggleActive(extension.name)}
                className={`relative w-14 h-7 cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6231D] focus:ring-offset-2 dark:focus:ring-offset-[#050A1E]
                  ${
                    extension.isActive
                      ? "bg-[#C6231D] hover:bg-[#DD4B3F]"
                      : "bg-[#525868]"
                  }
                `}>
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all duration-300
                    ${
                      extension.isActive
                        ? "translate-x-7"
                        : "translate-x-0"
                    }
                  `}/>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExtensionsList;