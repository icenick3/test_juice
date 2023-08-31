import React from 'react';
import './Descript.css'

const Descript = () => {
    return (
        <div id="descript">
            <div className="desBlock">
                <img src="https://i.pinimg.com/originals/9a/a5/fe/9aa5feb62b35fdf8a8adb44fda20082c.jpg" alt=""/>
                <div>
                    <h2>FOLD IT FLAT</h2>
                    <p>At 3.5 inches thin, Venty fits everywhere</p>
                </div>
            </div>
            <div id="line"></div>
            <div className="desBlock">
                <img src="https://i.pinimg.com/originals/98/e5/c9/98e5c987a33717adcd53d33a1063c6f5.png" alt=""/>
                <div>
                    <h2>ADJUST YOUR HEIGHT</h2>
                    <p>Telescopic neck extends your fan to 3.5 feet</p>
                </div>
            </div>
            <div id="line"></div>
            <div className="desBlock">
                <img src="https://i.pinimg.com/originals/3e/b3/d5/3eb3d5d45bce7b83041df3476dfdba01.jpg" alt=""/>
                <div>
                    <h2>CONTROL ANYWHERE</h2>
                    <p>Control the light, speed, & oscillation from up to 30 feet.</p>
                </div>
            </div>
        </div>
    );
};

export default Descript;