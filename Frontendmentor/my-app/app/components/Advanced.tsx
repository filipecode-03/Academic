import Image from "next/image";
import Brand from "@/public/images/icon-brand-recognition.svg";

function Advanced() {
    return (
        <div className="bg-[#F0F1F6] text-black">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
            <div className="bg-white">
                <div className="bg-[#3A3053] p-5 w-fit rounded-full">
                    <Image src={Brand} alt="Logo" className="" />
                </div>
                <h2></h2>
            </div>
        </div>
    )
}

export default Advanced