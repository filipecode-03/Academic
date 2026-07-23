import logo from '../assets/images/Logo.png'
import bag from '../assets/images/Cart Button.png'
import { useState } from "react";

function Nav() {

    const [animation, setAnimation] = useState("");

    return (
        <nav className="flex py-3 px-6 lg:px-8 items-center justify-between">
            <img
                src={logo}
                alt="logo"
                className={animation}
                onMouseEnter={() => setAnimation("spin-enter")}
                onMouseLeave={() => setAnimation("spin-leave")}
                onAnimationEnd={() => setAnimation("")}
            />           
            <img
  src={bag}
  alt="bag"
  className="origin-bottom transition-transform duration-300 ease-in-out hover:-rotate-14"
/>
        </nav>
    )
}

export default Nav