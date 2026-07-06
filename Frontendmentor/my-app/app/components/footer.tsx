import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faSquareFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="bg-[#232027] p-8 text-white">
      <Image
        src={Logo}
        alt="Logo"
        className="dark:invert mx-auto"
      />
      <div className="text-center flex flex-col lg:flex-row gap-10">
        <div>
            <h2 className="font-semibold">Features</h2>
            <div className="flex flex-col gap-2 mt-4">
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
            </div>
        </div>
        <div>
            <h2 className="font-semibold">Features</h2>
            <div className="flex flex-col gap-2 mt-4">
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
            </div>
        </div>
        <div>
            <h2 className="font-semibold">Features</h2>
            <div className="flex flex-col gap-2 mt-4">
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
            </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-10">
  <a href="#" className="text-white hover:text-cyan-400 transition-colors">
    <FontAwesomeIcon icon={faSquareFacebook} className="text-3xl" />
  </a>

  <a href="#" className="text-white hover:text-cyan-400 transition-colors">
    <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
  </a>

  <a href="#" className="text-white hover:text-cyan-400 transition-colors">
    <FontAwesomeIcon icon={faPinterest} className="text-3xl" />
  </a>

  <a href="#" className="text-white hover:text-cyan-400 transition-colors">
    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
  </a>
</div>
    </footer>
  );
}

export default Footer;