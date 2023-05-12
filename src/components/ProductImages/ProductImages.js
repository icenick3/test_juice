import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './ProductImages.css'
import img from "../../images/img.png"
import img1 from "../../images/img_1.png"
import img2 from '../../images/img_2.png'
import img3 from '../../images/img_3.png'
import img4 from '../../images/img_4.png'


const ProductImages = () => {

    const [dragg, setDragg] = useState(false)
    const [coordinat, setCoordinat] = useState(0)
    const [x, setX] = useState(null)
    const [track, setTrack] = useState(0)
    const photoRef = useRef()
    const [lastX, setLastX] = useState(null)
    const [width, setWidth] = useState(null)
    const difference = Math.abs(Math.trunc((coordinat - width) / width))
    const [photoBlock, setPhotoBlock] = useState(null)
    const [widthDevice, setWidthDevice] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            setWidthDevice(window.innerWidth);
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);


    const refs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ]
    const hedRef = useRef();

    useEffect(() => {
        const header = document.getElementById('ourPolicy')
        const header2 = document.querySelector('#header')

        const handleScroll = () => {
            const element1Rect = hedRef.current.getBoundingClientRect();
            const element2Rect = header.getBoundingClientRect();
            const element3Rect = header2.getBoundingClientRect();
            const distance = (element1Rect.bottom - element2Rect.top);
            const distance2 = element3Rect.bottom - element1Rect.top
            if (distance >  0 && widthDevice > 500) {
                hedRef.current.style.position = "absolute"
                hedRef.current.style.bottom = "0"

            } else if(distance === -2 && widthDevice > 500){
                hedRef.current.style.position = "absolute"
                hedRef.current.style.bottom = "0"
            }
            if (distance2 < -39 && widthDevice > 500){
                hedRef.current.style.position = "fixed"
                hedRef.current.style.bottom = "80px"
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [window.scrollY]);



    useEffect(() => {
        photoRef.current.style.left = `${coordinat}px`
        const parent = document.getElementById('photoBlock');
        setPhotoBlock(parent)
        setWidth(parent.clientWidth)
        if (coordinat === 0) {
            refs.map(ref => {
                ref.current.classList.remove('visible')
            })
            refs[0].current.classList.add('visible')
        } else if (coordinat === -width) {
            refs.map(ref => {
                ref.current.classList.remove('visible')
            })
            refs[1].current.classList.add('visible')
        } else if (coordinat === -2 * width) {
            refs.map(ref => {
                ref.current.classList.remove('visible')
            })
            refs[2].current.classList.add('visible')
        } else if (coordinat === -3 * width) {
            refs.map(ref => {
                ref.current.classList.remove('visible')
            })
            refs[3].current.classList.add('visible')
        } else if (coordinat === -4 * width) {
            refs.map(ref => {
                ref.current.classList.remove('visible')
            })
            refs[4].current.classList.add('visible')
        }

    }, [coordinat])

    const onMouseMove = (e) => {
        if (dragg) {
            if (lastX !== null) {
                if (e.clientX < lastX) {
                    if ((lastX - e.clientX) > 0) {
                        setCoordinat(coordinat - (lastX - e.clientX))
                    } else if ((lastX - e.clientX) < 0) {
                        setCoordinat(coordinat - Math.abs((lastX - e.clientX)))
                    }
                } else if (e.clientX > lastX) {
                    if ((lastX - e.clientX) > 0) {
                        setCoordinat(coordinat + (lastX - e.clientX))
                    } else if ((lastX - e.clientX) < 0) {
                        setCoordinat(coordinat + Math.abs((lastX - e.clientX)))
                    }
                }
            }
            setTrack(x - e.clientX)
        }
        setLastX(e.clientX)
    }

    const onMouseDOwn = (e) => {
        setX(e.clientX)
        e.preventDefault()
        setDragg(true)
        photoBlock.style.transition = ""
        photoBlock.style.cursor = "grabbing"
    }

    const onMouseLeave = () => {
        photoBlock.style.cursor = ""
        photoBlock.style.transition = "left 0.3s ease-out"
        setTrack(0)
        setDragg(false)
        if (Math.abs(coordinat) < width && track > 100) {
            setCoordinat(-width)
        }
        if (Math.abs(coordinat) > width && track > 100) {
            if (difference < 5) {
                setCoordinat(-(width * difference))
            } else if (difference > 4) {
                setCoordinat(-(width * 4))
            }
        }
        if (Math.abs(coordinat) < width && track < 100 && track > 0) {
            setCoordinat(0)
        }
        if (Math.abs(coordinat) < width && track < 0 && track > -100) {
            setCoordinat(-width)
        }
        if (Math.abs(coordinat) < width && track < -100) {
            setCoordinat(0)
        }
        if (Math.abs(coordinat) > width && track < 100 && track > 0) {
            if (difference < 5) {
                setCoordinat(-(difference * width) + width)
            } else if (difference > 4) {
                setCoordinat(-(width * 4))
            }
        }
        if (Math.abs(coordinat) > width && track < 0 && track > -100) {
            if (difference < 5) {
                setCoordinat(-(difference * width))
            }
        }
        if (Math.abs(coordinat) > width && track < -100) {
            if (difference < 5) {
                setCoordinat(-(difference * width) + width)
            }
        }
    }

    const onclick = (e) => {
        if (e.target.src === refs[0].current.src) {
            setCoordinat(0)
        } else if (e.target.src === refs[1].current.src) {
            setCoordinat(-width)
        } else if (e.target.src === refs[2].current.src) {
            setCoordinat(-width * 2)
        } else if (e.target.src === refs[3].current.src) {
            setCoordinat(-width * 3)
        } else if (e.target.src === refs[4].current.src) {
            setCoordinat(-width * 4)
        }
        refs.map(ref => {
            if (ref.current.src === e.target.src) {
                ref.current.classList.add('visible')
            } else {
                ref.current.classList.remove('visible')
            }
        })
    }

    return (
        <div ref={hedRef} id="photoContainer">
            <div id="position">
                <div id="mainPhotoContainer" onMouseMove={onMouseMove} onMouseDown={onMouseDOwn}
                     onMouseLeave={onMouseLeave}
                     onMouseUp={onMouseLeave}>
                    <div ref={photoRef} id="photoBlock">
                        <img className="mainPhoto " src={img} alt=""/>
                        <img className="mainPhoto " src={img1} alt=""/>
                        <img className="mainPhoto " src={img2} alt=""/>
                        <img className="mainPhoto " src={img3} alt=""/>
                        <img className="mainPhoto " src={img4} alt=""/>
                    </div>
                </div>
                <div id="photos">
                    <img ref={refs[0]} src={img} className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[1]} src={img1} className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[2]} src={img2} className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[3]} src={img3} className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[4]} src={img4} className="noVisible" alt="" onClick={onclick}/>
                </div>
            </div>
        </div>
    );
};

export default ProductImages;