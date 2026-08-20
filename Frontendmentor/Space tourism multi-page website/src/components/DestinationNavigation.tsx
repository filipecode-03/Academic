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
                    font-['Barlow_Condensed']
                    uppercase
                    tracking-[2px]
                    transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#D0D6F9]"
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