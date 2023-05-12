import React from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";
import MainInformation from "../../components/MainInformation/MainInformation";
import './ProductPage.css'
import PreFooter from "../../components/PreFooter/PreFooter";
import BlackFooter from "../../components/BlackFooter/BlackFooter";
import OurPolicy from "../../components/OurPolicy/OurPolicy";
import BotPopup from "../../components/botPopup/botPopup";

const ProductPage = ({setColorForCart}) => {
    return (
        <div id="productPage">
            <BlackHeader/>
            <Header/>
            <div className="description">
                <ProductImages/>
                <MainInformation setColorForCart={setColorForCart}/>
            </div>
            <OurPolicy/>
            <div id="preFooterBlock">
                <PreFooter/>
            </div>
            <div id="blackFooterContainer">
                <BlackFooter/>
            </div>
            <BotPopup setColorForCart={setColorForCart}/>
        </div>
    );
};

export default ProductPage;