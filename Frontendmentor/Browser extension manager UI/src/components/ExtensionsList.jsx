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
    <section className="">
      {/* HEADER */}
        <h2 className="font-bold text-neutral-900 dark:text-white">Extensions List</h2>
        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3">
          <button onClick={() => setFilter("all")} 
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                filter === "all"
                  ? "bg-[#C6231D] text-white"
                  : "bg-white dark:bg-neutral-800 text-black dark:text-white"
              }`}>
            All
          </button>
          <button onClick={() => setFilter("active")}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                filter === "active"
                  ? "bg-[#C6231D] text-white"
                  : "bg-white dark:bg-neutral-800 text-black dark:text-white"
              }
            `}>
            Active
          </button>
          <button onClick={() => setFilter("inactive")}
            className={`
              px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                filter === "inactive"
                  ? "bg-[#C6231D] text-white"
                  : "bg-white dark:bg-neutral-800 text-black dark:text-white"
              }
            `}
          >
            Inactive
          </button>
        </div>
      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((extension) => (
          <article
            key={extension.name}
            className="
              bg-white dark:bg-neutral-800
              rounded-2xl
              p-5
              shadow-md
              flex flex-col justify-between
              transition-all duration-300
            "
          >
            {/* TOP */}
            <div className="flex gap-4 mb-6">
              
              <img
                src={extension.logo}
                alt={extension.name}
                className="w-14 h-14"
              />

              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {extension.name}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  {extension.description}
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="flex items-center justify-between">
              
              {/* REMOVE */}
              <button
                onClick={() => removeExtension(extension.name)}
                className="
                  px-4 py-2 rounded-full border
                  border-neutral-300 dark:border-neutral-600
                  text-sm font-medium
                  hover:bg-red-500 hover:text-white
                  transition-all duration-300
                "
              >
                Remove
              </button>

              {/* TOGGLE */}
              <button
                onClick={() => toggleActive(extension.name)}
                className={`
                  relative w-14 h-7 rounded-full transition-all duration-300
                  ${
                    extension.isActive
                      ? "bg-orange-500"
                      : "bg-neutral-400"
                  }
                `}
              >
                <span
                  className={`
                    absolute top-1 left-1
                    w-5 h-5 rounded-full bg-white
                    transition-all duration-300
                    ${
                      extension.isActive
                        ? "translate-x-7"
                        : "translate-x-0"
                    }
                  `}
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExtensionsList;