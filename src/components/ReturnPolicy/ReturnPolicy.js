import React from 'react';
import './ReturnPolicy.css'

const ReturnPolicy = ({setReturn}) => {
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
                                <strong>Payment Policy</strong></h3>
                            <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">We accept:
                                Visa and MasterCard. Payment can only be made using a credit or debit card. Payment is
                                deducted from your account upon order and/or upon commencement of your membership. You
                                will not be deducted for an amount in excess of that which was approved upon completion
                                of your purchase.
                                <div><br/></div>
                                <div>All purchases above 100 EUR will be subject to additional verification and security
                                    measures such as 3Ds Secure protocol.
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>Automatic Recurring Billing - Membership</div>
                                <div>In accordance with the Terms and Conditions of this website, subscription fees may
                                    be automatically renewed at or after the end of the original term selected, for a
                                    similar period of time and for a similar or lower amount, unless notice of
                                    cancellation is received from you. Unless and until this agreement is cancelled in
                                    accordance with the terms hereof, you hereby authorize this website to charge you by
                                    your chosen payment method and to pay for the ongoing cost of the membership via the
                                    same payment method.
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>By agreeing to these terms of use, Subscriber accepts being enrolled in a 3 days
                                    trial for only 3 EUR, acknowledges that unless the Membership is cancelled prior to
                                    the end of the trial period, the Subscriber will automatically be enrolled to a full
                                    Membership at the price and terms chosen upon signup. Further, Subscriber authorize
                                    us to charge the Membership fee for the next billing cycle. This charge will appear
                                    on the Subscriber's credit card statement.
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>Membership Refund Policy</div>
                                <div>You can at all times cancel your Membership. When you choose to cancel your
                                    Membership, your Membership will continue only until the end of the current period
                                    already started and you will not be charged for further Membership periods. We do
                                    not offer refunds as the cancellation is effectuated instantly after the commenced
                                    period. However, should the unlikely happen that you are dissatisfied with our
                                    Membership service, it can in rare cases be considered to offer a refund of up to a
                                    maximum equal to 2 periods Membership fees. If you have a complaint about our
                                    Membership service please email your complaint to our customer service and we will
                                    take a decision within 3-4 working days.
                                </div>
                                <div><br/></div>
                                <div><br/></div>
                                <div><br/></div>
                                <div>Product Refund Policy</div>
                                <div>We are offering a refund policy of 30 days (the standard, legally endorsed policy
                                    is 14 days). This period is valid from the day you receive delivery of your
                                    purchased goods. You can return a product for up to 30 days from the date you
                                    purchased it. Any product you return must be in the same condition you received it
                                    and in the original packaging.
                                </div>
                                <div><br/></div>
                                <div>If you wish to return one or more purchased products, let us know via;</div>
                                <div><br/></div>
                                <div>Telephone or via email(we will reply within 24 hours).</div>
                                <div><br/></div>
                                <div>In the case of sealed goods which are not suitable for returns due to health
                                    protection or hygiene reasons, the right to cancel ceases if the goods become
                                    unsealed after delivery.
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