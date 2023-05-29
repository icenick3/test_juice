import React, {useEffect, useRef} from 'react';
import './botPopup.css'



const BotPopup = ({setPopActive, price}) => {

    const popRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                popRef.current.style.transform = "translateY(0)"

            } else {
                popRef.current.style.transform = "translateY(200%)"
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        const position = document.documentElement.scrollTop || document.body.scrollTop;
        if (position > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, position - position / 16);
        }
    };
    const handleScrollToTop = () => {
        scrollToTop()
    };

    return (
        <div ref={popRef} id="botPopup">
            <div id="arrow" onClick={handleScrollToTop}>
                <img src="https://loveriq.online/sweep/za1/free-icon-down-arrow-54785.png" alt=""/>
            </div>
            <div id="botPopupMain">
                <div id="popupContainer">
                    <img src="https://loveriq.online/sweep/za1/img.jpg" alt=""/>
                    <div>
                        <h2>JuiceGenie - Portable Electric Blender</h2>
                        {!price &&<p>£ 59.99</p>}
                        {price &&<p>£ 2.99<span>£ 59.99</span></p>}
                    </div>
                </div>
                <div id="botPopupSelect">
                    <select id="selectPopup">
                        <option value="White">White</option>
                        <option value="Pink">Pink</option>
                    </select>
                    <a id="btn" href={"offer"}>
                        <img src="https://loveriq.online/sweep/za1/whiteBag.png" alt=""/>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BotPopup;