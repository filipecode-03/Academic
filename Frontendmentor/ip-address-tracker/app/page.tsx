import Image from "next/image";
import bgMobile from '../public/images/pattern-bg-mobile.png'
import Info from "./components/Info";

export default function Home() {
  return (
    <div className="relative">
      <Image src={bgMobile} alt="bg" className="w-full" />
      <Info />
    </div>
  );
}
