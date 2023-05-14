import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>My Shop</div>
          <li>
            <NavLink to="/" className={(b) => (b.isActive ? "activeLink" : "")}>
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={(b) => (b.isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            {cart.length > 0 && <span>{cart.length}</span>}
          </li>

          <li>
            <NavLink
              to={userData ? "profile" : "/login"}
              className={(b) => (b.isActive ? "activeLink" : "")}
            >
              {userData ? "profile" : "login/signup"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
