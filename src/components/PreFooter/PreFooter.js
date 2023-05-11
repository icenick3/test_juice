import React from 'react';
import './PreFooter.css';
import smile from '../../logotypes/smile.png'
import truck from '../../logotypes/truck.png'
import card from '../../logotypes/creditCard.png'
const PreFooter = () => {

    return (
        <div id="preFooter">
            <div id="mainPreFooter">
                <div className="preFooterElement">
                    <img src={truck} alt=""/>
                    <h2>Free Shipping Worldwide</h2>
                    <p>All orders are posted within 1 business day of your order and will arrive at your doorstep for FREE!</p>
                </div>
                <div className="preFooterElement" >
                    <img src={card} alt=""/>
                    <h2>SSL-Certificate Secured Payments</h2>
                    <p>To make sure our customers are 100% protected, we use SSL servers for your payments.</p>
                </div>
                <div className="preFooterElement">
                    <img src={smile} alt=""/>
                    <h2>80,000+ Satisfied Customers</h2>
                    <p>Our products are loved by more than 80,000 satisfied customers worldwide!</p>
                </div>
            </div>
        </div>
    );
};

export default PreFooter;