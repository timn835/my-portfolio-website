import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const navLinks = ["home", "projects", "skills", "contact"];

function HeaderLinks() {
  const { isDarkMode } = useDarkMode();
  const divideColor = isDarkMode ? "divide-zinc-200" : "divide-sky-800";
  return (
    <nav className={`my-auto flex divide-x ${divideColor}`}>
      {navLinks.map((link) => (
        <NavLink
          to={link}
          className="header-link border-zinc-200 px-3 sm:px-5 md:px-8 lg:px-10"
          key={link}
        >
          {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
        </NavLink>
      ))}
    </nav>
  );
}

export default HeaderLinks;
