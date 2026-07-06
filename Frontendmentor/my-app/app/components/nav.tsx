import Image from "next/image";
import Logo from "@/public/images/logo.svg";

function Nav() {
    return (
        <nav>
            <Image src={Logo} alt="Logo" className="" />
            
        </nav>
    )
}

export default Nav