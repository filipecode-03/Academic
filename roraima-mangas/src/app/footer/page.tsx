"use client";

import Certificados from "./components/Certificados";
import Cnpj from "./components/Cnpj";
import DuvidasAndSobre from "./components/DuvidasAndSobre";

export default function Footer() {
    return (
      <div className="bg-black text-white">
        <div className="p-8">
          <DuvidasAndSobre />
          <Certificados />
        </div>
        <Cnpj />
      </div>
    );
  }
  