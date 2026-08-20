import { NavLink } from "react-router-dom";

import data from "../assets/data.json";

function CrewNavigation() {
  return (
    <nav>
      <ul className="flex justify-center gap-4">
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
                    h-3
                    w-3
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