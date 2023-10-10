import { useDarkMode } from "../context/DarkModeContext";
import { NavHashLink } from "react-router-hash-link";

function MenuSection({ title, link, close, children }) {
  const { isDarkMode } = useDarkMode();
  const darkLinkClasses = "rounded-lg p-1 text-2xl font-bold hover:bg-sky-700";
  const lightLinkClasses =
    "rounded-lg p-1 text-2xl font-bold hover:bg-zinc-300";
  return (
    <section>
      <NavHashLink smooth to={`${link}#start`} onClick={close}>
        <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
          {title}
        </h1>
      </NavHashLink>
      {children}
    </section>
  );
}

export default MenuSection;
