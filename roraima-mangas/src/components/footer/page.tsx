"use client";

import Image from "next/image";
import Certificados from "./components/Certificados";
import Contato from "./components/Contato";
import Cnpj from "./components/Cnpj";
import logo from "@/public/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-12">
        <Image src={logo} alt="Roraima Mangas" className="w-20 rounded-full lg:w-24" />
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start lg:gap-16">
          <Contato />
          <Certificados />
        </div>
      </div>

      {/* CNPJ */}
      <Cnpj />
    </footer>
  );
}
