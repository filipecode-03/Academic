import Image from "next/image";
import Brand from "@/public/images/icon-brand-recognition.svg";
import Detailed from "@/public/images/icon-detailed-records.svg";
import Fully from "@/public/images/icon-fully-customizable.svg";

function Advanced() {
  return (
    <section className="bg-[#EFF1F7] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-[#232127] md:text-4xl">
            Advanced Statistics
          </h2>

          <p className="mt-4 leading-7 text-[#9E9AA7]">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-24 flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:gap-8">
          {/* Linha */}
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-[#2BD0D0] lg:left-0 lg:top-1/2 lg:h-2 lg:w-full lg:-translate-y-1/2 lg:translate-x-0" />

          {/* Card 1 */}
          <div className="relative z-10 rounded-lg bg-white px-8 pb-10 pt-16 text-center shadow-lg lg:text-left">
            <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#3A3053] lg:left-8 lg:translate-x-0">
              <Image src={Brand} alt="Brand Recognition" />
            </div>

            <h3 className="text-xl font-bold text-[#232127]">
              Brand Recognition
            </h3>

            <p className="mt-4 leading-7 text-[#9E9AA7]">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative z-10 rounded-lg bg-white px-8 pb-10 pt-16 text-center shadow-lg lg:mt-10 lg:text-left">
            <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#3A3053] lg:left-8 lg:translate-x-0">
              <Image src={Detailed} alt="Detailed Records" />
            </div>

            <h3 className="text-xl font-bold text-[#232127]">
              Detailed Records
            </h3>

            <p className="mt-4 leading-7 text-[#9E9AA7]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative z-10 rounded-lg bg-white px-8 pb-10 pt-16 text-center shadow-lg lg:mt-20 lg:text-left">
            <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#3A3053] lg:left-8 lg:translate-x-0">
              <Image src={Fully} alt="Fully Customizable" />
            </div>

            <h3 className="text-xl font-bold text-[#232127]">
              Fully Customizable
            </h3>

            <p className="mt-4 leading-7 text-[#9E9AA7]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advanced;