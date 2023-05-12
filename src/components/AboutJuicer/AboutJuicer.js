import React from 'react';
import './AboutJuicer.css'
import img from '../../images/img_5.png'
import img2 from '../../images/img_6.png'
import img3 from '../../images/img_7.png'
import img4 from '../../images/img_8.png'

const AboutJuicer = () => {
    return (
        <div id="aboutJuicer">
            <img src={img} alt=""/>
            <h2 id="title">
                Introducing the JuiceGenie - Portable Electric Juicer, the ultimate Juicer for a busy lifestyle! Say
                goodbye to long lines at juice bars and hello to fresh, nutritious, and delicious juices anytime,
                anywhere.
            </h2>
            <br/>
            <p>
                This product is not your typical blender or juicer. The JuiceGenie is a multifunctional Mega Juicing
                machine that's designed to blitz with ease in seconds. With its state of the art design and cutting edge
                blades, you can enjoy a fresh cup of juice, smoothie, or milkshake in just seconds.
            </p>
            <br/>
            <p>
                Are you always on the go? Do you struggle to find time to prepare your meals or drinks? Imagine having
                the ability to make fresh juice anywhere you go, without the need for bulky equipment or appliances. The
                JuiceGenie is the answer to your problems!
            </p>
            <img id="jucier" className="img" src={img2} alt=""/>
            <h2 className="secTitle">
                Reasons why the JuiceGenie will change your life:
            </h2>
            <ul>
                <li>
                    Portable and Lightweight: This electric juicer is compact and lightweight, making it easy to carry
                    anywhere you go.
                </li>
                <li>
                    USB-powered: The JuiceGenie can be charged using a USB cable, making it convenient to use anywhere
                    and anytime.
                </li>
                <li>
                    Multipurpose: The JuiceGenie is not just a juicer, but a blender, food mixer, and milkshake maker
                    too! You can make your favorite drinks and meals with just one device.
                </li>
                <li>
                    Easy to Clean: The JuiceGenie is easy to disassemble and clean, making it hassle-free to use.
                </li>
                <li>
                    Saves Time and Money: With the JuiceGenie, you can make fresh juice at home or on-the-go, without
                    the need for expensive juice bars or cafes.
                </li>
            </ul>
            <img src={img3} alt="" className="img"/>
            <br/>
            <br/>
            <br/>
            <img className="img" src={img4} alt=""/>
            <p>
                With its sleek and modern design, the JuiceGenie is perfect for those who are always on-the-go. Imagine
                being able to make your favorite drinks and meals in seconds, without the need for bulky equipment or
                appliances.
                <br/>
                So what are you waiting for? Say goodbye to long lines and expensive juice bars, and hello to the
                JuiceGenie!
            </p>
            <h2 className="secTitle">
                Product Specifications:
            </h2>
            <ul>
                <li>
                    Material: High-Quality Food Grade PP+PC+ABS+304 Stainless Steel
                </li>
                <li>
                    Battery Capacity: 2000mAh
                </li>
                <li>
                    Charging Time: 3-5 hours
                </li>
                <li>
                    Working Time: 10-12 cups of juice per full charge
                </li>
            </ul>
            <h2 className="secTitle">Package Inclusions:</h2>
            <ul>
                <li>
                    1 x JuiceGenie Portable Electric Juicer
                </li>
                <li>
                    1 x USB Charging Cable
                </li>
                <li>
                    1 x User Manual
                </li>
            </ul>
            <p>
                We believe in providing our customers with high-quality, innovative products that make their lives
                easier. We are committed to ensuring that you are completely satisfied with your purchase, and offer a
                100% satisfaction guarantee.
                <br/>
                Our customer support team is available 24/7 to answer any questions or concerns you may have.
            </p>
            <h2 className="secTitle">
                "I've been using the JuiceGenie for a month now, and I can't imagine my life without it. It's perfect
                for busy mornings or when I'm on-the-go." - Michael T.
            </h2>
        </div>
    );
};

export default AboutJuicer;