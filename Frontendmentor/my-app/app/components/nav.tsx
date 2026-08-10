import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { Menu } from 'lucide-react';

function Nav() {
    return (
        <nav>
            <div className="flex items-center justify-between mx-auto max-w-6xl px-8 pt-8">
                <Image src={Logo} alt="Logo" className="" />
                <Menu />
            </div>
        </nav>
    )
}

export default Nav