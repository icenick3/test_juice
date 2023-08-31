import React from 'react';
import './ReturnPolicy.css'
import {useTranslation} from "react-i18next";

const ReturnPolicy = ({setReturn}) => {

    const { t } = useTranslation()

    return (
        <div className="returnPolicy" onClick={()=>setReturn(false)}>
            <div className="returnBlock">
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setReturn(false)}/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="title col-md-12 col-lg-10">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                                <strong>{t("terms:text107")}</strong></h3>
                            <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">{t("terms:text95")}
                                <div><br/></div>
                                <div>{t("terms:text96")}
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>{t("terms:text97")}</div>
                                <div>{t("terms:text98")}
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>{t("terms:text99")}
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>{t("terms:text100")}</div>
                                <div>{t("terms:text101")}
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>{t("terms:text102")}</div>
                                <div>{t("terms:text103")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text104")}</div>
                                <div><br/></div>
                                <div>{t("terms:text105")}</div>
                                <div><br/></div>
                                <div>{t("terms:text106")}
                                </div>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicy;