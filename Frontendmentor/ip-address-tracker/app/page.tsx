"use client";

import Image from "next/image";
import { useState } from "react";

import bgMobile from "../public/images/pattern-bg-mobile.png";

import Info from "./components/Info";
import Search from "./components/Search";
import IPDetails from "./components/IPDetails";

import { type IPData } from "./types/ip";

export default function Home() {
  const [ipData, setIpData] = useState<IPData | null>(null);

  return (
    <main className="relative min-h-screen">
      <Image
        src={bgMobile}
        alt=""
        className="h-70 w-full object-cover"
      />

      <Info />

      <Search onSearch={setIpData} />

      <IPDetails data={ipData} />
    </main>
  );
}