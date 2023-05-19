import React, {useEffect, useRef, useState} from 'react';
import './Delivery.css'

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
            plusRef.current.src = "https://loveriq.online/sweep/za1/minus.png"
            carRef.current.src = "https://loveriq.online/sweep/za1/redCar.png"
            setActivePlus(false)
        } else {
            plusRef.current.src = "https://loveriq.online/sweep/za1/plus.png"
            carRef.current.src = "https://loveriq.online/sweep/za1/blackCar.png"
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
            plusRefReturn.current.src = "https://loveriq.online/sweep/za1/minus.png"
            returnRef.current.src = "https://loveriq.online/sweep/za1/redReturn.png"
            setActivePlusReturns(false)
        } else {
            plusRefReturn.current.src = "https://loveriq.online/sweep/za1/plus.png"
            returnRef.current.src = "https://loveriq.online/sweep/za1/blackReturn.png"
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
    const scrollToComments = () => {
        const commentsElement = document.getElementById('comments');
        if (commentsElement) {
            commentsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="delivery">
            <p id="deliveryDate">{formattedDeliveryDate}.<span> Estimated arrival</span></p>
            <div id="deliverySchema">
                <div id="startDelivery">
                    <img className="devLogo" src="https://loveriq.online/sweep/za1/calendar.png" alt=""/>
                </div>
                <div className="line">
                    <div className="fg"></div>
                </div>
                <div id="middleDelivery">
                    <img className="devLogo" src="https://loveriq.online/sweep/za1/deliver.png" alt=""/>
                </div>
                <div className="line">
                    <div className="fg"></div>
                </div>
                <div id="finishDelivery">
                    <img className="devLogo" src="https://loveriq.online/sweep/za1/courier.png" alt=""/>
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
                <img ref={carRef} src="https://loveriq.online/sweep/za1/blackCar.png" alt=""/>
                <h4>Shipping Information</h4>
                <img ref={plusRef} id="plus" src="https://loveriq.online/sweep/za1/plus.png" alt="" onClick={shippingInfo}/>
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
            <div className="Details">
                <img ref={returnRef} src="https://loveriq.online/sweep/za1/blackReturn.png" alt=""/>
                <h4>Returns</h4>
                <img ref={plusRefReturn} id="plus" src="https://loveriq.online/sweep/za1/plus.png" alt="" onClick={returnsInfo}/>
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
            <div className="Details">
                <img src="https://loveriq.online/sweep/za1/blackReviews.png" alt=""/>
                <h4>Reviews</h4>
                <img id="rating" src="https://loveriq.online/sweep/za1/starsPurple.png" alt=""/>
                <p>(35)</p>
                <img id="plusForRating" src="https://loveriq.online/sweep/za1/plus.png" alt="" onClick={scrollToComments}/>
            </div>
        </div>
    );
};

export default Delivery;