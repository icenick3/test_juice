import React, {useEffect, useState} from 'react';
import './PriceAndTitle.css'


const PriceAndTitle = () => {
    const [visitor, setVisitors] = useState(43)
    const [color, setColor] = useState("White")

    function generateRandomNumber() {
        const min = 43;
        const max = 49;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setVisitors(randomNumber)
    }
useEffect(()=> {
    setTimeout(()=>{
        generateRandomNumber()
    }, 20000)
},[visitor])
    const onChange = (e) => {
        setColor(e.target.value)
        if (e.target.value === "White"){
        }

    }
    return (
        <div id="PriceInfo">
            <h1>JuiceGenie - Portable Electric Blender</h1>
            <div id="stars"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>(35)</div>
            <p><span id="discount">$64.99</span><span id="price">$150.00</span><span id="disText">Discount 80% off</span></p>
            <h3>Colour: {color}</h3>
            <select name="select" id="select" onChange={onChange}>
                <option value="White">White</option>
                <option value="Pink">Pink</option>
            </select>
            <div id="visitors">
                <img id="eye" src="https://loveriq.online/sweep/za1/eye.png" alt=""/>
                <p>{visitor} visitor(s) currently looking at this product</p>
            </div>
            <a id="buttonAddToCart" href="{offer_link}">
                <img id="whiteBag" src="https://loveriq.online/sweep/za1/whiteBag.png" alt=""/>
                Add to cart
            </a>
        </div>
    );
};

export default PriceAndTitle;