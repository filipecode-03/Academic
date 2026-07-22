import logo from '../assets/images/Logo.png'
import bag from '../assets/images/Cart Button.png'
import { useState } from "react";

function Nav() {

    const [animation, setAnimation] = useState("");

    return (
        <nav className="flex py-3 px-6 items-center justify-between">
            <img
                src={logo}
                alt="logo"
                className={animation}
                onMouseEnter={() => setAnimation("spin-enter")}
                onMouseLeave={() => setAnimation("spin-leave")}
                onAnimationEnd={() => setAnimation("")}
            />           
            <img src={bag} alt="bag" />
        </nav>
    )
}

export default Nav