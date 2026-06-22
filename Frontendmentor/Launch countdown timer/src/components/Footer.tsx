import hills from "../assets/images/pattern-hills.svg";

import {
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative">
      <img
        src={hills}
        alt=""
        className="w-full"
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