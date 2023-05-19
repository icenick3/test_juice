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


const ProductPage = () => {

    const [returnPolicy, setReturn] = useState(false)
    const [shiping, setShiping] = useState(false)
    const [popActive, setPopActive] = useState(false)
    console.log(returnPolicy)

    useEffect(()=>{
        if (returnPolicy){
            document.querySelector('.returnPolicy').classList.add('show')
            document.querySelector('.returnBlock').classList.add('show')

        }else {
            document.querySelector('.returnPolicy').classList.remove('show')
            document.querySelector('.returnBlock').classList.remove('show')

        }
    },[returnPolicy])

    useEffect(()=>{
        if (shiping){
            document.querySelector('.returnPolicy1').classList.add('show')
            document.querySelector('.returnBlock1').classList.add('show')

        }else {
            document.querySelector('.returnPolicy1').classList.remove('show')
            document.querySelector('.returnBlock1').classList.remove('show')

        }
    },[shiping])

    useEffect(()=>{
        if (popActive){
            document.querySelector('.popupOffer').classList.add('show')
            document.querySelector('.offerContainer').classList.add('show')

        }else {
            document.querySelector('.popupOffer').classList.remove('show')
            document.querySelector('.offerContainer').classList.remove('show')

        }
    },[popActive])


    return (
        <div id="productPage">
            <BlackHeader/>
            <Header setPopActive={setPopActive}/>
            <div className="description">
                <ProductImages/>
                <MainInformation/>
            </div>
            <AboutJuicer/>
            <Comments/>
            <div id="preFooterBlock">
                <PreFooter/>
            </div>
            <div id="blackFooterContainer">
                <BlackFooter setReturn={setReturn} setShiping={setShiping}/>
            </div>
            <BotPopup/>
             <ReturnPolicy setReturn={setReturn}/>
             <Shiping setShiping={setShiping}/>
            <PopupOffer/>
        </div>
    );
};

export default ProductPage;