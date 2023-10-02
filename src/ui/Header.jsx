import { useDarkMode } from "../context/DarkModeContext";
import HeaderDropdowns from "./HeaderDropdowns";
import HeaderMenu from "./HeaderOptions";
import Logo from "./Logo";

function Header() {
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "bg-sky-900" : "bg-zinc-300";
  return (
    <header
      className={`relative flex h-32 justify-between ${bgColor} px-2 py-4 sm:px-4 md:px-6 lg:px-8`}
    >
      <Logo />
      <HeaderDropdowns />
      <HeaderMenu />
    </header>
  );
}

export default Header;
