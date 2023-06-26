import React, {useEffect, useRef} from 'react';
import './botPopup.css'



const BotPopup = ({setPopActive, price, setColor2, color2, setCount, setSrc, setShowCart, setShowCartFirst}) => {

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

    const onChange = (e) => {
        setColor2(e.target.value)
        if (e.target.value === 'Ice Blue'){
            setCount(0)
            setSrc(document.getElementById("buttonOfferBlue").href)
        } else if (e.target.value === 'Modern Grey'){
            setCount(2)
            setSrc(document.getElementById("buttonOfferGrey").href)
        } else if (e.target.value === 'Pink Lotus'){
            setCount(1)
            setSrc(document.getElementById("buttonOfferPink").href)
        } else if (e.target.value === 'Sapphire Blue'){
            setCount(3)
            setSrc(document.getElementById("buttonOfferPurple").href)
        } else if (e.target.value === 'Youth Green'){
            setCount(4)
            setSrc(document.getElementById("buttonOfferGreen").href)
        }
    }

    return (
        <div ref={popRef} id="botPopup">
            <div id="arrow" onClick={handleScrollToTop}>
                <img src="https://loveriq.online/sweep/za1/free-icon-down-arrow-54785.png" alt=""/>
            </div>
            <div id="botPopupMain">
                <div id="popupContainer">
                    {color2 === "Ice Blue" && <img src="https://i.pinimg.com/originals/7f/be/94/7fbe94a15ca81d226cdf8a7dcebea36f.jpg" alt=""/>}
                    {color2 === "Pink Lotus" && <img src="https://i.pinimg.com/originals/54/10/f6/5410f66b73596ed5b9ebaa027d62368d.jpg" alt=""/>}
                    {color2 === "Modern Grey" && <img src="https://i.pinimg.com/originals/b1/bf/61/b1bf61e7d50048f19441fffe6ebe9828.jpg" alt=""/>}
                    {color2 === "Sapphire Blue" && <img src="https://i.pinimg.com/originals/b3/c4/46/b3c44681e4e0ea04d0041437de93a69c.jpg" alt=""/>}
                    {color2 === "Youth Green" && <img src="https://i.pinimg.com/originals/6d/9a/49/6d9a49056cc81a2a6998c2602f209c1f.jpg" alt=""/>}
                    <div>
                        <h2>ACEFLOWS™ - CRYSTAL EARBUDS</h2>
                        <p><span> £ 34,99</span> £ 6,99</p>
                    </div>
                </div>
                <div id="botPopupSelect">
                    <select name="select" id="select" onChange={onChange}>
                        <option value="Ice Blue">Ice Blue</option>
                        <option value="Pink Lotus">Pink Lotus</option>
                        <option value="Modern Grey">Modern Grey</option>
                        <option value="Sapphire Blue">Sapphire Blue</option>
                        <option value="Youth Green">Youth Green</option>
                    </select>
                    <a  onClick={()=>{
                       setShowCart(true)
                        setShowCartFirst(false)
                    }}
                    id="btn" >
                        Buy now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BotPopup;