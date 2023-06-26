import React, {useEffect, useState} from 'react';
import './BlackHeader.css'

const BlackHeader = () => {

    const [text, setText] = useState(0)
    const sentences = ["VIITOR VIP | Vânzarea se încheie în 8 ore!", "Livrare gratuită în toată lumea | Retur gratuit în 30 de zile"];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(text === 0 ? 1 : 0);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [text])

    return (
        <div className="BlackHeader">
            <h1 className='text-change'>
                Free Shipping on All Orders in Europe!
            </h1>
        </div>
    );
};

export default BlackHeader;