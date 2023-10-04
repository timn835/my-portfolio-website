import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const borderColor = isDarkMode ? "border-zinc-200" : "border-sky-800";
  return (
    <button className="mr-3 w-20" onClick={() => navigate("/home")}>
      <img className="rounded-full" src="staircase_grey.png" />
    </button>
  );
}

export default Logo;
