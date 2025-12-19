import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import shopping from "../../assets/shopping-cart.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="wizarding shop logo" />
      </div>

      <div className="menu-container">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <img src={shopping} className="shopping-cart" alt="shopping cart" />
      </div>
    </div>
  );
}
export default Navbar;
