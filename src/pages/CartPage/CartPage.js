import React, {useRef, useState} from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import BlackFooter from "../../components/BlackFooter/BlackFooter";
import './CartPage.css'
import { Puff } from 'react-loader-spinner';

const CartPage = ({color, setShowCart, showCart, showCartFirst, src}) => {

    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setTimeout(()=>{
            setLoading(false);
        },9000)
    };

    return (
        <div className={showCartFirst ? "cart" : "cart  sss"}>
            {loading && (
                <div className="loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Puff type="Puff" color="#477cdc" height={100} width={100} />
                </div>
            )}
            <div className= "frameBlock">
                <iframe
                    onLoad={handleLoad}
                    scrolling="no"
                    src={src}
                    frameBorder="0"/>
                <div className="closeText"></div>
            </div>
        </div>
    );
};

export default CartPage;