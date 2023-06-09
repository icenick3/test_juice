import React from 'react';
import './Cart.css'
import img from "../../images/img.png"
import whiteBag from "../../logotypes/whiteBag.png"



const Cart = ({color}) => {
    return (
        <div id="cart">
            <h1>Your cart</h1>
            <div id="summaryCart">
                <div id="products">
                    <img src={img} alt=""/>
                    <div>
                        <h4>JuiceGenie - Portable Electric Blender</h4>
                        <p>{color}</p>
                    </div>
                    <div id="prices">
                        <p className="discount">$64.99</p>
                        <p className="realPrice">$150.00</p>
                    </div>
                </div>
                <div id="totalPrice">
                    <div id="subtotal">
                        <h4>Subtotal</h4>
                        <div id="pricesInTotal">
                            <p className="discount">$64.99</p>
                            <p className="realPrice">$150.00</p>
                        </div>
                    </div>
                    <div id="totalSaving">
                        <h4>Total savings</h4>
                        <p>$85.01</p>
                    </div>
                    <h6>Taxes and <span>shipping</span> calculated at checkout</h6>
                    <a id="offer" href="{offer}">
                        <img src={whiteBag} alt=""/>
                        Check Out - $64.99
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cart;