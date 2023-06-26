import React, {useEffect, useRef, useState} from 'react';
import './PriceAndTitle.css'


const PriceAndTitle = ({setPopActive, setprice, setCount, color2, setColor2}) => {
    const [visitor, setVisitors] = useState(196)
    const [items, setItems] = useState(13)
    const [color, setColor] = useState("White")
    const [active, setActive] = useState(false)
    const [text, setText] = useState("")
    const localItems = localStorage.getItem('items') ? localStorage.getItem('items') : null

    const barRef = useRef()
    const spanRef = useRef()


    // const localHours = localStorage.getItem('hours') ? localStorage.getItem('hours') : null
    // const localMinutes = localStorage.getItem('minutes') ? localStorage.getItem('minutes') : null
    // const localSeconds = localStorage.getItem('seconds') ? localStorage.getItem('seconds') : null
    // const [hours, setHours] = useState(localHours ? localHours : 11);
    // const [minutes, setMinutes] = useState(localMinutes ? localMinutes : 9);
    // const [seconds, setSeconds] = useState(localSeconds ? localSeconds : 11);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (!localSeconds){
    //             if (seconds > 0) {
    //                 setSeconds(seconds - 1);
    //                 localStorage.setItem('seconds', seconds)
    //             } else {
    //                 if (minutes > 0) {
    //                     setMinutes(minutes - 1);
    //                     localStorage.setItem('minutes',minutes - 1)
    //                     setSeconds(59);
    //                     localStorage.setItem('seconds', 59)
    //                 } else {
    //                     if (hours > 0) {
    //                         setHours(hours - 1);
    //                         localStorage.setItem('hours', hours - 1)
    //                         setMinutes(59);
    //                         localStorage.setItem('minutes', 59)
    //                         setSeconds(59);
    //                         localStorage.setItem('seconds', 59)
    //                     } else {
    //                         // Таймер закінчився
    //                         clearInterval(timer);
    //                     }
    //                 }
    //             }
    //         } else {
    //             if (localSeconds > 0) {
    //                 setSeconds(seconds - 1);
    //                 localStorage.setItem('seconds', seconds)
    //             } else {
    //                 if (minutes > 0) {
    //                     setMinutes(minutes - 1);
    //                     localStorage.setItem('minutes',minutes - 1)
    //                     setSeconds(59);
    //                     localStorage.setItem('seconds', 59)
    //                 } else {
    //                     if (hours > 0) {
    //                         setHours(hours - 1);
    //                         localStorage.setItem('hours', hours - 1)
    //                         setMinutes(59);
    //                         localStorage.setItem('minutes', 59)
    //                         setSeconds(59);
    //                         localStorage.setItem('seconds', 59)
    //                     } else {
    //                         // Таймер закінчився
    //                         clearInterval(timer);
    //                     }
    //                 }
    //             }
    //         }
    //
    //     }, 1000);
    //
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [hours, minutes, seconds]);


    // useEffect(() => {
    //     if(!localItems){
    //         (async () => {
    //             const addItem = (time, i) => {
    //                 return new Promise(resolve =>
    //                     setTimeout(() => {
    //                         setItems(i);
    //                         localStorage.setItem('items', i)
    //                         resolve(); // Додаємо виклик resolve для завершення промісу
    //                     }, time)
    //                 );
    //             };
    //             await addItem(19000, 12);
    //             await addItem(16000, 11);
    //             await addItem(13000, 10);
    //             await addItem(13000, 9);
    //         })();
    //     } else {
    //         setItems(localItems)
    //     }
    // }, []);


    // useEffect(()=>{
    //
    //     if (items < 10){
    //         barRef.current.style = `width: ${items}%; background: red`
    //         spanRef.current.style = 'color: red'
    //
    //     } else {
    //         barRef.current.style = `width: ${items}%`
    //     }
    //
    // }, [items])

    function generateRandomNumber() {
        const min = 192;
        const max = 198;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setVisitors(randomNumber)
    }

    useEffect(() => {
        setTimeout(() => {
            generateRandomNumber()
        }, 8000)
    }, [visitor])
    const onChange = (e) => {
        setColor2(e.target.value)
        if (e.target.value === 'Ice Blue'){
            setCount(0)
        } else if (e.target.value === 'Modern Grey'){
            setCount(2)
        } else if (e.target.value === 'Pink Lotus'){
            setCount(1)
        } else if (e.target.value === 'Sapphire Blue'){
            setCount(3)
        } else if (e.target.value === 'Youth Green'){
            setCount(4)
        }
    }


    return (
        <div id="PriceInfo">
            <h1>ACEFLOWS™ - CRYSTAL EARBUDS</h1>
            <p><span id="price" >£ 6,99</span><span id="discount"> £ 34.99 </span><span className="vente">Sale</span></p>
            <p className="Taxes">incluses VAT</p>
            <div id="stars"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>(9)</div>
            {/*<p id="discountCoupon" >Discount coupon</p>*/}
            {/*<form onSubmit={onsubmit}>*/}
            {/*    <div className="discountInput">*/}
            {/*        <input type="text" onChange={(e)=> setText(e.target.value)}/>*/}
            {/*        {active && <p id="discountProcent">95% discount coupon has been activated</p>}*/}
            {/*        <button> Apply</button>*/}
            {/*    </div>*/}
            {/*</form>*/}

            <h3>Color: {color2}</h3>
            <select name="select" id="select" onChange={onChange}>
                <option value="Ice Blue">Ice Blue</option>
                <option value="Pink Lotus">Pink Lotus</option>
                <option value="Modern Grey">Modern Grey</option>
                <option value="Sapphire Blue">Sapphire Blue</option>
                <option value="Youth Green">Youth Green</option>
            </select>

            <p className="textUnder">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
            {color2 === "Ice Blue" && <a id="buttonAddToCart" href={document.querySelector("#buttonOfferBlue").href}>
                Buy now
            </a>}
            {color2 === "Modern Grey" && <a id="buttonAddToCart" href={document.querySelector("#buttonOfferGrey").href}>
                Buy now
            </a>}
            {color2 === "Youth Green" && <a id="buttonAddToCart" href={document.querySelector("#buttonOfferGreen").href}>
                Buy now
            </a>}
            {color2 === "Pink Lotus" && <a id="buttonAddToCart" href={document.querySelector("#buttonOfferPink").href}>
                Buy now
            </a>}
            {color2 === "Sapphire Blue" && <a id="buttonAddToCart" href={document.querySelector("#buttonOfferPurple").href}>
                Buy now
            </a>}
        </div>
    );
};

export default PriceAndTitle;