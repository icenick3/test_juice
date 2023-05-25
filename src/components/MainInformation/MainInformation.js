import React from 'react';
import PriceAndTitle from "../PriceAndTitle/PriceAndTitle";
import Delivery from "../Delivery/Delivery";
import './MainInformation.css'
import AboutJuicer from "../AboutJuicer/AboutJuicer";

const MainInformation = ({setPopActive}) => {


    return (
        <div id="Information">
         <PriceAndTitle setPopActive={setPopActive}/>
            <Delivery/>
        </div>
    );
};

export default MainInformation;