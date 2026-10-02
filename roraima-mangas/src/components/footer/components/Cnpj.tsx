import Image from "next/image";
import { ArrowUp } from "lucide-react";

import master from "@/public/payment/mastercard@2x.png";
import visa from "@/public/payment/visa@2x.png";
import bradesco from "@/public/payment/bradesco@2x.png";
import amex from "@/public/payment/amex@2x.png";
import elo from "@/public/payment/elo@2x.png";
import hipercard from "@/public/payment/hipercard@2x.png";
import pix from "@/public/payment/pix@2x.png";

const paymentMethods = [
  { src: master, alt: "Mastercard" },
  { src: visa, alt: "Visa" },
  { src: bradesco, alt: "Bradesco" },
  { src: amex, alt: "American Express" },
  { src: elo, alt: "Elo" },
  { src: hipercard, alt: "Hipercard" },
  { src: pix, alt: "Pix" },
];

export default function Cnpj() {
  return (
    <div className="border-t border-yellow-400/60 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
        {/* Informações + pagamentos */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Copyright / CNPJ */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-neutral-400">
              &copy; Roraima Mangas
            </p>
          </div>

          {/* Formas de pagamento */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {paymentMethods.map((payment) => (
              <Image
                key={payment.alt}
                src={payment.src}
                alt={payment.alt}
                className="w-10 sm:w-[46px]"
              />
            ))}
          </div>
        </div>

        {/* Voltar ao topo */}
        <div className="mt-8 flex justify-center lg:mt-10">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Voltar ao topo"
            className="transition-transform duration-200 cursor-pointer hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5 text-yellow-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
