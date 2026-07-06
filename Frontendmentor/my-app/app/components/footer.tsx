import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faSquareFacebook,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#232027] py-16 px-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        
        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className="invert"
        />

        {/* Links */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div>
            <h2 className="font-semibold">Features</h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">
              <a className="hover:text-cyan-400" href="#">
                Link Shortening
              </a>

              <a className="hover:text-cyan-400" href="#">
                Branded Links
              </a>

              <a className="hover:text-cyan-400" href="#">
                Analytics
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Resources</h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">
              <a className="hover:text-cyan-400" href="#">
                Blog
              </a>

              <a className="hover:text-cyan-400" href="#">
                Developers
              </a>

              <a className="hover:text-cyan-400" href="#">
                Support
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Company</h2>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">
              <a className="hover:text-cyan-400" href="#">
                About
              </a>

              <a className="hover:text-cyan-400" href="#">
                Our Team
              </a>

              <a className="hover:text-cyan-400" href="#">
                Careers
              </a>

              <a className="hover:text-cyan-400" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="transition hover:text-cyan-400">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            <FontAwesomeIcon icon={faPinterest} />
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;