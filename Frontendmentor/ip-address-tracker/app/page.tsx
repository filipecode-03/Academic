"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import bgMobile from "../public/images/pattern-bg-mobile.png";
import bgDesktop from "../public/images/pattern-bg-desktop.png";

import Info from "./components/Info";
import Search from "./components/Search";
import IPDetails from "./components/IPDetails";

import { type IPData } from "./types/ip";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function Home() {
  const [ipData, setIpData] = useState<IPData | null>(null);

  return (
    <main className="relative min-h-screen">
      <section className="relative h-70">
        <Image
          src={bgMobile}
          alt=""
          fill
          priority
          className="object-cover md:hidden"
        />

        <Image
          src={bgDesktop}
          alt=""
          fill
          priority
          className="hidden object-cover md:block"
        />

        <Info />
        <Search onSearch={setIpData} />
      </section>

      <IPDetails data={ipData} />

      {ipData && (
        <Map
          latitude={ipData.location.lat}
          longitude={ipData.location.lng}
        />
      )}
    </main>
  );
}
