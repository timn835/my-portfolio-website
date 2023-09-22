import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-zinc-200">
      <div>Logo</div>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
