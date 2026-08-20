import { NavLink } from "react-router-dom";

import data from "../assets/data.json";

function DestinationNavigation() {
  return (
    <nav>
      <ul className="flex justify-center gap-6">
        {data.destinations.map((destination) => {
          const slug = destination.name.toLowerCase();

          return (
            <li key={destination.name}>
              <NavLink
                to={`/destination/${slug}`}
                className={({ isActive }) =>
                  `
                    relative
                    font-['Barlow_Condensed']
                    uppercase
                    tracking-[2px]
                    transition-colors

                    after:absolute
                    after:-bottom-3
                    after:left-0
                    after:h-0.75
                    after:w-full
                    after:bg-white
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? "text-white after:opacity-100"
                        : "text-[#D0D6F9] after:opacity-0"
                    }
                  `
                }
              >
                {destination.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DestinationNavigation;