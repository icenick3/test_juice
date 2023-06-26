import React from 'react';
import PriceAndTitle from "../PriceAndTitle/PriceAndTitle";
import Delivery from "../Delivery/Delivery";
import './MainInformation.css'
import AboutJuicer from "../AboutJuicer/AboutJuicer";

const MainInformation = ({setPopActive, setprice, setCount, color2, setColor2, setSrc, setShowCartFirst, setShowCart}) => {


    return (
        <div id="Information">
         <PriceAndTitle setPopActive={setPopActive} setprice={setprice} setCount={setCount} setColor2={setColor2} color2={color2} setSrc={setSrc} setShowCart={setShowCart} setShowCartFirst={setShowCartFirst}/>
            <Delivery/>
        </div>
    );
};

export default MainInformation;