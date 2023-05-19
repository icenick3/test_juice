import React from 'react';
import './BlackFooter.css'

const BlackFooter = ({setReturn, setShiping}) => {
    return (
        <div id="blackFooter">
            <div id="mainBlackFooter">
                <div id="FEFooter">
                    <h2>About SAMSETY SHOP</h2>
                    <br/>
                    <p>
                        SAMSETY SHOP , your ultimate smart living store. Discover cutting-edge technology and
                        innovative solutions to elevate your lifestyle. From smart home devices to sustainable living
                        essentials, we bring you the future of living, today.
                    </p>
                    <br/>
                    <p>support@samsety.shop</p>
                    <br/>
                    <p>206 Duvernoy St, Constantia Park, Pretoria, 0010, South Africa</p>
                    <br/>
                    <p>Cell: +27 (0) 87 012 5788</p>
                </div>
                <div id="SEFooter">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ's</li>
                        <li onClick={()=> setReturn(true)}>Return Policy</li>
                        <li onClick={()=> setShiping(true)}>Shipping Information</li>
                    </ul>
                </div>
                <div id="TEFooter">
                    <h2>Stay in the Know!</h2>
                    <p>Subscribe to Our Newsletter</p>
                    <input type="text" placeholder={"Your email"}/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default BlackFooter;