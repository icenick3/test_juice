import React, {useEffect, useRef} from 'react';
import './botPopup.css'
import {useTranslation} from "react-i18next";



const BotPopup = ({setPopActive, price, setColor2, color2, setCount, setSrc, setShowCart, setShowCartFirst}) => {

    const { t } = useTranslation()
    const popRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                popRef.current.style.transform = "translateY(0)"

            } else {
                popRef.current.style.transform = "translateY(200%)"
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        const position = document.documentElement.scrollTop || document.body.scrollTop;
        if (position > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, position - position / 16);
        }
    };
    const handleScrollToTop = () => {
        scrollToTop()
    };

    const onChange = (e) => {
        setColor2(e.target.value)
        if (e.target.value === 'Black'){
            setCount(0)
            setSrc(document.getElementById("buttonOfferBlue").href)
        } else if (e.target.value === 'Green'){
            setCount(2)
            setSrc(document.getElementById("buttonOfferGrey").href)
        } else if (e.target.value === 'Blue'){
            setCount(1)
            setSrc(document.getElementById("buttonOfferPink").href)
        } else if (e.target.value === 'White'){
            setCount(3)
            setSrc(document.getElementById("buttonOfferPurple").href)
        } else if (e.target.value === 'Red'){
            setCount(4)
            setSrc(document.getElementById("buttonOfferGreen").href)
        }
    }

    return (
        <div ref={popRef} id="botPopup">
            <div id="arrow" onClick={handleScrollToTop}>
                <img src="https://loveriq.online/sweep/za1/free-icon-down-arrow-54785.png" alt=""/>
            </div>
            <div id="botPopupMain">
                <div id="popupContainer">
                    {color2 === "Black" && <img src="https://i.pinimg.com/originals/7f/c0/af/7fc0af25ab25ac58d61533e870d4305e.jpg" alt=""/>}
                    {color2 === "Blue" && <img src="https://i.pinimg.com/originals/20/16/06/201606e693505434abfb6a3d65e36f8f.jpg" alt=""/>}
                    {color2 === "Green" && <img src="https://i.pinimg.com/originals/5d/a2/8e/5da28e6ad7f0fc612eeccb84f4153bea.jpg" alt=""/>}
                    {color2 === "White" && <img src="https://i.pinimg.com/originals/23/08/a7/2308a766007769018a963d603b43784d.jpg" alt=""/>}
                    {color2 === "Red" && <img src="https://i.pinimg.com/originals/95/2e/25/952e25fe3f870aa4801222db81f66dc0.jpg" alt=""/>}
                    <div>
                        <h2>{t("ProductTitle")}</h2>
                        <p><span> $ 70.22</span> $ 50,99</p>
                    </div>
                </div>
                <div id="botPopupSelect">
                    <select name="select" id="select" onChange={onChange}>
                        <option value="Black">{t("Blue")}</option>
                        <option value="Blue">{t("Pink")}</option>
                        <option value="Green">{t("Grey")}</option>
                        <option value="White">{t("Purple")}</option>
                        <option value="Red">{t("Green")}</option>
                    </select>
                    <a href={document.querySelector("#buttonOffer").href}  id="btn">
                        {t("BuyNow")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BotPopup;