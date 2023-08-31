import React, {useEffect, useRef, useState} from 'react';
import './Delivery.css'
import {useTranslation} from "react-i18next";

const Delivery = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const { t } = useTranslation()

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const formattedDate = `${day} ${month}`;

    const futureDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
    const futureMonth = futureDate.getMonth() + 1; // Додаємо 1, оскільки місяці в JavaScript починаються з 0
    const futureDay = futureDate.getDate();
    const month2 = futureDate.toLocaleString('default', {month: 'short'});
    const formattedDeliveryDate = `${futureDay} ${month2}`;


    const onclick = (act, setAct) => {
        if (act) {
            setAct(false)

        } else {
            setAct(true)
        }
    }

    return (
        <div id="delivery">
            <h1>{t("DelTitle")}</h1>
            <br/>
            <p className="volcano">{t("DelText1")}</p>
            <br/>
            <img className="smallIMG" src="https://i.pinimg.com/originals/e3/6c/a9/e36ca9ae7fb456681638b8c632b895dc.gif" alt=""/>
            <br/>
            <p className="volcano">{t("DelText2")}</p>
            <br/>
            <img className="smallIMG" src="https://i.pinimg.com/originals/9a/c4/cb/9ac4cb8b335d0c844bedca615a9c106f.gif" alt=""/>
            <img className="bigPhoto"  src="https://i.pinimg.com/originals/3f/f7/c2/3ff7c2b9c7cc06f2e28264a8a124da00.webp" alt=""/>
            <h2 className="h2II">{t("DelText3")}</h2>
            <h3 className="h3II">{t("DelText4")}</h3>
            <p className="volcano">{t("DelText5")}</p>
            <img className="bigPhoto"  src="https://i.pinimg.com/originals/60/57/f8/6057f8f8b5b20d4b29a8ee593f3186d2.webp" alt=""/>
            <h3 className="h3II">{t("DelText6")}</h3>
            <p className="volcano">{t("DelText7")}</p>
            <h3 className="h3II">{t("DelText8")}</h3>
            <p className="volcano">{t("DelText9")}</p>
            <h3 className="h3II">{t("DelText10")}</h3>
            <p>{t("DelText11")}
            </p>
            <h3 className="h3II">{t("DelText12")}</h3>
            <p>{t("DelText13")}</p>
            <h2 className="h2II h2scep">{t("DelText14")}</h2>
            <img  className="bigPhoto" src="https://i.pinimg.com/originals/a4/6f/d3/a46fd377d20829336d6228ecd0501080.webp" alt=""/>
            <div className="boxInfo boxMGM" onClick={() => onclick(active3, setActive3)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/a6/18/cf/a618cf7e01528bab0594e83bc2082f01.png" alt=""/>
                    <h2>{t("DelText15")}</h2>
                    {!active3 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active3 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active3 && <p><span>{t("DelText16")}</span></p>}
                {active3 && <p><span>{t("DelText17")} </span></p>}
                {active3 && <p><span>{t("DelText18")}</span></p>}
            </div>
            <div className="boxInfo" onClick={() => onclick(active4, setActive4)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/c8/a2/7b/c8a27be8937524dd49897e2797b1f138.png" alt=""/>
                    <h2>{t("DelText19")}</h2>
                    {!active4 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active4 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active4 && <h3>{t("DelText20")}</h3>}
                {active4 &&
                    <p>{t("DelText21")}<span>{t("DelText22")}</span>
                    </p>}
                {active4 && <p>{t("DelText23")} <span>{t("DelText24")}</span></p>}
            </div>
            <div className="boxInfo" onClick={() => onclick(active5, setActive5)}>
                <div className="boxFlex">
                    <img src="https://i.pinimg.com/originals/c8/a2/7b/c8a27be8937524dd49897e2797b1f138.png" alt=""/>
                    <h2>{t("DelText25")}</h2>
                    
                    {!active5 && <img className="arrowDown"
                                      src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                      alt=""/>}
                    {active5 && <img className="arrowDown2"
                                     src="https://i.pinimg.com/originals/b1/26/d4/b126d4e20f8cb9b1781d42281ef8e84f.png"
                                     alt=""/>}
                </div>
                {active5 && <p> - <span>{t("DelText26")}</span>  {t("DelText27")}<span>{t("DelText28")}</span></p>}
                {active5 && <p>- {t("DelText29")} <span>24/7</span></p>}
            </div>
        </div>
    );
};

export default Delivery;