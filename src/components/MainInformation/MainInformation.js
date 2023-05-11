import React from 'react';
import PriceAndTitle from "../PriceAndTitle/PriceAndTitle";
import Delivery from "../Delivery/Delivery";
import './MainInformation.css'

const MainInformation = () => {


    return (
        <div id="Information">
         <PriceAndTitle/>
            <Delivery/>
        </div>
    );
};

export default MainInformation;