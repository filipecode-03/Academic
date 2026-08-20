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
      <ul className="flex flex-col gap-6">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 uppercase tracking-[2px] ${
                  isActive
                    ? "text-white"
                    : "text-white/75"
                }`
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