import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../stateProvider";
import { auth } from "../../firebase";

const NavBar = () => {
  const [{ basket, user }] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* 1. Logo on the top */}
      <Link to="/">
        <img
          className="header__img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* 2  .serch box */}
      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchicon" />
      </div>

      {/* 3.  3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logout} className="header__option">
            <span className="header__optionLineOne">
              Hello {user && "user"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Logout" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/try_prime" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <span className="header__otpionBasketValue">{basket?.length}</span>
            <ShoppingBasket />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
