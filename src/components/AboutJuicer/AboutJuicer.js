import React from 'react';
import './AboutJuicer.css'
import Descript from "../Descript/Descript";

const AboutJuicer = (xxx) => {

    return (
        <div id="aboutJuicer">
            {/*<Descript/>*/}
            {/*<img src="https://loveriq.online/sweep/za1/delivery.png" alt=""/>*/}
            <div className="textImage">
                <div className="textXXX">
                    <br/>
                    <h2 className="secTitle">
                        Descrierea produsului:
                    </h2>
                    <br/>
                    <p>
                        Nume: Pânză de vase din bumbac <br/>
                        Material: Bumbac <br/>
                        Dimensiune: 34*34cm <br/>
                        Culori: Maro, Bej, Albastru închis, Gri închis <br/>
                        Cantitate: 5+1 bucăți
                    </p>
                </div>
                <img id="jucier" className="img"
                     src="https://i.pinimg.com/originals/44/36/4a/44364aab886b9014953ae77f95168d9d.png" alt=""/>
            </div>
            <div className="textImage">
                <img src="https://i.pinimg.com/originals/17/60/19/1760191152cd61eddc1c35e020ceb8c8.png" alt=""
                     className="img"/>
                <div className="textXXX">
                    <h2 className="secTitle">
                        CÂRPE DE VASE DIN BUMBAC
                    </h2>
                    <p>Cârpe de vase din 100% bumbac cu țesătură tip napolitană, moi și confortabile. Designul unic în
                        formă de fagure de miere o face mai durabilă și se înmoaie la fiecare spălare, astfel încât
                        aceste prosoape de vase nu vă vor zgâria vasele de gătit, farfuriile și tigăile delicate.</p>
                </div>
            </div>
            <div className="textImage">
                <div className="textXXX">
                    <h2 className="secTitle">
                        DESIGN UNIC
                    </h2>
                    <p>Țesătura clasică în formă de fagure de miere scobită face ca acest set de cârpe de vase să fie
                        ușor, respirabil și super absorbant, perfect pentru a face față tuturor sarcinilor de uscare,
                        ștergere și curățare a bucătăriei. Și un design cu cârlig de agățat pentru a fi ușor de plasat
                        și uscat.</p>
                </div>
                <img id="imgGif" src="https://i.pinimg.com/originals/ad/99/b6/ad99b62183657e88f6de915725eead82.png"
                     alt=""/>
            </div>
            <div className="textImage">
                <img src="https://i.pinimg.com/originals/be/72/42/be7242c8cea821964896eee72e1b3d7d.jpg" alt=""
                     className="img"/>
                <div className="textXXX">
                    <h2 className="secTitle">
                        ÎNGRIJIRE UȘOARĂ
                    </h2>
                    <p>Pentru a reduce la minimum contracția, vă rugăm să spălați la mașină cu apă rece, ciclu delicat,
                        uscați la un nivel scăzut. Nu folosiți înălbitor sau balsamuri pentru țesături, deoarece acestea
                        vor afecta longevitatea și absorbția prosoapelor. Călcați cu fierul de călcat slab dacă este
                        necesar.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutJuicer;