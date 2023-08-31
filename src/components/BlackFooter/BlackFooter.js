import React, {useState} from 'react';
import './BlackFooter.css'
import {useTranslation} from "react-i18next";

const BlackFooter = ({setReturn, setShiping, setAbout, setContactUs, setFaq}) => {

    const [active, setActive] = useState(false)
    const {t} = useTranslation()

    const onsubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 5000)
    }

    return (
        <div id="blackFooter">
            <div id="mainBlackFooter">
                <div className="logCon">
                    <img className="logoFooter"
                         src="https://i.pinimg.com/originals/86/29/8c/86298cc17d532a4786c15ae8c9f655dc.png" alt=""/>
                </div>

                <div id="SEFooter">
                    <h2>Our Links</h2>
                    <ul>
                        <li onClick={() => setAbout(true)}>{t("PPolicy")}</li>
                        <li onClick={() => setContactUs(true)}>{t("ContactUS")}</li>
                        <li onClick={() => setFaq(true)}>{t("TermsOfService")}</li>
                        <li onClick={() => setReturn(true)}>{t("RPolicy")}</li>
                    </ul>
                </div>
                {/*<div id="FEFooter">*/}
                {/*    <p>{t("FooterText1")}</p>*/}
                {/*    <br/>*/}
                {/*    <p>{t("FooterText2")}</p>*/}
                {/*    <br/>*/}
                {/*    <p>{t("FooterText3")}</p>*/}
                {/*</div>*/}
                <div className="footDesc">
                    <h2>Our promise</h2>
                    <p>At Ear Haven, our promise is simple: top-quality headphones, exceptional customer service, and your
                        happiness as our priority. We're committed to superior products with unmatched comfort and sound
                        quality, and dedicated to innovation and satisfaction. Shop with confidence knowing you're in good
                        hands.</p>
                </div>
            </div>

        </div>
    );
};

export default BlackFooter;