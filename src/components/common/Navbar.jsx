import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import shopping from "../../assets/shopping-cart.png";
import Logout from "./Logout";

function Navbar({ cart = [] }) {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const activeClass = ({ isActive }) => (isActive ? "active-link" : "");

  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} className="logo" alt="wizarding shop logo" />
        </NavLink>
      </div>

      <div className="menu-container">
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={activeClass}>
          About
        </NavLink>

        <NavLink to="/favorites">Favorites ❤️</NavLink>

        {isAdmin && (
          <NavLink to="/admin" className={activeClass}>
            Admin
          </NavLink>
        )}

        {/* Login link if not logged in */}
        {!isLoggedIn && !isAdmin && (
          <NavLink to="/login" className={activeClass}>
            Login
          </NavLink>
        )}
        {!isAdmin && (
          <NavLink to="/cart" className="cart-link" aria-label="Go to cart">
            <img src={shopping} className="shopping-cart" alt="shopping cart" />
            {totalItems > 0 && (
              <span
                className="cart-badge"
                aria-label={`${totalItems} items in cart`}
              >
                {totalItems}
              </span>
            )}
          </NavLink>
        )}

        {isAdmin && <Logout />}
      </div>
    </div>
  );
}

export default Navbar;
