import google from "@/public/google-safe-color.png";
import Image from "next/image";

export default function Certificados() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold uppercase">Certificados</h2>
      <div className="mt-4">
        <Image src={google} alt="google" className="w-50" loading="eager" />
      </div>
    </div>
  );
}
