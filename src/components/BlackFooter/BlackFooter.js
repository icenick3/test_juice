import React from 'react';
import './BlackFooter.css'

const BlackFooter = () => {
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
                    <p>admin@futurelivinghq.com</p>
                </div>
                <div id="SEFooter">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ's</li>
                        <li>Return Policy</li>
                        <li>Shipping Information</li>
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