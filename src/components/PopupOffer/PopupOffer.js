import React, {useEffect, useState} from 'react';
import './PopupOffer.css'

const PopupOffer = ({setPopActive, setShiping, setReturn}) => {

    const [active, setActive] = useState(false)


    const onclick = (e) => {
        e.preventDefault()
        e.target.reset()
        setActive(true)
        setTimeout(() => {
            setPopActive(false)
        }, 3000)

    }


    return (
        <div className="popupOffer" onClick={() => setPopActive(false)}>
            <div className="offerContainer" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onclick}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Phone"/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <input type="checkbox"/> <p>I have read the <span onClick={() => setShiping(true)}>Shipping Information</span> and
                        accept the <span onClick={()=> setReturn(true)}>Return Policy</span></p>
                    </div>
                    <button>Buy now</button>
                </form>
                {active && <div className="Thank">
                    Thank you for your order. Our manager will contact you shortly
                </div>}
            </div>
        </div>
    );
};

export default PopupOffer;