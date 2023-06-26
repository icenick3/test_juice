import React from 'react';
import './PreFooter.css';

const PreFooter = () => {

    return (
        <div id="preFooter">
            <div id="mainPreFooter">
                <div className="preFooterElement">
                    <img src="https://loveriq.online/sweep/za1/truck.png" alt=""/>
                    <h2>Transport gratuit in toata lumea</h2>
                    <p>Toate comenzile sunt postate în termen de 1 zi lucrătoare de la comanda dumneavoastră și vor ajunge la ușa dumneavoastră GRATUIT!</p>
                </div>
                <div className="preFooterElement" >
                    <img src="https://loveriq.online/sweep/za1/creditCard.png" alt=""/>
                    <h2>Plăți securizate cu certificat SSL</h2>
                    <p>Pentru a ne asigura că clienții noștri sunt 100% protejați, folosim servere SSL pentru plățile dvs.</p>
                </div>
                <div className="preFooterElement" id="notDisplayMobile">
                    <img src="https://loveriq.online/sweep/za1/smile.png" alt=""/>
                    <h2>Peste 80.000 de clienți mulțumiți</h2>
                    <p>Produsele noastre sunt îndrăgite de peste 80.000 de clienți mulțumiți din întreaga lume!</p>
                </div>
            </div>
            <div className="preFooterElement" id="DisplayMobile">
                <img src="https://loveriq.online/sweep/za1/smile.png" alt=""/>
                <h2>Peste 80.000 de clienți mulțumiți</h2>
                <p>Produsele noastre sunt îndrăgite de peste 80.000 de clienți mulțumiți din întreaga lume!</p>
            </div>
        </div>
    );
};

export default PreFooter;