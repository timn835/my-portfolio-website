import { useEffect, useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Dropdown({ id, openId, setOpenId, children }) {
  const menuRef = useRef();
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "bg-sky-950" : "bg-zinc-50";

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
        className="dropdown-trigger"
        onClick={() => {
          setOpenId((openId) => (openId === id ? null : id));
        }}
      >
        {id}
      </button>

      <div
        className={`dropdown-menu absolute ${
          openId === id ? "active" : "inactive"
        } ${bgColor}`}
      >
        {children}
        {/* Active */}
        {/* <div className="bg-red absolute translate-y-0 opacity-100"></div> */}

        {/* Inactive */}
        {/* <div className="bg-red invisible absolute translate-y-6 opacity-0 transition delay-500 ease-in-out">
        {children} */}
      </div>
    </div>
  );
}

export default Dropdown;
