import React, {useEffect, useRef, useState} from 'react';
import './Delivery.css'
import start from '../../logotypes/calendar.png'
import middle from '../../logotypes/deliver.png'
import finish from '../../logotypes/courier.png'
import blackCar from '../../logotypes/blackCar.png'
import redCar from '../../logotypes/redCar.png'
import plus from '../../logotypes/plus.png'
import minus from '../../logotypes/minus.png'

const Delivery = () => {
    const [activeShipping, setActiveShipping] = useState(false)
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
    useEffect(() => {
        setDate(formattedDate)
    }, [])

    const shippingInfo = ()=> {
        if (activeShipping === false){
            refs[0].current.classList.add('nonActive')
            setActiveShipping(true)
        } else {
            refs[0].current.classList.remove('nonActive')
            setActiveShipping(false)

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
            <div id="ShippingInfo">
                <img src={blackCar} alt=""/>
                <h4>Shipping Information</h4>
                <img id="plus" src={plus} alt="" onClick={shippingInfo}/>
            </div>
            <div ref={refs[0]} id="shippingDetails">
                <h4>Australian Residents</h4>
                <h4>Shipping Cost</h4>
                <p>Residents of Australia receive Free Australia Post Tracked Express Shipping on all orders!</p>
                <h4>Delivery Time</h4>
                <p>Orders are dispatched same day when placed before 4pm AEST. Express Shipping is 1-4 business days for delivery.</p>
                <h4>Tracking your order</h4>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>
            </div>
        </div>
    );
};

export default Delivery;