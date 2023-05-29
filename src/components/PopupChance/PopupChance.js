import React, {useEffect, useRef, useState} from 'react';
import './PopupChance.css'

const PopupChance = ({setSpiner, setActiveCoupon}) => {


    const [seconds, setSeconds] = useState(200);
    const [close, setClose] = useState(false);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [seconds]);

    const formatTime = () => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const circleRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let rotationSpeed = 1000; // Початкова швидкість обертання (градуси в секунду)
        const rotationTime = 5.375; // Загальний час анімації (секунди)
        let rotationAngle = 0;

        const rotateCircle = () => {
            rotationAngle += (rotationSpeed / 60); // Обчислюємо кут обертання в залежності від часу (60 FPS)
            circleRef.current.style.transform = `rotate(${rotationAngle}deg)`;

            if (rotationSpeed > 0) {
                rotationSpeed -= 1000 / (60 * rotationTime); // Зменшуємо швидкість обертання пропорційно до часу анімації
                requestAnimationFrame(rotateCircle);
            } else {
                setIsRotating(false);
                setActive(true)
                setTimeout(()=>{
                    setClose(true)
                }, 2000)

            }
        };

        if (isRotating) {
            rotateCircle();
        }
    }, [isRotating]);

    const startRotation = () => {
        if (!active){
            setIsRotating(true);
        }


    };

    const onclick = () => {
        if(active){
            setSpiner(false)
            setActiveCoupon(true)
        }
    }
    return (
        <div className="chancePopup" >
            <div className="chanceContainer" onClick={(e)=> e.stopPropagation()}>
                <h1><span>Congratulations!</span><br/> You are our 1000th visitor today</h1>
                <p>Every 1000 visitors gets a bonus from our store. <span>Spin the roulette </span>to find out how you got the bonus</p>
                <div className="imgContainer" onClick={startRotation}>
                    <img src="https://loveriq.online/sweep/za1/select.png" alt="" className="selectDiscount"/>
                    <img ref={circleRef} src="https://loveriq.online/sweep/za1/circle33.png" alt="" className="chanceDiscount" />
                    {close &&  <h1 id="closePop" onClick={onclick}>Click to close</h1>}
                </div>
                {!active && <button onClick={startRotation}>SPIN</button>}
                {active && <p>Congratulations, you have won a <span>95% discount</span></p>}
                {active && <p>Your discount coupon: <span>coup95</span></p>}
                {active && <p>Coupon validity period: <span>{formatTime()}</span></p>}
            </div>
        </div>
    );
};

export default PopupChance;