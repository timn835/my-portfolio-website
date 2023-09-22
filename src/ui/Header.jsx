import { NavLink } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <div>
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
