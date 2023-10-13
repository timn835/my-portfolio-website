import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <button className="mr-3 w-20" onClick={() => navigate("/home")}>
      <img className="rounded-full" src="/staircase_grey.png" />
    </button>
  );
}

export default Logo;
