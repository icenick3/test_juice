import React, {useEffect, useRef} from 'react';
import './SideMenu.css'
import {useTranslation} from "react-i18next";

const SideMenu = ({activeSideMenu, setActiveSideMenu, setReturn, setShiping ,setAbout, setContactUs, setFAQ}) => {

    const { t } = useTranslation()

    const sideRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            if (sideRef.current){
                sideRef.current.style.opacity = "1"
            }
        },2000)

    },[])

    return (
        <div ref={sideRef} className={activeSideMenu ? "sideMenu" : "sideMenu nonSideMenu"}>
            <div className="containerSideMenu">
                <div className="menuImg">
                    <img id='withFilter' src="https://loveriq.online/sweep/za1/menu-bar.png" alt=""/>
                    <h3>Menu</h3>
                    <div id="close" onClick={()=> setActiveSideMenu(false)}>
                        <img src="https://loveriq.online/sweep/za1/close-cross.png" alt=""/>
                    </div>
                </div>
                <p onClick={()=> {
                    setAbout(true)
                    setActiveSideMenu(false)
                }}>{t("PPolicy")}</p>
                <p onClick={()=> {
                    setContactUs(true)
                    setActiveSideMenu(false)
                }}>{t("ContactUS")}</p>
                <p onClick={()=> {
                    setFAQ(true)
                    setActiveSideMenu(false)
                }}>{t("TermsOfService")}</p>
                <p onClick={()=> {
                    setReturn(true)
                    setActiveSideMenu(false)
                }}>{t("RPolicy")}</p>
                <ul>
                    <li>{t("FooterText1")}</li>
                    <li>{t("FooterText2")}</li>
                    <li>{t("FooterText3")}</li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;