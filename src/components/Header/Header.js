import React, {useEffect, useRef} from 'react';
import "./Header.css"
import {useTranslation} from "react-i18next";


const Header = ({setActiveSideMenu, setPopActive, setAbout, setFAQ, setContactUs, setReturn, setShiping, setColor2, color2, setShowCart, setShowCartFirst}) => {

    const hedRef = useRef()
    const { t } = useTranslation()

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
                <div id="menu" >
                    <img onClick={()=> setActiveSideMenu(true)} src="https://i.pinimg.com/originals/44/09/dd/4409dd64c767cf6ebf53b865505ba674.png" alt=""/>
                </div>
                <img className="logotype" src="https://i.pinimg.com/originals/8d/c0/21/8dc02197f11a956b346d27ed7f583d94.png" alt=""/>
                <a id="ShoppingCart" href={document.querySelector("#buttonOffer").href} >
                    <img src="https://i.pinimg.com/originals/fe/08/b9/fe08b98d4dbeb93a513f60fab0a14d85.png" alt=""/>
                </a>
            </div>
            <div className="links">
                <a href="">Shop AirBeats™ Wireless </a>
                <a href="https://parcelsapp.com/en/tracking">Track Your Order</a>
                <a  onClick={()=> setContactUs(true)}>Contact</a>
            </div>
        </header>
    );
};

export default Header;