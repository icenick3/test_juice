import React from 'react';
import './AirPhones.css'
import RunningText from "../RunningText/RunningText";
import {useTranslation} from "react-i18next";

const AirPhones = ({color2, setColor2}) => {

    const {t} = useTranslation()

    return (
        <div className="airPhones">
            <div className="subAir">
                <div className="contAir">
                    <div>
                        <h2>Experience Wireless</h2>
                        <p>Experience ultimate wireless audio with AirBeats™ Wireless Headset for Apple Air MAS.
                            Perfectly designed for seamless connectivity and exceptional sound quality, enjoy
                            crystal-clear sound without any interruptions. Say goodbye to wires and hello to wireless
                            freedom with AirBeats™.</p>
                    </div>
                    <img className="rightIMG"
                         src="https://i.pinimg.com/originals/23/08/a7/2308a766007769018a963d603b43784d.jpg" alt=""/>
                </div>
                <div className="contAir secCON">
                    <img className="leftIMG"
                         src="https://i.pinimg.com/originals/7d/bf/b5/7dbfb50fa46b435a3c032531e05a5829.jpg" alt=""/>
                    <div>
                        <h2>Sound Effects</h2>
                        <p>Enhance your audio experience with our collection of dynamic sound effects. From explosive
                            bass drops to soothing nature sounds, our library of sound effects is sure to take your
                            listening experience to the next level. Perfect for music, movies, and gaming, immerse
                            yourself in the action with our high-quality sound effects. Browse our collection and start
                            listening today!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirPhones;