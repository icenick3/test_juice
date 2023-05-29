import React from 'react';
import './SideMenu.css'

const SideMenu = ({activeSideMenu, setActiveSideMenu, setReturn, setShiping ,setAbout, setContactUs, setFAQ}) => {

    return (
        <div className={activeSideMenu ? "sideMenu" : "sideMenu nonSideMenu"}>
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
                }}>About us</p>
                <p onClick={()=> {
                    setContactUs(true)
                    setActiveSideMenu(false)
                }}>Contact Us</p>
                <p onClick={()=> {
                    setFAQ(true)
                    setActiveSideMenu(false)
                }}>FAQ's</p>
                <p onClick={()=> {
                    setReturn(true)
                    setActiveSideMenu(false)
                }}>Return Policy</p>
                <p onClick={()=> {
                    setShiping(true)
                    setActiveSideMenu(false)
                }}>Shipping Information</p>
                <ul>
                    <li>support@samsety.shop</li>
                    <li>206 Duvernoy St, Constantia Park, Pretoria, 0010, South Africa</li>
                    <li>Cell: +27 (0) 87 012 5788</li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;