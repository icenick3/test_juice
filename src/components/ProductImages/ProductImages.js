import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './ProductImages.css'




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
                        <img className="mainPhoto " src="https://i.pinimg.com/originals/5e/61/31/5e613144aec7cce60cd2b9af4b7b2ecf.png" alt=""/>
                        <img className="mainPhoto " src="https://i.pinimg.com/originals/04/21/3a/04213add1c94a2971e1007b59224e31e.png" alt=""/>
                        <img className="mainPhoto " src="https://i.pinimg.com/originals/6d/73/81/6d7381d2d5ef7415f16833f789f21025.png" alt=""/>
                        <img className="mainPhoto " src="https://i.pinimg.com/originals/f8/31/d2/f831d2db02db351c783f92fcce803507.png" alt=""/>
                        <img className="mainPhoto " src="https://i.pinimg.com/originals/59/82/75/5982754ee9d2dac44d53764daea23a48.png" alt=""/>
                    </div>
                </div>
                <div id="photos">
                    <img ref={refs[0]} src="https://i.pinimg.com/originals/5e/61/31/5e613144aec7cce60cd2b9af4b7b2ecf.png" className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[1]} src="https://i.pinimg.com/originals/04/21/3a/04213add1c94a2971e1007b59224e31e.png" className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[2]} src="https://i.pinimg.com/originals/6d/73/81/6d7381d2d5ef7415f16833f789f21025.png" className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[3]} src="https://i.pinimg.com/originals/f8/31/d2/f831d2db02db351c783f92fcce803507.png" className="noVisible" alt="" onClick={onclick}/>
                    <img ref={refs[4]} src="https://i.pinimg.com/originals/59/82/75/5982754ee9d2dac44d53764daea23a48.png" className="noVisible" alt="" onClick={onclick}/>
                </div>
            </div>
        </div>
    );
};

export default ProductImages;