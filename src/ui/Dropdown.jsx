import { useEffect, useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Dropdown({ id, openId, setOpenId, children }) {
  const menuRef = useRef();
  const { isDarkMode } = useDarkMode();
  const darkChildrenClasses =
    "dropdown-menu absolute rounded-lg p-2 bg-sky-950";
  const lightChildrenClasses =
    "dropdown-menu absolute rounded-lg p-2 bg-zinc-50";
  const darkTriggerClasses = `dropdown-trigger transition delay-150 ease-in-out hover:text-zinc-400 focus:text-zinc-400${
    openId === id ? " text-zinc-400" : ""
  }`;
  const lightTriggerClasses = `dropdown-trigger transition delay-150 ease-in-out hover:text-sky-600 focus:text-sky-600${
    openId === id ? " text-sky-600" : ""
  }`;
  const childrenClasses = isDarkMode
    ? darkChildrenClasses
    : lightChildrenClasses;
  const triggerClasses = isDarkMode ? darkTriggerClasses : lightTriggerClasses;

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current.contains(e.target)) {
        if (id !== openId) setOpenId(null);
      } else {
        if (id === openId) setOpenId(null);
      }
    };

    document.addEventListener("mousedown", handler, true);

    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  }, [setOpenId, id, openId]);

  return (
    <div className="dropdown relative px-3" ref={menuRef}>
      <button
        className={triggerClasses}
        onClick={() => {
          setOpenId((openId) => (openId === id ? null : id));
        }}
      >
        {id}
      </button>

      <div
        className={`${childrenClasses} ${
          openId === id ? "active" : "inactive"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
