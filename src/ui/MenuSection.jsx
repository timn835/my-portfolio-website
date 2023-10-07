import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function MenuSection({ title, link, close, children }) {
  const { isDarkMode } = useDarkMode();
  const darkLinkClasses = "rounded-lg p-1 text-2xl font-bold hover:bg-sky-700";
  const lightLinkClasses =
    "rounded-lg p-1 text-2xl font-bold hover:bg-zinc-300";
  return (
    <section>
      <Link to={link} onClick={close}>
        <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
          {title}
        </h1>
      </Link>
      {children}
    </section>
  );
}

export default MenuSection;
