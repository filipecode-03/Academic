import { useTheme } from "../../hooks/useTheme";

import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";

import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../../assets/images/bg-mobile-light.jpg";

export function HeroBackground() {
  const { theme } = useTheme();

  return (
    <picture>
      <source
        media="(min-width:768px)"
        srcSet={
          theme === "dark"
            ? bgDesktopDark
            : bgDesktopLight
        }
      />
      <img
        src={
          theme === "dark"
            ? bgMobileDark
            : bgMobileLight
        }
        alt=""
        className="
          w-full
          transition-opacity
          duration-500
        "
      />
    </picture>
  );
}