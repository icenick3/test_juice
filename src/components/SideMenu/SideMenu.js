import React, {useEffect, useRef} from 'react';
import './SideMenu.css'

const SideMenu = ({activeSideMenu, setActiveSideMenu, setReturn, setShiping ,setAbout, setContactUs, setFAQ}) => {


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
                }}>Privacy Policy</p>
                <p onClick={()=> {
                    setContactUs(true)
                    setActiveSideMenu(false)
                }}>Contact Us</p>
                <p onClick={()=> {
                    setFAQ(true)
                    setActiveSideMenu(false)
                }}>Terms of Service</p>
                <p onClick={()=> {
                    setReturn(true)
                    setActiveSideMenu(false)
                }}>Return policy</p>
                <ul>
                    <li>support@sound.scape</li>
                    <li>49 Dalberg Rd, London SW2 1AJ, Great Britain</li>
                    <li>Cell: +447909777249</li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;