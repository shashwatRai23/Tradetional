import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import originalLogo from "../../../Images/originalLogo.png";
import { useSelector } from "react-redux";
import UserOptions from "../Header/UserOptions";
import store from "../../../store";
import { loadUser } from "../../../actions/userAction";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <React.Fragment>
      {/* {isNavbarActive &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.querySelector("#backdrop-root")
        )}
      {!isNavbarActive && (
        <GiHamburgerMenu
          className="hamburger_menu"
          onClick={handleNavbarActivation}
        />
      )}
      {isNavbarActive && (
        <GiCrossedSabres
          className="cross hamburger_menu"
          onClick={handleNavbarActivation}
        />
      )} */}

      <nav className="nav">
        <div className="nav_logo">
          <Link to="/">
            <img src={originalLogo} alt="Logo" />
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/about">about</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          {!isAuthenticated && (
            <Link to="/login" className="nav_login">
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className={`nav_cart ${
              cartItems.length !== 0 ? "nav_cart_active" : ""
            }`}
          >
            <ShoppingCart />
            <span>
              cart{cartItems.length !== 0 && <span>{cartItems.length}</span>}
            </span>
          </Link>
          {isAuthenticated && <UserOptions user={user} />}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
