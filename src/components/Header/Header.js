import React, {useEffect, useRef} from 'react';
import "./Header.css"
import menuBar from "../../logotypes/menu-bar.png"
import shopBar from "../../logotypes/shopping-bag.png"
const Header = () => {
const hedRef = useRef()
    useEffect(() => {
        function handleScroll() {

            if (window.scrollY >= 38) {
                hedRef.current.style.top = "0"
                hedRef.current.style.borderBottom = "2px solid #1e1e1e"
            } else {
                hedRef.current.style.top = "38px"
                hedRef.current.style.borderBottom = "0"

            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
      <header ref={hedRef}>
          <div id="header">
              <div id="menu">
                  <img src={menuBar} alt=""/>
              </div>
              <div id="logoShop">
                  <h1>SAMSETY SHOP</h1>
              </div>
              <div id="ShoppingCart">
                  <img src={shopBar} alt=""/>
              </div>
          </div>
      </header>
    );
};

export default Header;