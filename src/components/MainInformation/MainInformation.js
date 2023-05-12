import React from 'react';
import PriceAndTitle from "../PriceAndTitle/PriceAndTitle";
import Delivery from "../Delivery/Delivery";
import './MainInformation.css'
import AboutJuicer from "../AboutJuicer/AboutJuicer";

const MainInformation = ({setColorForCart}) => {


    return (
        <div id="Information">
         <PriceAndTitle setColorForCart={setColorForCart}/>
            <Delivery/>
            <AboutJuicer/>
        </div>
    );
};

export default MainInformation;