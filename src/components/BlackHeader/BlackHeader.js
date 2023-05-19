import React, {useEffect, useState} from 'react';
import './BlackHeader.css'

const BlackHeader = () => {

    const [text, setText] = useState(0)
    const sentences = ["FUTURE VIP | Sale ends in 8 hours!", "Free shipping worldwide | 30-Day free returns"];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(text === 0 ? 1 : 0);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [text])

    return (
        <div className="BlackHeader">
            <h1 className='text-change'>
                {sentences[text]}
            </h1>
        </div>
    );
};

export default BlackHeader;