import Nav from "./Nav";
import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <Nav />
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;