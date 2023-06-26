import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './ProductImages.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ProductImages = ({count}) => {

    const [dragg, setDragg] = useState(false)
    const [coordinat, setCoordinat] = useState(0)
    const [x, setX] = useState(null)
    const [track, setTrack] = useState(0)
    const photoRef = useRef()
    const [lastX, setLastX] = useState(null)
    const [width, setWidth] = useState(null)
    const difference = Math.abs(Math.trunc((coordinat - width) / width))
    const [photoBlock, setPhotoBlock] = useState(null)

    // const refs = [
    //     useRef(),
    //     useRef(),
    //     useRef(),
    //     useRef(),
    //     useRef(),
    //
    // ]
    // const hedRef = useRef();
    //
    // useEffect(() => {
    //     photoRef.current.style.left = `${coordinat}px`
    //     const parent = document.getElementById('photoBlock');
    //     setPhotoBlock(parent)
    //     setWidth(parent.clientWidth)
    //     if (coordinat === 0) {
    //         refs.map(ref => {
    //             ref.current.classList.remove('visible')
    //         })
    //         refs[0].current.classList.add('visible')
    //     } else if (coordinat === -width) {
    //         refs.map(ref => {
    //             ref.current.classList.remove('visible')
    //         })
    //         refs[1].current.classList.add('visible')
    //     } else if (coordinat === -2 * width) {
    //         refs.map(ref => {
    //             ref.current.classList.remove('visible')
    //         })
    //         refs[2].current.classList.add('visible')
    //     } else if (coordinat === -3 * width) {
    //         refs.map(ref => {
    //             ref.current.classList.remove('visible')
    //         })
    //         refs[3].current.classList.add('visible')
    //     } else if (coordinat === -4 * width) {
    //         refs.map(ref => {
    //             ref.current.classList.remove('visible')
    //         })
    //         refs[4].current.classList.add('visible')
    //     }
    //
    // }, [coordinat])
    //
    // const onMouseMove = (e) => {
    //     if (dragg) {
    //         if (lastX !== null) {
    //             if (e.clientX < lastX) {
    //                 if ((lastX - e.clientX) > 0) {
    //                     setCoordinat(coordinat - (lastX - e.clientX))
    //                 } else if ((lastX - e.clientX) < 0) {
    //                     setCoordinat(coordinat - Math.abs((lastX - e.clientX)))
    //                 }
    //             } else if (e.clientX > lastX) {
    //                 if ((lastX - e.clientX) > 0) {
    //                     setCoordinat(coordinat + (lastX - e.clientX))
    //                 } else if ((lastX - e.clientX) < 0) {
    //                     setCoordinat(coordinat + Math.abs((lastX - e.clientX)))
    //                 }
    //             }
    //         }
    //         setTrack(x - e.clientX)
    //     }
    //     setLastX(e.clientX)
    // }
    //
    // const onMouseDOwn = (e) => {
    //     setX(e.clientX)
    //     e.preventDefault()
    //     setDragg(true)
    //     photoBlock.style.transition = ""
    //     photoBlock.style.cursor = "grabbing"
    // }
    //
    // const onMouseLeave = () => {
    //     photoBlock.style.cursor = ""
    //     photoBlock.style.transition = "left 0.3s ease-out"
    //     setTrack(0)
    //     setDragg(false)
    //     if (Math.abs(coordinat) < width && track > 100) {
    //         setCoordinat(-width)
    //     }
    //     if (Math.abs(coordinat) > width && track > 100) {
    //         if (difference < 5) {
    //             setCoordinat(-(width * difference))
    //         } else if (difference > 4) {
    //             setCoordinat(-(width * 4))
    //         }
    //     }
    //     if (Math.abs(coordinat) < width && track < 100 && track > 0) {
    //         setCoordinat(0)
    //     }
    //     if (Math.abs(coordinat) < width && track < 0 && track > -100) {
    //         setCoordinat(-width)
    //     }
    //     if (Math.abs(coordinat) < width && track < -100) {
    //         setCoordinat(0)
    //     }
    //     if (Math.abs(coordinat) > width && track < 100 && track > 0) {
    //         if (difference < 5) {
    //             setCoordinat(-(difference * width) + width)
    //         } else if (difference > 4) {
    //             setCoordinat(-(width * 4))
    //         }
    //     }
    //     if (Math.abs(coordinat) > width && track < 0 && track > -100) {
    //         if (difference < 5) {
    //             setCoordinat(-(difference * width))
    //         }
    //     }
    //     if (Math.abs(coordinat) > width && track < -100) {
    //         if (difference < 5) {
    //             setCoordinat(-(difference * width) + width)
    //         }
    //     }
    // }

    // const onclick = (e) => {
    //     if (e.target.src === refs[0].current.src) {
    //         setCoordinat(0)
    //     } else if (e.target.src === refs[1].current.src) {
    //         setCoordinat(-width)
    //     } else if (e.target.src === refs[2].current.src) {
    //         setCoordinat(-width * 2)
    //     } else if (e.target.src === refs[3].current.src) {
    //         setCoordinat(-width * 3)
    //     } else if (e.target.src === refs[4].current.src) {
    //         setCoordinat(-width * 4)
    //     }
    //     refs.map(ref => {
    //         if (ref.current.src === e.target.src) {
    //             ref.current.classList.add('visible')
    //         } else {
    //             ref.current.classList.remove('visible')
    //         }
    //     })
    // }


    const CustomPrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                id="cusPrev"
                style={{...style, display: 'block'}}
                onClick={onClick}
            />
        );
    };

    const CustomNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                id="cusNext"
                style={{...style, display: 'block'}}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>, // Компонент для наступної стрілки
        arrows:  true

    };

    const photosArr = [
        "https://i.pinimg.com/originals/7f/be/94/7fbe94a15ca81d226cdf8a7dcebea36f.jpg",
        "https://i.pinimg.com/originals/54/10/f6/5410f66b73596ed5b9ebaa027d62368d.jpg",
        "https://i.pinimg.com/originals/b1/bf/61/b1bf61e7d50048f19441fffe6ebe9828.jpg",
        "https://i.pinimg.com/originals/b3/c4/46/b3c44681e4e0ea04d0041437de93a69c.jpg",
        "https://i.pinimg.com/originals/6d/9a/49/6d9a49056cc81a2a6998c2602f209c1f.jpg",
        "https://i.pinimg.com/originals/9d/3a/84/9d3a84620f3c7fabeb6e703ccc2a1407.jpg",
        "https://i.pinimg.com/originals/2b/24/c9/2b24c95eb6674dfb72d40384b8ef5d65.jpg",
        "https://i.pinimg.com/originals/e2/3d/1a/e23d1a2673414ea3a79bcd400ee57276.jpg",
        "https://i.pinimg.com/originals/34/dd/12/34dd12b16345bd4080b64afb23028e7c.jpg"
    ]

    const mainRef = useRef()
    useEffect(()=>{
        mainRef.current.slickGoTo(count)
    },[count])
    return (
        <div id="photoContainer">
            <div id="position">
                <div className="sliderDiv">
                    <Slider  {...settings} ref={mainRef}>
                        {photosArr.map(elem => <div className="sliderBlock">
                            <div>
                                <img src={elem} alt=""/>
                            </div>
                        </div>)}
                    </Slider>
                </div>

                {/*<div id="mainPhotoContainer" onMouseMove={onMouseMove} onMouseDown={onMouseDOwn}*/}
                {/*     onMouseLeave={onMouseLeave}*/}
                {/*     onMouseUp={onMouseLeave}>*/}
                {/*    <div ref={photoRef} id="photoBlock">*/}
                {/*        <img className="mainPhoto "*/}
                {/*             src="https://i.pinimg.com/originals/2b/dd/e4/2bdde4a528d109fde5f25b6931a6c972.jpg" alt=""/>*/}
                {/*        <img className="mainPhoto "*/}
                {/*             src="https://i.pinimg.com/originals/5c/e2/98/5ce298e475e5c841615f6b7b30df42b3.jpg" alt=""/>*/}
                {/*        <img className="mainPhoto "*/}
                {/*             src="https://i.pinimg.com/originals/de/1c/7b/de1c7bfe15b086726bffcf02b88ab11f.jpg" alt=""/>*/}
                {/*        <video className="mainPhoto" playsInline="playsinline" controls="controls" autoPlay="autoplay"*/}
                {/*               preload="none"*/}
                {/*               muted="muted" aria-label="Volcano Jellyfish Aroma Diffuser"*/}
                {/*               poster="https://i.pinimg.com/originals/23/f3/d0/23f3d08cc2b78661db7a68799798d9b5.jpg">*/}
                {/*            <source*/}
                {/*                src="https://loveriq.online/sweep/za1/1.mp4"*/}
                {/*                type="video/mp4"/>*/}
                {/*            <img src="https://i.pinimg.com/originals/23/f3/d0/23f3d08cc2b78661db7a68799798d9b5.jpg"/>*/}
                {/*        </video>*/}
                {/*        <video className="mainPhoto" playsInline="playsinline" controls="controls" autoPlay="autoplay"*/}
                {/*               preload="none"*/}
                {/*               muted="muted" aria-label="Volcano Jellyfish Aroma Diffuser"*/}
                {/*               poster="https://i.pinimg.com/originals/b3/94/e6/b394e6dc1131825dafab0e6217ad61ea.jpg">*/}
                {/*            <source*/}
                {/*                src="https://loveriq.online/sweep/za1/2.mp4"*/}
                {/*                type="video/mp4"/>*/}
                {/*            <img*/}
                {/*                src="https://i.pinimg.com/originals/b3/94/e6/b394e6dc1131825dafab0e6217ad61ea.jpg"/>*/}
                {/*        </video>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div id="photos">*/}
                {/*    <img ref={refs[0]}*/}
                {/*         src="https://i.pinimg.com/originals/2b/dd/e4/2bdde4a528d109fde5f25b6931a6c972.jpg"*/}
                {/*         className="noVisible" alt="" onClick={onclick}/>*/}
                {/*    <img ref={refs[1]}*/}
                {/*         src="https://i.pinimg.com/originals/5c/e2/98/5ce298e475e5c841615f6b7b30df42b3.jpg"*/}
                {/*         className="noVisible" alt="" onClick={onclick}/>*/}
                {/*    <img ref={refs[2]}*/}
                {/*         src="https://i.pinimg.com/originals/de/1c/7b/de1c7bfe15b086726bffcf02b88ab11f.jpg"*/}
                {/*         className="noVisible" alt="" onClick={onclick}/>*/}
                {/*    <img ref={refs[3]}*/}
                {/*         src="https://i.pinimg.com/originals/7d/a0/e0/7da0e03bb430bd4d098784b5cbe0cc27.jpg"*/}
                {/*         className="noVisible" alt="" onClick={onclick}/>*/}
                {/*    <img ref={refs[4]}*/}
                {/*         src="https://i.pinimg.com/originals/6b/e9/fe/6be9fef039ae2fbf9a99fe93dfdfb08b.jpg"*/}
                {/*         className="noVisible" alt="" onClick={onclick}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ProductImages;