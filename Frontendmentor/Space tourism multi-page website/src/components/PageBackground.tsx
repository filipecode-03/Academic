import type { ReactNode } from "react";

import Header from "./Header";

interface PageBackgroundProps {
  children: ReactNode;
  mobile: string;
  tablet: string;
  desktop: string;
}

function PageBackground({
  children,
  mobile,
  tablet,
  desktop,
}: PageBackgroundProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 1024px)" srcSet={desktop} />

        <source media="(min-width: 768px)" srcSet={tablet} />

        <img
          src={mobile}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>

      <Header />

      {children}
    </main>
  );
}

export default PageBackground;