import { useNavigate, Link } from "react-router-dom";
import logout from "../../assets/logout.png";

function Logout() {
  const nav = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    nav("/");
  }

  return (
    <Link onClick={handleLogout}>
      <img src={logout} alt="logout" className="logout-icon" />
    </Link>
  );
}

export default Logout;
