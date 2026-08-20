import { NavLink } from "react-router-dom";

interface NavigationProps {
  onNavigate?: () => void;
}

const navigationItems = [
  {
    number: "00",
    label: "Home",
    path: "/",
    end: true,
  },
  {
    number: "01",
    label: "Destination",
    path: "/destination",
  },
  {
    number: "02",
    label: "Crew",
    path: "/crew",
  },
  {
    number: "03",
    label: "Technology",
    path: "/technology",
  },
];

function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav>
      <ul className="flex flex-col md:justify-end gap-6 md:flex-row md:gap-8 lg:gap-10">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `
                  relative
                  flex
                  items-center
                  gap-3
                  py-4
                  font-['Barlow_Condensed']
                  uppercase
                  tracking-[2px]
                  transition-colors

                  md:py-8

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-0.75
                  after:w-full
                  after:bg-white
                  after:transition-transform
                  after:duration-300

                  ${
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-white/75 after:scale-x-0"
                  }
                `
              }
            >
              <span className="font-bold">
                {item.number}
              </span>

              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;