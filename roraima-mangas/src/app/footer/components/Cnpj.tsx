import Image from "next/image"

import master from '@/public/payment/mastercard@2x.png'
import visa from '@/public/payment/visa@2x.png'
import bradesco from '@/public/payment/bradesco@2x.png'
import amex from "@/public/payment/amex@2x.png"
import elo from '@/public/payment/elo@2x.png'
import hipercard from '@/public/payment/hipercard@2x.png'
import pix from '@/public/payment/pix@2x.png'

import { ArrowUp } from 'lucide-react';

export default function Cnpj() {
    return (
        <div className="border-t border-amber-400">
            <div className="p-8 pt-5">
                <p className="text-gray-400 text-[14px]">&copy; Roraima Mangas</p>
                <p className="text-[14px]">CNPJ - </p>
                <div className="flex items-center justify-center gap-4 mt-5">
                    <Image src={master} alt="master" className="w-[46px]" />
                    <Image src={visa} alt="visa" className="w-[46px]" />
                    <Image src={bradesco} alt="bradesco" className="w-[46px]" />
                    <Image src={amex} alt="amex" className="w-[46px]" />
                    <Image src={elo} alt="elo" className="w-[46px]" />
                    <Image src={hipercard} alt="hipercard" className="w-[46px]" />
                    <Image src={pix} alt="pix" className="w-[46px]" />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Voltar ao topo"
                        className="mt-10"
                    >
                        <ArrowUp className="text-amber-400" />
                    </button>
                </div>
            </div>
        </div>
    )
}