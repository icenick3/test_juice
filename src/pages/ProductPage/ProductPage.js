import React, {useEffect, useState} from 'react';
import BlackHeader from "../../components/BlackHeader/BlackHeader";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";
import MainInformation from "../../components/MainInformation/MainInformation";
import './ProductPage.css'
import BlackFooter from "../../components/BlackFooter/BlackFooter";
import BotPopup from "../../components/botPopup/botPopup";
import Comments from "../../components/Comments/Comments";
import ReturnPolicy from "../../components/ReturnPolicy/ReturnPolicy";
import Shiping from "../../components/Shiping/Shiping";
import PopupOffer from "../../components/PopupOffer/PopupOffer";
import SideMenu from "../../components/SideMenu/SideMenu";
import AboutUsPopup from "../../components/AboutUsPopup/AboutUsPopup";
import ContactUs from "../../components/ContactUs/ContactUs";
import FAQ from "../../components/FAQ/FAQ";
import AirPhones from "../../components/AirPhones/AirPhones";
import CartPage from "../CartPage/CartPage";
import Email from "../../components/email/email";


const ProductPage = () => {

    const [count, setCount] = useState(0)

    const [showCart, setShowCart] = useState(false)
    const [showCartFirst, setShowCartFirst] = useState(true)
    const [returnPolicy, setReturn] = useState(false)
    const [about, setAbout] = useState(false)
    const [faq, setFaq] = useState(false)
    const [contactUS, setContactUS] = useState(false)
    const [click, setClick] = useState(false)
    const [click2, setClick2] = useState(false)
    const [activeSideMenu, setActiveSideMenu] = useState(false)
    const [shiping, setShiping] = useState(false)
    const [popActive, setPopActive] = useState(false)
    const [price, setPrice] = useState(false)

    const [color2, setColor2] = useState('Black')


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

    const clicking = () => {
        if (click) {
            setClick(false)
        } else {
            setClick(true)
        }
    }
    const clicking2 = () => {
        if (click2) {
            setClick2(false)
        } else {
            setClick2(true)
        }
    }


    return (
        <div id="productPage">
            <BlackHeader/>
            <Header setReturn={setReturn}
                    setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFAQ={setFaq}
                    setPopActive={setPopActive} setActiveSideMenu={setActiveSideMenu}
                    color2={color2} setColor2={setColor2} setShowCart={setShowCart}
                    setShowCartFirst={setShowCartFirst}/>

            {!showCart && <div>
                <div className="description">
                    <ProductImages count={count}/>
                    <MainInformation setPopActive={setPopActive} setprice={setPrice} setCount={setCount} color2={color2}
                                     setColor2={setColor2}  setShowCart={setShowCart}
                                     setShowCartFirst={setShowCartFirst}/>
                </div>
                <div className="addDiv">
                    <h1>
                        To Learn Everything About AirBeats™
                    </h1>
                    <div className="dodDiv">
                        <div className="allBlocks" onClick={()=> clicking()}>
                            <div className="blockImg">
                                <img src="https://i.pinimg.com/originals/f9/71/32/f971329d1e2e37ec26a4edbf9fdf7b36.png"
                                     alt=""/>
                            </div>
                            <p>Highlights</p>
                        </div>
                        {click && <ul>
                            <li><strong>Superior sound quality:</strong> Enjoy crisp, clear audio with rich
                                bass and full-bodied tones.
                            </li>
                            <li><strong>Wireless connectivity:</strong> Connect seamlessly to your Apple Air
                                MAS device for a wireless listening experience.
                            </li>
                            <li><strong>Comfortable fit:</strong> Ergonomically designed to provide a secure
                                and comfortable fit for extended periods of wear.
                            </li>
                            <li><strong>Long battery life:</strong> With up to 8 hours of playback time and
                                quick charging, you can enjoy your music all day long.
                            </li>
                            <li><strong>Built-in microphone:</strong> Take calls hands-free with the built-in
                                microphone, and enjoy clear conversations with noise reduction technology.
                            </li>
                        </ul>}
                    </div>

                    <div className="dodDiv2">
                        <div className="allBlocks" onClick={()=> clicking2()}>
                            <div className="blockImg">
                                <img src="https://i.pinimg.com/originals/b7/f8/4b/b7f84bec72db759d26a57b377291d7a6.png"
                                     alt=""/>
                            </div>
                            <p>SPECIFICATIONS</p>

                        </div>
                        {click2 && <div className="accordion">
                            <p>Wireless Type: bluetooth</p><p>Volume Control: No</p><p>Vocalism Principle:
                            Dynamic</p><p>Style: Over the Ear</p><p>Origin: US/UAE/EU</p><p>Control Button: No</p>
                            <p>Communication: Wireless</p><p>Certification: CE</p><p>Brand Name: YP</p><p>Active
                            Noise-Cancellation: No</p>
                        </div>}
                    </div>
                </div>
                <AirPhones color2={color2} setColor2={setColor2}/>
                <Email/>
                <Comments/>
            </div>}
            {/*<AboutJuicer/>*/}

            {/*<div id="preFooterBlock">*/}
            {/*    <PreFooter/>*/}
            {/*</div>*/}
            <div id="blackFooterContainer">
                <BlackFooter setReturn={setReturn} setShiping={setShiping} setAbout={setAbout}
                             setContactUs={setContactUS} setFaq={setFaq}/>
            </div>
            {!showCart && <BotPopup setPopActive={setPopActive} price={price} color2={color2} setColor2={setColor2}
                                    setCount={setCount}  setShowCart={setShowCart}
                                    setShowCartFirst={setShowCartFirst}/>
            } <ReturnPolicy setReturn={setReturn}/>
            <Shiping setShiping={setShiping}/>
            <PopupOffer setPopActive={setPopActive} setReturn={setReturn} setShiping={setShiping}/>
            <AboutUsPopup setAbout={setAbout}/>
            <ContactUs setContactUs={setContactUS}/>
            <FAQ setFAQ={setFaq}/>
            {/*<PopupChance  setSpiner={setSpiner} setActiveCoupon={setActiveCoupon}/>*/}
            {/*<Coupon activeCoupon={activeCoupon}/>*/}
            <SideMenu activeSideMenu={activeSideMenu} setActiveSideMenu={setActiveSideMenu} setReturn={setReturn}
                      setShiping={setShiping} setAbout={setAbout} setContactUs={setContactUS} setFAQ={setFaq}/>

        </div>
    );
};

export default ProductPage;