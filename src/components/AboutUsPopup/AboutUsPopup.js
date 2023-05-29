import React from 'react';
import './AboutUsPopup.css'

const AboutUsPopup = ({setAbout}) => {
    return (
        <div className="returnPolicy2" onClick={()=>setAbout(false)}>
            <div className="returnBlock2">
                <h1>About Us</h1>
                <h2>Welcome to SAMSETY SHOP!</h2>
                <p>
                    We are an online store dedicated to providing the latest smart home products to help you transform
                    your living space into a modern, efficient, and sustainable home. Our products are carefully curated
                    to provide the highest quality and latest technology to ensure that you are always ahead of the
                    curve.
                    <br/>
                    <br/>
                    At SAMSETY SHOP, we understand the importance of creating a comfortable and sustainable living
                    space. With our wide range of smart home devices, smart travel accessories, kitchen essentials and
                    etc. you can automate your lighting, heating, and security systems, and even control your home from
                    your smartphone or tablet. Our products are designed to make your life easier, more comfortable, and
                    energy-efficient, all while reducing your carbon footprint.
                    <br/>
                    <br/>
                    We pride ourselves on our exceptional customer service and support. Our team is always ready to
                    assist you with any questions or concerns you may have, and we strive to provide you with the best
                    shopping experience possible. We are committed to your satisfaction, and we will go the extra mile
                    to make sure that you are happy with your purchase.
                    <br/>
                    <br/>
                    Thank you for choosing SAMSETY SHOP as your smart home technology provider. We are excited to
                    help you create a comfortable, sustainable, and modern living space.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPopup;