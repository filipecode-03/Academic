import Image from "next/image";
import Working from "@/public/images/illustration-working.svg";
import Get from "./Get";

function Intro() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-6 lg:flex-row lg:justify-between">
        
        {/* Texto */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[#232127] md:text-5xl lg:text-7xl">
            More than just shorter links
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#9E9AA7]">
            Build your brand’s recognition and get detailed insights on how
            your links are performing.
          </p>

          <div className="mt-8">
            <Get />
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center lg:w-1/2 lg:justify-end">
          <Image
            src={Working}
            alt="Person working with links"
            priority
            className="w-[140%] max-w-none lg:w-[180%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;