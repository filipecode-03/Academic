"use client";

import Image from "next/image";
import Certificados from "./components/Certificados";
import Cnpj from "./components/Cnpj";
import Contato from "./components/Contato";
import DuvidasAndSobre from "./components/DuvidasAndSobre";
import logo from "@/public/logo.jpg";
import Missao from "./components/Missao";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Logo */}
        <Image
          src={logo}
          alt="Roraima Mangas"
          className="mx-auto w-20 rounded-full lg:mx-0 lg:w-30"
        />

        {/* Conteúdo */}
        <div className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12 lg:mt-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          
          {/* Missão + Contato */}
          <div className="flex flex-col gap-8 lg:max-w-sm">
            <Missao />
            <Contato />
          </div>
          {/* Dúvidas + Sobre */}
          <DuvidasAndSobre />
          {/* Certificados */}
          <Certificados />
        </div>
      </div>

      {/* CNPJ */}
      <Cnpj />
    </footer>
  );
}