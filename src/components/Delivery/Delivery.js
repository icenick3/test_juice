import React, {useEffect, useRef, useState} from 'react';
import './Delivery.css'
import start from '../../logotypes/calendar.png'
import middle from '../../logotypes/deliver.png'
import finish from '../../logotypes/courier.png'
import blackCar from '../../logotypes/blackCar.png'
import redCar from '../../logotypes/redCar.png'
import plus from '../../logotypes/plus.png'
import minus from '../../logotypes/minus.png'
import blackReturn from '../../logotypes/blackReturn.png'
import redReturn from '../../logotypes/redReturn.png'

const Delivery = () => {
    const [activeShipping, setActiveShipping] = useState(false)
    const [activeReturns, setActiveReturns] = useState(false)
    const [activePlus, setActivePlus] = useState(true)
    const [activePlusReturns, setActivePlusReturns] = useState(true)
    const [date, setDate] = useState(null)
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const formattedDate = `${day} ${month}`;
    const deliveryDay = day + 4
    const formattedDeliveryDate = `${deliveryDay} ${month}`;
    const refs = [
        useRef(),
        useRef(),
        useRef(),
    ]
    const plusRef = useRef()
    const plusRefReturn = useRef()
    const carRef = useRef()
    const returnRef = useRef()

    useEffect(() => {
        setDate(formattedDate)
    }, [])

    const shippingInfo = (e) => {
        if (activePlus) {
            plusRef.current.src = `${minus}`
            carRef.current.src = `${redCar}`
            setActivePlus(false)
        } else {
            plusRef.current.src = `${plus}`
            carRef.current.src = `${blackCar}`
            setActivePlus(true)
        }
        if (activeShipping === false) {
            refs[0].current.style.display = "block"
            setActiveShipping(true)
        } else {
            refs[0].current.style.display = "none"
            setActiveShipping(false)
        }
    }

    const returnsInfo = () => {
        if (activePlusReturns) {
            plusRefReturn.current.src = `${minus}`
            returnRef.current.src = `${redReturn}`
            setActivePlusReturns(false)
        } else {
            plusRefReturn.current.src = `${plus}`
            returnRef.current.src = `${blackReturn}`
            setActivePlusReturns(true)
        }
        if (activeReturns === false) {
            refs[1].current.style.display = "block"
            setActiveReturns(true)
        } else {
            refs[1].current.style.display = "none"
            setActiveReturns(false)
        }
    }
    return (
        <div id="delivery">
            <p id="deliveryDate">{formattedDeliveryDate}.<span> Estimated arrival</span></p>
            <div id="deliverySchema">
                <div id="startDelivery">
                    <img className="devLogo" src={start} alt=""/>
                </div>
                <div className="line">
                    <div className="fg"></div>
                </div>
                <div id="middleDelivery">
                    <img className="devLogo" src={middle} alt=""/>
                </div>
                <div className="line">
                    <div className="fg"></div>
                </div>
                <div id="finishDelivery">
                    <img className="devLogo" src={finish} alt=""/>
                </div>
            </div>
            <div id="deliveryInfo">
                <div id="leftInfo">
                    <p>{date}</p>
                    <p>Order placed</p>
                </div>
                <div id="middleInfo">
                    <p>{date}</p>
                    <p>Order dispatches
                    </p>
                </div>
                <div id="rightInfo">
                    <p>{formattedDeliveryDate}</p>
                    <p>Delivered!</p>
                </div>
            </div>
            <div className="Details">
                <img ref={carRef} src={blackCar} alt=""/>
                <h4>Shipping Information</h4>
                <img ref={plusRef} id="plus" src={plus} alt="" onClick={shippingInfo}/>
            </div>
            <div ref={refs[0]} id="shippingDetails">
                <br/>
                <h4>Australian Residents</h4>
                <br/>
                <h4>Shipping Cost</h4>
                <br/>
                <p>Residents of Australia receive Free Australia Post Tracked Express Shipping on all orders!</p>
                <br/>
                <h4>Delivery Time</h4>
                <br/>
                <p>Orders are dispatched same day when placed before 4pm AEST. Express Shipping is 1-4 business days for
                    delivery.</p>
                <br/>
                <h4>Tracking your order</h4>
                <br/>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order
                    ships.</p>
                <br/>
            </div>
            <div  className="Details">
                <img ref={returnRef} src={blackReturn} alt=""/>
                <h4>Returns</h4>
                <img ref={plusRefReturn} id="plus" src={plus} alt="" onClick={returnsInfo}/>
            </div>
            <div ref={refs[1]} id="returnsInfo">
                <p>
                    We want all of our customers to enjoy their purchases, therefore all products can be returned within
                    30 days of delivery for a FULL Refund
                </p>
                <p>
                    To complete your return, we require your receipt or proof of purchase. Please include this in your
                    parcel when returning your item.
                </p>
                <p>
                    Please contact is via our Contact Page if you believe your product is damaged or faulty.Buyer will
                    be responsible for paying for your own shipping costs for returning your item.
                </p>
            </div>
        </div>
    );
};

export default Delivery;