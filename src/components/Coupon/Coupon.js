import React, {useEffect, useRef, useState} from 'react';
import './Coupon.css'

const Coupon = ({activeCoupon}) => {

    const [active, setActive] = useState(false)

    const couponRef = useRef()

    const [hasClass, setHasClass] = useState(false);



    useEffect(() => {
        const interval = setInterval(() => {
            setHasClass((prevHasClass) => !prevHasClass);
        }, 300);

        if (!active){
            if (hasClass){
                couponRef.current.classList.add('XXX');
                couponRef.current.classList.remove('XXX2');
            } else {
                couponRef.current.classList.add('XXX2');
                couponRef.current.classList.remove('XXX');

            }
        }
        return () => {
            clearInterval(interval);
        };
    }, [hasClass]);


useEffect(()=>{
    if (activeCoupon){
        couponRef.current.style.display = "flex"
    } else {
        couponRef.current.style.display = "none"
    }
},[activeCoupon])
    const onclick = () => {
        if (active === false){
            setActive(true)
        } else {
            setActive(false)
        }

    }

    return (
        <div ref={couponRef} className={active ? "Coupon " : "Coupon coupon2"} >
            {!active && <img src="https://loveriq.online/sweep/za1/arrowheads.png" alt="" onClick={onclick}/>}
            {active && <img src="https://loveriq.online/sweep/za1/rightarrowheads.png" alt="" onClick={onclick}/>}
            <p>Your discount coupon: coup95</p>
        </div>
    );
};

export default Coupon;