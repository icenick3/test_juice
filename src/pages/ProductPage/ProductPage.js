import React from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";
import MainInformation from "../../components/MainInformation/MainInformation";
import './ProductPage.css'

const ProductPage = () => {
    return (
        <>
            <BlackHeader/>
            <Header/>
            <div className="description">
                <ProductImages/>
                <MainInformation/>
            </div>
        </>
    );
};

export default ProductPage;