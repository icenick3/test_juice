import React, {useEffect, useRef} from 'react';
import "./Header.css"


const Header = ({setActiveSideMenu, setPopActive}) => {

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

    const href = document.querySelector('#buttonOffer').href

    return (
      <header ref={hedRef}>
          <div id="header">
              <div id="menu" >
                  <img onClick={()=> setActiveSideMenu(true)} src="https://loveriq.online/sweep/za1/menu-bar.png" alt=""/>
              </div>
              <div id="logoShop">
                  <h1>SAMSETY SHOP</h1>
              </div>
              <a id="ShoppingCart" href={href}>
                  <img src="https://loveriq.online/sweep/za1/shopping-bag.png" alt=""/>
              </a>
          </div>
      </header>
    );
};

export default Header;