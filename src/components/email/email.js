import React, {useRef, useState} from 'react';
import './email.css'


const Email = () => {

    const ref = useRef(null)
    const [mail, setMail] = useState(null)
    const onsubmit = (e) => {
        e.preventDefault()
        ref.current.reset()
        setMail(true)
        setTimeout(()=> {
            setMail(false)
        }, 5000)
    }

    return (
        <div className="emailForm">
            <h1>Subscribe to our emails</h1>
            <p>Be the first to know about new collections and exclusive offers.</p>

            <form  ref={ref} onSubmit={onsubmit}>
                <div>
                    <input type="email" placeholder="Email"/>
                    <button> <img src="https://i.pinimg.com/originals/e0/94/1b/e0941b84982814c68987aed2f774c5a3.png" alt=""/></button>
                </div>
            </form>
            {mail && <p className="manager">Thank you! A manager will contact you shortly.</p>}
        </div>
    );
};

export default Email;