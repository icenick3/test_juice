import React from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";
import MainInformation from "../../components/MainInformation/MainInformation";
import './ProductPage.css'
import PreFooter from "../../components/PreFooter/PreFooter";
import BlackFooter from "../../components/BlackFooter/BlackFooter";
import OurPolicy from "../../components/OurPolicy/OurPolicy";

const ProductPage = () => {
    return (
        <>
            <BlackHeader/>
            <Header/>
            <div className="description">
                <ProductImages/>
                <MainInformation/>
            </div>
            <OurPolicy/>
            <div id="preFooterBlock">
                <PreFooter/>
            </div>
            <BlackFooter/>
        </>
    );
};

export default ProductPage;