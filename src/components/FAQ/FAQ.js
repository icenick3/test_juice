import React from 'react';
import './FAQ.css'
import {useTranslation} from "react-i18next";

const Faq = ({setFAQ}) => {

    const { t } = useTranslation()

    return (
        <div className="returnPolicy4" onClick={() => setFAQ(false)}>
            <div className="returnBlock4">
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setFAQ(false)}/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="title col-md-12 col-lg-10">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                                <strong>{t("terms:text1")}</strong>
                                <div><strong><br/></strong></div>
                            </h3>
                            <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">{t("terms:text2")}
                                <div>{t("terms:text3")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text4")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text5")}</div>
                                <div>{t("terms:text6")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text7")}</div>
                                <div>{t("terms:text8")}
                                </div>
                                <div>{t("terms:text9")}</div>
                                <div>{t("terms:text10")}
                                </div>
                                <div>{t("terms:text11")}
                                </div>
                                <div>{t("terms:text12")}</div>
                                <div>{t("terms:text13")}</div>
                                <div>{t("terms:text14")}
                                </div>
                                <div>{t("terms:text15")}</div>
                                <div>{t("terms:text16")}</div>
                                <div>{t("terms:text17")}
                                </div>
                                <div>{t("terms:text18")}
                                </div>
                                <div>{t("terms:text19")}
                                </div>
                                <div>{t("terms:text20")}
                                </div>
                                <div>{t("terms:text21")}
                                </div>
                                <div>{t("terms:text22")}
                                </div>
                                <div>{t("terms:text23")}
                                </div>
                                <div>{t("terms:text24")}</div>
                                <div>{t("terms:text25")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text26")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text27")}</div>
                                <div>{t("terms:text28")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text29")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text30")}</div>
                                <div>{t("terms:text31")}</div>
                                <div><br/></div>
                                <div>{t("terms:text32")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text33")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text64")}</div>
                                <div>{t("terms:text34")}</div>
                                <div><br/></div>
                                <div>{t("terms:text35")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text36")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text65")}</div>
                                <div>{t("terms:text37")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text66")}</div>
                                <div>{t("terms:text38")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text39")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text40")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text41")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text67")}</div>
                                <div>{t("terms:text42")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text68")}</div>
                                <div>{t("terms:text43")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text69")}</div>
                                <div>{t("terms:text44")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text70")}</div>
                                <div>{t("terms:text45")}</div>
                                <div>{t("terms:text46")}</div>
                                <div>{t("terms:text47")}</div>
                                <div>{t("terms:text48")}</div>
                                <div>{t("terms:text49")}</div>
                                <div>{t("terms:text50")}</div>
                                <div>{t("terms:text51")}</div>
                                <div>{t("terms:text52")}</div>
                                <div>{t("terms:text53")}</div>
                                <div>{t("terms:text54")}</div>
                                <div>{t("terms:text55")}</div>
                                <div>{t("terms:text56")}</div>
                                <div>{t("terms:text57")}</div>
                                <div><br/></div>
                                <div>{t("terms:text58")}</div>
                                <div>{t("terms:text59")}</div>
                                <div>{t("terms:text60")}</div>
                                <div>{t("terms:text61")}</div>
                                <div>{t("terms:text62")}</div>
                                <div><br/></div>
                                <div>{t("terms:text63")}</div>
                                <div>{t("terms:text78")}</div>
                                <div>{t("terms:text71")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text79")}</div>
                                <div>{t("terms:text72")}</div>
                                <div><br/></div>
                                <div>{t("terms:text87")}</div>
                                <div>{t("terms:text73")}</div>
                                <div><br/></div>
                                <div>{t("terms:text74")}</div>
                                <div>{t("terms:text75")}</div>
                                <div>{t("terms:text88")}</div>
                                <div>{t("terms:text76")}</div>
                                <div><br/></div>
                                <div>{t("terms:text80")}</div>
                                <div>{t("terms:text77")}</div>
                                <div><br/></div>


                                <div>{t("terms:text89")}</div>
                                <div>{t("terms:text81")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text90")}</div>
                                <div>{t("terms:text82")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text91")}</div>
                                <div>{t("terms:text83")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text92")}</div>
                                <div>{t("terms:text84")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text93")}</div>
                                <div>{t("terms:text85")}
                                </div>
                                <div><br/></div>
                                <div>{t("terms:text94")}</div>
                                <div>{t("terms:text86")}
                                </div>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;