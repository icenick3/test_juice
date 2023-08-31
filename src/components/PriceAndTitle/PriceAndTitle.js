import React, {useEffect, useRef, useState} from 'react';
import './PriceAndTitle.css'
import {useTranslation} from "react-i18next";


const PriceAndTitle = ({setPopActive, setprice, setCount, color2, setColor2, setSrc, setShowCartFirst, setShowCart}) => {

    const { t } = useTranslation()


    const onChange = (e) => {
        setColor2(e.target.value)
        if (e.target.value === 'Black'){
            setCount(0)
        } else if (e.target.value === 'Green'){
            setCount(2)
        } else if (e.target.value === 'Blue'){
            setCount(1)
        } else if (e.target.value === 'White'){
            setCount(3)
        } else if (e.target.value === 'Red'){
            setCount(4)
        }
    }


    return (
        <div id="PriceInfo">
            <h1>{t("ProductTitle")}</h1>
            <p><span id="price" >$ 70.22</span><span id="discount"> $ 50,99 </span><span className="vente">{t("Sale")}</span></p>
            <p className="Taxes">{t("VAT")}</p>
            <div id="stars"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>(9)</div>
            <h3>Color: {color2}</h3>
            <select name="select" id="select" onChange={onChange}>
                <option value="Black">{t("Blue")}</option>
                <option value="Blue">{t("Pink")}</option>
                <option value="Green">{t("Grey")}</option>
                <option value="White">{t("Purple")}</option>
                <option value="Red">{t("Green")}</option>
            </select>
            {/*<p className="textUnder">Take part in our contest and get a chance to get the prize by clicking on the button below</p>*/}
            <a id="buttonAddToCart" href={document.querySelector("#buttonOffer").href}>
                {t("BuyNow")}
            </a>
            <div className="product__description">
                <ul data-mce-fragment="1" className="ulPo">
                    <li data-mce-fragment="1">
                        <strong>Superior sound quality:</strong> Enjoy crisp, clear audio with rich bass and full-bodied
                        tones.
                    </li>
                    <li data-mce-fragment="1">
                        <strong>Wireless connectivity:</strong> Connect seamlessly to your Apple Air MAS device for a
                        wireless listening experience.
                    </li>
                    <li data-mce-fragment="1">
                        <strong>Comfortable fit:</strong> Ergonomically designed to provide a secure and comfortable fit
                        for extended periods of wear.
                    </li>
                    <li data-mce-fragment="1">
                        <strong>Long battery life:</strong> With up to 8 hours of playback time and quick charging, you
                        can enjoy your music all day long.
                    </li>
                    <li data-mce-fragment="1">
                        <strong>Built-in microphone:</strong> Take calls hands-free with the built-in microphone, and
                        enjoy clear conversations with noise reduction technology.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PriceAndTitle;