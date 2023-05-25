import React, {useEffect, useState} from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";
import MainInformation from "../../components/MainInformation/MainInformation";
import './ProductPage.css'
import PreFooter from "../../components/PreFooter/PreFooter";
import BlackFooter from "../../components/BlackFooter/BlackFooter";
import OurPolicy from "../../components/OurPolicy/OurPolicy";
import BotPopup from "../../components/botPopup/botPopup";
import AboutJuicer from "../../components/AboutJuicer/AboutJuicer";
import Comments from "../../components/Comments/Comments";
import ReturnPolicy from "../../components/ReturnPolicy/ReturnPolicy";
import Shiping from "../../components/Shiping/Shiping";
import PopupOffer from "../../components/PopupOffer/PopupOffer";
import SideMenu from "../../components/SideMenu/SideMenu";
import AboutUsPopup from "../../components/AboutUsPopup/AboutUsPopup";
import ContactUs from "../../components/ContactUs/ContactUs";
import FAQ from "../../components/FAQ/FAQ";


const ProductPage = () => {

    const [returnPolicy, setReturn] = useState(false)
    const [about, setAbout] = useState(false)
    const [faq, setFaq] = useState(false)
    const [contactUS, setContactUS] = useState(false)
    const [activeSideMenu, setActiveSideMenu] = useState(false)
    const [shiping, setShiping] = useState(false)
    const [popActive, setPopActive] = useState(false)


    useEffect(() => {
        if (returnPolicy) {
            document.querySelector('.returnPolicy').classList.add('show')
            document.querySelector('.returnBlock').classList.add('show')

        } else {
            document.querySelector('.returnPolicy').classList.remove('show')
            document.querySelector('.returnBlock').classList.remove('show')

        }
    }, [returnPolicy])

    useEffect(() => {
        if (about) {
            document.querySelector('.returnPolicy2').classList.add('show')
            document.querySelector('.returnBlock2').classList.add('show')

        } else {
            document.querySelector('.returnPolicy2').classList.remove('show')
            document.querySelector('.returnBlock2').classList.remove('show')

        }
    }, [about])

    useEffect(() => {
        if (faq) {
            document.querySelector('.returnPolicy4').classList.add('show')
            document.querySelector('.returnBlock4').classList.add('show')

        } else {
            document.querySelector('.returnPolicy4').classList.remove('show')
            document.querySelector('.returnBlock4').classList.remove('show')

        }
    }, [faq])

    useEffect(() => {
        if (contactUS) {
            document.querySelector('.returnPolicy3').classList.add('show')
            document.querySelector('.returnBlock3').classList.add('show')

        } else {
            document.querySelector('.returnPolicy3').classList.remove('show')
            document.querySelector('.returnBlock3').classList.remove('show')

        }
    }, [contactUS])

    useEffect(() => {
        if (shiping) {
            document.querySelector('.returnPolicy1').classList.add('show')
            document.querySelector('.returnBlock1').classList.add('show')

        } else {
            document.querySelector('.returnPolicy1').classList.remove('show')
            document.querySelector('.returnBlock1').classList.remove('show')

        }
    }, [shiping])

    useEffect(() => {
        if (popActive) {
            document.querySelector('.popupOffer').classList.add('show')
            document.querySelector('.offerContainer').classList.add('show')

        } else {
            document.querySelector('.popupOffer').classList.remove('show')
            document.querySelector('.offerContainer').classList.remove('show')

        }
    }, [popActive])

    console.log(popActive)


    return (
        <div id="productPage">
            <BlackHeader/>
            <Header setPopActive={setPopActive} setActiveSideMenu={setActiveSideMenu}/>
            <div className="description">
                <ProductImages/>
                <MainInformation setPopActive={setPopActive}/>
            </div>
            <AboutJuicer/>
            <Comments/>
            <div id="preFooterBlock">
                <PreFooter/>
            </div>
            <div id="blackFooterContainer">
                <BlackFooter setReturn={setReturn} setShiping={setShiping} setAbout={setAbout}
                             setContactUs={setContactUS} setFaq={setFaq}/>
            </div>
            <BotPopup setPopActive={setPopActive}/>
            <ReturnPolicy setReturn={setReturn}/>
            <Shiping setShiping={setShiping}/>
            <PopupOffer setPopActive={setPopActive}/>
            <AboutUsPopup setAbout={setAbout}/>
            <ContactUs setContactUs={setContactUS}/>
            <FAQ setFAQ={setFaq}/>
            <SideMenu activeSideMenu={activeSideMenu} setActiveSideMenu={setActiveSideMenu} setReturn={setReturn}
                      setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFAQ={setFaq}/>
        </div>
    );
};

export default ProductPage;