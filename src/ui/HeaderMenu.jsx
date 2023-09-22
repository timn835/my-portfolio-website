import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function HeaderMenu() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ul>
      <li>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </button>
      </li>
    </ul>
  );
}

export default HeaderMenu;
