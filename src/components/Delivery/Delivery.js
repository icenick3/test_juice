import React, {useEffect, useRef, useState} from 'react';
import './Delivery.css'

const Delivery = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)


    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const formattedDate = `${day} ${month}`;

    const futureDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
    const futureMonth = futureDate.getMonth() + 1; // Додаємо 1, оскільки місяці в JavaScript починаються з 0
    const futureDay = futureDate.getDate();
    const month2 = futureDate.toLocaleString('default', {month: 'short'});
    const formattedDeliveryDate = `${futureDay} ${month2}`;


    const onclick = (act, setAct) => {
        if (act) {
            setAct(false)

        } else {
            setAct(true)
        }
    }

    return (
        <div id="delivery">
            <div className="dateContainer">
                <img className="devLogo" src="https://loveriq.online/sweep/za1/blackCar.png" alt=""/>
                <p>Obtenez-le entre <span>le mardi {formattedDate} juin et le vendredi {formattedDeliveryDate}</span>
                </p>
            </div>
            <h1>GRAB IT AND KEEP IT IN YOUR POCKET AND GO ANYWHERE YOU WANT</h1>
            <br/>
            <p className="volcano">
                Earbuds support wireless charging so you can upright it on the wireless charger (not included) to get
                charging. Besides, equipped with Type-C cable that offers you more quick and stable wired charging.
                Truly wireless allows you to grab and go when you are in a rush.
            </p>
            <br/>
            <img className="smallIMG" src="https://i.pinimg.com/originals/e3/6c/a9/e36ca9ae7fb456681638b8c632b895dc.gif" alt=""/>
            <br/>
            <p className="volcano">Features with smart LED digital display, you can easily know the battery consumption
                on both bluetooth
                earphones and the charging case so you can master the best time to charge it. These Bluetooth earphones
                can last 5 hours of playtime on single charge and provides extra 25 hours playtime with charging case .
                Full music around you all-day long.
            </p>
            <br/>
            <img className="smallIMG" src="https://i.pinimg.com/originals/9a/c4/cb/9ac4cb8b335d0c844bedca615a9c106f.gif" alt=""/>
            <img className="bigPhoto"  src="https://i.pinimg.com/originals/3f/f7/c2/3ff7c2b9c7cc06f2e28264a8a124da00.webp" alt=""/>
            <h2 className="h2II">FEATURES:</h2>
            <h3 className="h3II">One-step Pairing</h3>
            <p className="volcano">
                Simply open the charging case lid without taking them out of the charging case, it will automatically
                reconnect the last paired devices. Faster wireless connection powered by Bluetooth 5.0.
            </p>
            <img className="bigPhoto"  src="https://i.pinimg.com/originals/60/57/f8/6057f8f8b5b20d4b29a8ee593f3186d2.webp" alt=""/>
            <h3 className="h3II">30H Long Stay-by</h3>
            <p className="volcano">Bluetooth earbuds charged once, enjoying 5 hours listening time, extend it to 30
                hours with portable and
                durable charging case, which saves you from worrying about charging during doing exercises.</p>
            <h3 className="h3II">Secure & Comfortable Fit</h3>
            <p className="volcano">With lighter (each earbud only weights 3.5g) and ergonomic design, MIFA Bluetooth
                earbuds fit comfortably to your ears, and let you get the best wearing and listening experience.
            </p>
            <h3 className="h3II">Lightweight Charging Case</h3>
            <p>Delicate charging case with compact design, weight only 35.3g which can be convenient for you to carry.
            </p>
            <h3 className="h3II">Wide Compatibility</h3>
            <p>Our Bluetooth earphones compatible with most Bluetooth-enabled devices, including smartphones, tablets,
                laptop computers, and more.
            </p>
            <h2 className="h2II h2scep">PACKAGE INCLUDES:</h2>
            <img  className="bigPhoto" src="https://i.pinimg.com/originals/a4/6f/d3/a46fd377d20829336d6228ecd0501080.webp" alt=""/>
            <div className="boxInfo boxMGM" onClick={() => onclick(active3, setActive3)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/a6/18/cf/a618cf7e01528bab0594e83bc2082f01.png" alt=""/>
                    <h2>Materials</h2>
                    {!active3 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active3 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active3 && <p><span>Non-toxic ABS plastic,</span></p>}
                {active3 && <p><span>Non-toxic PP plastic, </span></p>}
                {active3 && <p><span>Electronic components.</span></p>}
            </div>
            <div className="boxInfo" onClick={() => onclick(active4, setActive4)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/c8/a2/7b/c8a27be8937524dd49897e2797b1f138.png" alt=""/>
                    <h2>Expédition</h2>
                    {!active4 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active4 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active4 && <h3>Shipping to all EU countries and more!</h3>}
                {active4 &&
                    <p>Shipping to Austria, Czech Republic, Netherlands, Germany, Poland, Great Britain: <span>2-3 working days.</span>
                    </p>}
                {active4 && <p>Shipping to the rest of EU countries: <span>3-5 working days.</span></p>}
            </div>
            <div className="boxInfo" onClick={() => onclick(active5, setActive5)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/c8/a2/7b/c8a27be8937524dd49897e2797b1f138.png" alt=""/>
                    <h2>Refund and contact</h2>
                    
                    {!active5 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active5 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active5 && <p> - <span>Satisfied Customer</span> or <span>Refund</span></p>}
                {active5 && <p>- Email contact <span>24/7</span></p>}
            </div>
        </div>
    );
};

export default Delivery;