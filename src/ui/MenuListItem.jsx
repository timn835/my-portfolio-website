import { HashLink } from "react-router-hash-link";
import { useDarkMode } from "../context/DarkModeContext";

function MenuListItem({ link, close, children }) {
  const { isDarkMode } = useDarkMode();
  const darkHashLinkClasses = "flex rounded-lg p-2 hover:bg-sky-700";
  const lightHashLinkClasses = "flex rounded-lg p-2 hover:bg-zinc-300";

  return (
    <li>
      <HashLink
        smooth
        to={link}
        onClick={close}
        className={isDarkMode ? darkHashLinkClasses : lightHashLinkClasses}
      >
        {children}
      </HashLink>
    </li>
  );
}

export default MenuListItem;
