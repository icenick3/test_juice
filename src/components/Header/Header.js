import React, {useEffect, useRef} from 'react';
import "./Header.css"


const Header = ({setActiveSideMenu, setPopActive, setAbout, setFAQ, setContactUs, setReturn, setShiping, setColor2, color2}) => {

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
                <div id="menu" >
                    <img onClick={()=> setActiveSideMenu(true)} src="https://i.pinimg.com/originals/80/0c/11/800c11ed0bbb24922d88b1984577a95e.png" alt=""/>
                </div>
                <h1>SoundScape</h1>
                <p onClick={()=> setAbout(true)}>Privacy Policy</p>
                <p onClick={()=> setContactUs(true)}>Contact US</p>
                <p onClick={()=> setFAQ(true)}>Terms of Service</p>
                <p onClick={()=> setReturn(true)}>Return policy</p>
                <img className="ShoppingCart2" src="https://i.pinimg.com/originals/a9/b9/88/a9b9888e7cdf7e83fa4c3415c8588083.png" alt=""/>
                <img className="ShoppingCart" src="https://i.pinimg.com/originals/8b/05/4f/8b054f5f4fd02568643c345c91a439f9.png" alt=""/>
                {color2 === "Ice Blue" && <a id="ShoppingCart" href={document.querySelector("#buttonOfferBlue").href}>
                    <img src="https://i.pinimg.com/originals/90/d2/34/90d234329fb070e933194a66f1ef590b.png" alt=""/>
                </a>}
                {color2 === "Modern Grey" && <a id="ShoppingCart" href={document.querySelector("#buttonOfferGrey").href}>
                    <img src="https://i.pinimg.com/originals/90/d2/34/90d234329fb070e933194a66f1ef590b.png" alt=""/>
                </a>}
                {color2 === "Youth Green" && <a id="ShoppingCart" href={document.querySelector("#buttonOfferGreen").href}>
                    <img src="https://i.pinimg.com/originals/90/d2/34/90d234329fb070e933194a66f1ef590b.png" alt=""/>
                </a>}
                {color2 === "Pink Lotus" && <a id="ShoppingCart" href={document.querySelector("#buttonOfferPink").href}>
                    <img src="https://i.pinimg.com/originals/90/d2/34/90d234329fb070e933194a66f1ef590b.png" alt=""/>
                </a>}
                {color2 === "Sapphire Blue" && <a id="ShoppingCart" href={document.querySelector("#buttonOfferPurple").href}>
                    <img src="https://i.pinimg.com/originals/90/d2/34/90d234329fb070e933194a66f1ef590b.png" alt=""/>
                </a>}
            </div>
        </header>
    );
};

export default Header;