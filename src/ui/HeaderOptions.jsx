import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { useDarkMode } from "../context/DarkModeContext";

function HeaderOptions() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ul className="my-auto">
      <li>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <HiOutlineSun size={30} />
          ) : (
            <HiOutlineMoon size={30} />
          )}
        </button>
      </li>
    </ul>
  );
}

export default HeaderOptions;
