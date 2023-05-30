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

    const href = document.querySelector('#buttonOffer').href

    return (
        <div ref={popRef} id="botPopup">
            <div id="arrow" onClick={handleScrollToTop}>
                <img src="https://loveriq.online/sweep/za1/free-icon-down-arrow-54785.png" alt=""/>
            </div>
            <div id="botPopupMain">
                <div id="popupContainer">
                    <img src="https://i.pinimg.com/originals/5e/61/31/5e613144aec7cce60cd2b9af4b7b2ecf.png" alt=""/>
                    <div>
                        <h2>Telescopic Folding Fan</h2>
                        <p>R 195 <span> R 450</span></p>
                    </div>
                </div>
                <div id="botPopupSelect">
                    <select id="selectPopup">
                        <option value="White">White</option>
                        <option value="Green">Green</option>
                    </select>
                    <a id="btn" href={href}>
                        <img src="https://loveriq.online/sweep/za1/whiteBag.png" alt=""/>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BotPopup;