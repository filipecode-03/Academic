import { NavLink } from "react-router-dom";

import data from "../assets/data.json";

function CrewNavigation() {
  return (
    <nav>
      <ul className="flex justify-center lg:justify-start gap-4 lg:gap-8">
        {data.crew.map((member) => {
          const slug = member.name
            .toLowerCase()
            .replaceAll(" ", "-");

          return (
            <li key={member.name}>
              <NavLink
                to={`/crew/${slug}`}
                aria-label={member.name}
                className={({ isActive }) =>
                  `
                    block
                    h-3 lg:h-4
                    w-3 lg:w-4
                    rounded-full
                    transition-all
                    ${
                      isActive
                        ? "bg-white"
                        : "bg-white/25"
                    }
                  `
                }
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CrewNavigation;