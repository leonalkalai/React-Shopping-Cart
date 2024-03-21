import "./Header.css";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

export default function Header() {
  return (
    <header>
      <Logo />
      <NavMenu />
      <HamburgerMenu />
    </header>
  );
}
