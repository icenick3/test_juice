import React, {useEffect, useRef, useState} from 'react';
import './PriceAndTitle.css'


const PriceAndTitle = ({setPopActive, setprice}) => {
    const [visitor, setVisitors] = useState(196)
    const [items, setItems] = useState(13)
    const [color, setColor] = useState("White")
    const [active, setActive] = useState(false)
    const [text, setText] = useState("")
    const localItems = localStorage.getItem('items') ? localStorage.getItem('items') : null

    const barRef = useRef()
    const spanRef = useRef()


    const localHours = localStorage.getItem('hours') ? localStorage.getItem('hours') : null
    const localMinutes = localStorage.getItem('minutes') ? localStorage.getItem('minutes') : null
    const localSeconds = localStorage.getItem('seconds') ? localStorage.getItem('seconds') : null
    const [hours, setHours] = useState(localHours ? localHours : 11);
    const [minutes, setMinutes] = useState(localMinutes ? localMinutes : 9);
    const [seconds, setSeconds] = useState(localSeconds ? localSeconds : 11);

    console.log(localSeconds)

    useEffect(() => {
        const timer = setInterval(() => {
            if (!localSeconds){
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                    localStorage.setItem('seconds', seconds)
                } else {
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                        localStorage.setItem('minutes',minutes - 1)
                        setSeconds(59);
                        localStorage.setItem('seconds', 59)
                    } else {
                        if (hours > 0) {
                            setHours(hours - 1);
                            localStorage.setItem('hours', hours - 1)
                            setMinutes(59);
                            localStorage.setItem('minutes', 59)
                            setSeconds(59);
                            localStorage.setItem('seconds', 59)
                        } else {
                            // Таймер закінчився
                            clearInterval(timer);
                        }
                    }
                }
            } else {
                if (localSeconds > 0) {
                    setSeconds(seconds - 1);
                    localStorage.setItem('seconds', seconds)
                } else {
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                        localStorage.setItem('minutes',minutes - 1)
                        setSeconds(59);
                        localStorage.setItem('seconds', 59)
                    } else {
                        if (hours > 0) {
                            setHours(hours - 1);
                            localStorage.setItem('hours', hours - 1)
                            setMinutes(59);
                            localStorage.setItem('minutes', 59)
                            setSeconds(59);
                            localStorage.setItem('seconds', 59)
                        } else {
                            // Таймер закінчився
                            clearInterval(timer);
                        }
                    }
                }
            }

        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [hours, minutes, seconds]);


    useEffect(() => {
        if(!localItems){
            (async () => {
                const addItem = (time, i) => {
                    return new Promise(resolve =>
                        setTimeout(() => {
                            setItems(i);
                            localStorage.setItem('items', i)
                            resolve(); // Додаємо виклик resolve для завершення промісу
                        }, time)
                    );
                };
                await addItem(9000, 12);
                await addItem(6000, 11);
                await addItem(3000, 10);
                await addItem(3000, 9);
            })();
        } else {
            setItems(localItems)
        }
    }, []);


    useEffect(()=>{

        if (items < 10){
            barRef.current.style = `width: ${items}%; background: red`
            spanRef.current.style = 'color: red'

        } else {
            barRef.current.style = `width: ${items}%`
        }

    }, [items])

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
        setColor(e.target.value)
        if (e.target.value === "White") {
        }

    }

    const onsubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        if (text === "coup95") {
            setActive(true)
            setprice(true)
        }
    }


    const href = document.querySelector('#buttonOffer').href

    return (
        <div id="PriceInfo">
            <h1>Telescopic Folding Fan</h1>
            <div id="stars"><img id="rait" src="https://loveriq.online/sweep/za1/raiting.png" alt=""/>(35)</div>
            <p><span id="discount">R 195</span><span id="price">R 450</span></p>

            {/*<p id="discountCoupon" >Discount coupon</p>*/}
            {/*<form onSubmit={onsubmit}>*/}
            {/*    <div className="discountInput">*/}
            {/*        <input type="text" onChange={(e)=> setText(e.target.value)}/>*/}
            {/*        {active && <p id="discountProcent">95% discount coupon has been activated</p>}*/}
            {/*        <button> Apply</button>*/}
            {/*    </div>*/}
            {/*</form>*/}

            <h3>Colour: {color}</h3>
            <select name="select" id="select" onChange={onChange}>
                <option value="White">White</option>
                <option value="Green">Green</option>
            </select>


            <div id="items-count">
                <h2>
                    HURRY! ONLY <span ref={spanRef}>{localItems ? localItems : items}</span> LEFT IN STOCK.
                </h2>
                <div id="bar">
                    <div ref={barRef} id="progressBar">
                    </div>
                </div>
            </div>
            <div id="timerBlock">
                <div id="hours">
                    <h6>{localHours ? localHours.toString().padStart(2, '0') : hours.toString().padStart(2, '0')}</h6>
                    <p>HOURS</p>
                </div>
                :
                <div id="minutes">
                    <h6>{localMinutes ? localMinutes.toString().padStart(2, '0') : minutes.toString().padStart(2, '0')}</h6>
                    <p>MINUTES</p>
                </div>
                :
                <div id="seconds">
                    <h6>{localSeconds ? localSeconds.toString().padStart(2, '0') : seconds.toString().padStart(2, '0')}</h6>
                    <p>SECONDS</p>
                </div>
            </div>
            <h4 id="h4Text">Sale Ends Soon - Get Yours Today!</h4>


            <div id="visitors">
                <h5>REAL TIME <span>{visitor}</span> VISITORS RIGHT NOW</h5>
            </div>
            <a id="buttonAddToCart" href={href}>
                <img id="whiteBag" src="https://loveriq.online/sweep/za1/whiteBag.png" alt=""/>
                Add to cart
            </a>
        </div>
    );
};

export default PriceAndTitle;