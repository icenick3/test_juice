import React, {useState} from 'react';
import './ContactUs.css'

const ContactUs = ({setContactUs}) => {

    const [active, setActive] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()
        setActive(true)
        e.target.reset()
        setTimeout(()=>{
            setContactUs(false)
            setActive(false)
        },2000)
    }
    return (
        <div className="returnPolicy3" onClick={() => setContactUs(false)}>
            <div className="returnBlock3" onClick={(e)=> e.stopPropagation()}>
                <h1>Contact</h1>
                {active && <p>
                    Thanks for contacting us. We'll get back to you as soon as possible.
                </p>}
                <form onSubmit={onsubmit}>
                    <div>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <input className="phone" type="text" placeholder="Phone"/>
                    <textarea  cols="30" rows="10" placeholder="Message">

                </textarea>
                    <button>Send</button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;