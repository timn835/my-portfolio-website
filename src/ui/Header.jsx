import { useDarkMode } from "../context/DarkModeContext";
import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header() {
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "bg-sky-900" : "bg-zinc-300";
  return (
    <header
      className={`flex h-28 justify-between ${bgColor} px-2 py-4 sm:px-4 md:px-6 lg:px-8`}
    >
      <Logo />
      <HeaderLinks />
      <HeaderMenu />
    </header>
  );
}

export default Header;
