import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function HeaderMenu() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ul className="my-auto">
      <li>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>
      </li>
    </ul>
  );
}

export default HeaderMenu;
