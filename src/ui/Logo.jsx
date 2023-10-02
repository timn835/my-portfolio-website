import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const borderColor = isDarkMode ? "border-zinc-200" : "border-sky-800";
  return (
    <button
      className={`flex h-fit rounded-lg border-2 p-2 ${borderColor}`}
      onClick={() => navigate("/home")}
    >
      <div className="w-20">
        <img className="rounded-full" src="staircase_grey.png" />
      </div>
      <h1 className="my-auto pl-2 text-3xl sm:pl-3 md:pl-4 lg:pl-5">
        ASCWorks
      </h1>
    </button>
  );
}

export default Logo;
