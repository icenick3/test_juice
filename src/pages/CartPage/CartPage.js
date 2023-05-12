import React from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import BlackFooter from "../../components/BlackFooter/BlackFooter";

const CartPage = ({color}) => {
    return (
        <div>
            <BlackHeader/>
            <Header/>
            <Cart color={color}/>
            <BlackFooter/>
        </div>
    );
};

export default CartPage;