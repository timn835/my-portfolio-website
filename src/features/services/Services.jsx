import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

function Services() {
  const { isDarkMode } = useDarkMode();
  const darkClasses =
    "mb-10 min-w-[20%] color-transition text-2xl hover:text-zinc-400";
  const lightClasses =
    "mb-10 min-w-[20%] color-transition text-2xl hover:hover:text-sky-600";
  const classes = isDarkMode ? darkClasses : lightClasses;
  return (
    <div className="flex min-h-full flex-col justify-around text-center">
      <div className="flex justify-around">
        <Link to="frontend" className={classes}>
          Front end design
        </Link>
        <Link to="backend" className={classes}>
          Back end setup
        </Link>
      </div>
      <div className="flex justify-around">
        <Link to="cms" className={classes}>
          CMS support
        </Link>
        <Link to="microservices" className={classes}>
          Evolving to microservices
        </Link>
      </div>
    </div>
  );
}

export default Services;
