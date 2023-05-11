import React from 'react';
import "./Header.css"
import menuBar from "../../logotypes/menu-bar.png"
import shopBar from "../../logotypes/shopping-bag.png"
const Header = () => {



    return (
      <header>
          <div id="menu">
              <img src={menuBar} alt=""/>
          </div>
          <div id="logoShop">
              <h1>SAMSETY SHOP</h1>
          </div>
          <div id="ShoppingCart">
              <img src={shopBar} alt=""/>
          </div>
      </header>
    );
};

export default Header;