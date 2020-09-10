import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionFirstLine">Hello, Guest</span>
          <span className="header__optionSecondLine">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Returns</span>
          <span className="header__optionSecondLine">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Your</span>
          <span className="header__optionSecondLine">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionSecondLine header__basketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
