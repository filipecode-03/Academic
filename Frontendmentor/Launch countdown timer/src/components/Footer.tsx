import hills from "../assets/images/pattern-hills.svg";

import {
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full">
      <img
        src={hills}
        alt=""
        className="md:w-full md:h-40 h-48"
      />
      <div
        className="
        absolute
        bottom-12
        left-1/2
        -translate-x-1/2
        flex
        gap-8
      "
      >
        <FaFacebookSquare
          size={28}
          className="text-[#8486A9] hover:text-[#FB6087] cursor-pointer"
        />
        <FaPinterest
          size={28}
          className="text-[#8486A9] hover:text-[#FB6087] cursor-pointer"
        />
        <FaInstagram
          size={28}
          className="text-[#8486A9] hover:text-[#FB6087] cursor-pointer"
        />
      </div>
    </footer>
  );
}

export default Footer;