import { NavLink } from "react-router-dom";

import data from "../assets/data.json";

function TechnologyNavigation() {
  return (
    <nav>
      <ul className="flex justify-center gap-4 lg:flex-col">
        {data.technology.map((technology, index) => {
          const slug = technology.name
            .toLowerCase()
            .replaceAll(" ", "-");

          return (
            <li key={technology.name}>
              <NavLink
                to={`/technology/${slug}`}
                className={({ isActive }) =>
                  `
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    font-['Bellefair']
                    text-[16px]
                    transition-all

                    ${
                      isActive
                        ? "border-white bg-white text-black"
                        : "border-white/25 text-white hover:border-white"
                    }
                  `
                }
              >
                {index + 1}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TechnologyNavigation;