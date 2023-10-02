import { useEffect, useRef } from "react";

function Dropdown({ id, dropdownHeader, dropdownContent, openId, setOpenId }) {
  let menuRef = useRef();
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
        {dropdownHeader}
      </button>

      <div className={`dropdown-menu ${openId === id ? "active" : "inactive"}`}>
        <ul>
          {dropdownContent.map((content, idx) => (
            <DropdownItem key={idx} text={content} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function DropdownItem({ text }) {
  return (
    <li className="dropdownItem">
      <a> {text} </a>
    </li>
  );
}

export default Dropdown;
