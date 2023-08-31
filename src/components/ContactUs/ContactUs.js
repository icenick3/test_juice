import React, {useState} from 'react';
import './ContactUs.css'
import {useTranslation} from "react-i18next";

const ContactUs = ({setContactUs}) => {

    const [active, setActive] = useState(false)

    const { t } = useTranslation()
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
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setContactUs(false)}/>
                <h1>{t("Contact")}</h1>
                {active && <p>
                    {t("Thanks")}
                </p>}
                <form onSubmit={onsubmit}>
                    <div>
                        <input type="text" placeholder={t("Name")}/>
                        <input type="email" placeholder={t("Email")}/>
                    </div>
                    <input className="phone" type="text" placeholder={t("Phone")}/>
                    <textarea  cols="30" rows="10" placeholder={t("Message")}>

                </textarea>
                    <button>{t("Send")}</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;