import React, {useEffect, useState} from 'react';
import './PriceAndTitle.css'


const PriceAndTitle = ({setPopActive, setprice}) => {
    const [visitor, setVisitors] = useState(43)
    const [color, setColor] = useState("White")
    const [active, setActive] = useState(false)
    const [text, setText] = useState("")

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

    const onsubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        if (text === "coup95"){
            setActive(true)
            setprice(true)
        }
    }



    return (
        <div id="PriceInfo">
            <h1>JuiceGenie - Portable Electric Blender</h1>
            <div id="stars"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>(35)</div>
            {!active && <p><span id="discount">£ 59.99</span></p>}
            {active && <p><span id="discount">£ 2.99</span><span id="price">£ 59.99</span></p>}

            <p id="discountCoupon" >Discount coupon</p>
            <form onSubmit={onsubmit}>
                <div className="discountInput">
                    <input type="text" onChange={(e)=> setText(e.target.value)}/>
                    {active && <p id="discountProcent">95% discount coupon has been activated</p>}
                    <button> Apply</button>
                </div>
            </form>

            <h3>Colour: {color}</h3>
            <select name="select" id="select" onChange={onChange}>
                <option value="White">White</option>
                <option value="Pink">Pink</option>
            </select>
            <div id="visitors">
                <img id="eye" src="https://loveriq.online/sweep/za1/eye.png" alt=""/>
                <p>{visitor} visitor(s) currently looking at this product</p>
            </div>
            <a id="buttonAddToCart" href={"offer"}>
                <img id="whiteBag" src="https://loveriq.online/sweep/za1/whiteBag.png" alt=""/>
                Add to cart
            </a>
        </div>
    );
};

export default PriceAndTitle;