import React from 'react';
import './FAQ.css'

const Faq = ({setFAQ}) => {
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
                                <strong>TERMS &amp; CONDITIONS</strong>
                                <div><strong><br/></strong></div>
                            </h3>
                            <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">The
                                Terms and Conditions
                                <div>Welcome. Your agreement to all the Terms and Conditions of this agreement
                                    ("Agreement") is required before You can use the website. Your agreement is also
                                    required before we will grant You authorized access to the services and products
                                    ("Content") offered in, at or through the Website. If You do not agree to the
                                    Terms and Conditions, set forth below, You will not be authorized to access to
                                    our site or view, purchase or otherwise use any of the Content available in, at
                                    or through the Website.
                                </div>
                                <div><br/></div>
                                <div>IT IS VERY IMPORTANT THAT YOU COMPLETELY READ THIS AGREEMENT BECAUSE BY YOU
                                    MAKING A PURCHASE OR SUBSCRIBING, YOU WILL BE EXPRESSLY SIGNIFYING THAT YOU
                                    AGREE TO ALL THE FOLLOWING TERMS, CONDITIONS AND OTHER PROVISIONS, SET FORTH IN
                                    THIS AGREEMENT, INCLUDING IMPORTANT LIMITATIONS REGARDING "PROHIBITED LOCATIONS"
                                    FROM WHICH YOU MAY NOT ACCESS THE WEBSITE, OBTAIN COPIES OF CONTENT, OR USE
                                    ANYof our SERVICES.
                                </div>
                                <div><br/></div>
                                <div>Parties to This Agreement and Consideration</div>
                                <div>The parties to this Agreement ("Agreement") are You ("You", sometimes referred
                                    to as a "Customer" or "Subscriber" to the Website) and the owner. As used in
                                    this Agreement, the terms "we" and "us" are used interchangeably to refer to
                                    Hepdrive Limited and its operators of the Website. By further accessing the
                                    Website or materials available at or in association with the Website, and for
                                    other good and valuable consideration, the sufficiency of which is acknowledged
                                    by You and Hepdrive Limited. You hereby agree to be bound by all the Terms and
                                    Conditions set forth in this Agreement.
                                </div>
                                <div><br/></div>
                                <div>0. Preamble</div>
                                <div>Subscriber/Customer data is for internal use only and will be treated
                                    confidential.
                                </div>
                                <div>All transactions are SSL encrypted.</div>
                                <div>Subscriber's/Customer's credit card will be billed immediately after
                                    purchase.
                                </div>
                                <div>After purchase Subscriber/Customer will receive an email notification including
                                    payment details. The contract is closed between Subscriber/Customer and shop as
                                    soon as the order is submitted.
                                </div>
                                <div>All orders will be processed as soon as possible.</div>
                                <div>All questions will be answered within two (2) working days.</div>
                                <div>We recommend printing out the transaction data and Terms and Conditions and to
                                    keep them at an easily accessible place.
                                </div>
                                <div>Prohibited for people under legal age in their respective country.</div>
                                <div>1. Definitions</div>
                                <div>"Member" or "Membership" shall mean the Subscriber or user of a valid username
                                    and password for the Site during the term of the membership.
                                </div>
                                <div>"Customer" shall mean an individual who makes a single time purchase, without
                                    creating a membership account.
                                </div>
                                <div>We shall mean any of the companies billing the Subscriber/Customer including
                                    any additional billing companies used by us or changes thereof.
                                </div>
                                <div>"Site" shall mean the website on which Subscriber/Customer is purchasing either
                                    a product or a membership with a username and password in order to access the
                                    site and its products and obtain the benefits of the Membership.
                                </div>
                                <div>"Subscriber" shall mean the user of the services of the site and holder of a
                                    valid username and password for the Site.
                                </div>
                                <div>"Access rights" shall mean the combination of a unique username and password
                                    that is used to access a site. An access rights is a license to use a Site for a
                                    period of time that is specified.
                                </div>
                                <div>"Bookmarking," shall mean a URL placed into a temporary file on the
                                    Subscriber's browser so that the Subscriber may return to that page at a future
                                    date without having to type in its username and password.
                                </div>
                                <div>2. Description of Services</div>
                                <div>The site provides large discounts on a variety of products. Shopping on the
                                    discounted prices on the Site is only possible if You are a Member of the Site.
                                    This website is only for private customers.
                                </div>
                                <div><br/></div>
                                <div>The site however provides the same variety of products for all Customers to the
                                    regular, not discounted, price. You will not need an account or a Membership to
                                    purchase products to the regular price.
                                </div>
                                <div><br/></div>
                                <div>3. How to Purchase</div>
                                <div>Members will have to log into their account before the shopping on discounted
                                    prices can take place. If You are a new member, You will be offered a trial
                                    period of 3 for only EUR 3. Once the order has been completed, You will receive
                                    an order confirmation via email, and You will receive another email once we have
                                    dispatched Your order.
                                </div>
                                <div><br/></div>
                                <div>As a Customer You make your purchase of the product directly on our website.
                                    Once the order has been completed, You will receive an order confirmation via
                                    email, and You will receive another email once we have dispatched Your order.
                                </div>
                                <div><br/></div>
                                <div>4. About Prices</div>
                                <div>The discounted prices shown on the website are Member's prices. The prices that
                                    we compare our own to are the guiding market prices that are used in other shops
                                    and on other websites.
                                </div>
                                <div><br/></div>
                                <div>Our business operates the Website with delivery in many Countries. Due to
                                    climate-related needs or the application of mandatory laws (e.g. VAT or
                                    regarding official mandatory periods for end of season sales), the Products sold
                                    and their prices may vary from Country to Country.
                                </div>
                                <div><br/></div>
                                <div>All purchases above 100 EUR will be subject to additional verification and
                                    security measures such as 3Ds Secure protocol.
                                </div>
                                <div><br/></div>
                                <div>5. Billing</div>
                                <div>The website may appear on Subscriber's/Customer's credit card, bank statement,
                                    or phone bill for all applicable charges. If multiple venues are joined
                                    utilizing any payment method, Subscriber's/Customer's statements will list each
                                    individual purchase comprising the transaction. The website may include other
                                    information on Subscriber/Customer statements based on credit card association,
                                    telephone regulation, NACHA and any other mandated rules and regulations.
                                </div>
                                <div><br/></div>
                                <div>As a Member Your subscription is deducted automatically at or after the end of
                                    the original term selected, for a similar period of time and for a similar or
                                    lower amount, unless notice of cancellation is received by Website from the
                                    Subscriber. If You no longer wish to be a Member, You can terminate Your
                                    Membership at any time by logging in to Your account and then fill the cancel
                                    subscription form on the support page. You may also cancel Your Membership in
                                    writing by sending an email directly to our support.
                                </div>
                                <div><br/></div>
                                <div>As a Customer you will alone be deducted for the product(s) purchased, no other
                                    fees will apply, unless clearly stated on the payment page.
                                </div>
                                <div><br/></div>
                                <div>6. Payment / Fee</div>
                                <div>The Site may have periodic subscription fees at the time of the initial
                                    enrolment for subscription. The Member is responsible for such fees according to
                                    the Terms and Conditions of such Site.
                                </div>
                                <div><br/></div>
                                <div>7. Automatic Recurring Billing</div>
                                <div>In accordance with the Terms and Conditions of the Site, subscription fees may
                                    be automatically renewed at or after the end of the original term selected, for
                                    a similar period of time and for a similar or lower amount, unless notice of
                                    cancellation is received from the Subscriber. From time to time we enroll our
                                    loyal subscribers in a loyalty program where the randomly chosen subscribers
                                    will be granted a discounted membership price on the next payment only.
                                </div>
                                <div><br/></div>
                                <div>Unless and until the Membership agreement is cancelled in accordance with the
                                    terms hereof, Subscriber hereby authorizes our website to charge Subscriber's
                                    chosen payment method to pay for the ongoing cost of Membership. Subscriber
                                    hereby further authorizes our website to charge Subscriber's chosen payment
                                    method for any and all additional purchases of materials provided on the site.
                                </div>
                                <div><br/></div>
                                <div>By agreeing to these terms of use, Subscriber accepts being enrolled in a 3
                                    trial for only 3 EUR, acknowledges that unless the Membership is cancelled prior
                                    to the end of the trial period, the Subscriber will automatically be enrolled to
                                    a full Membership at the price and terms chosen upon signup. Further, Subscriber
                                    authorize us to charge the Membership fee for the next billing cycle. This
                                    charge will appear on the Subscriber's credit card statement..
                                </div>
                                <div><br/></div>
                                <div>In the event that a recurring payment is not successfully processed, an
                                    administrative fee of up to 3 EUR may be applied to your account in order to
                                    maintain the status of your subscription until the full subscription cost can be
                                    successfully processed.
                                </div>
                                <div><br/></div>
                                <div>8. Delivery</div>
                                <div>Orders will be delivered with either courier or local postal service, all with
                                    tracking number. The expected delivery time is 10-15 days depending on the
                                    location. We take full responsibility for the purchased products until they have
                                    been delivered.
                                </div>
                                <div><br/></div>
                                <div>9. Agreed upon Method of Communication</div>
                                <div>The website and the Subscriber/Customer agree that a transaction receipt will
                                    be provided via the email provided at the time of either initial enrolment (for
                                    the Subscriber) or direct purchase of a product (for the Customer).
                                </div>
                                <div><br/></div>
                                <div>10. Electronic Communication</div>
                                <div>Subscriber agrees and accepts that all information relating to the Membership
                                    (e.g. payment authorizations, invoices, changes in password or Payment Method,
                                    confirmation messages, notices) will be in electronic form only, for example via
                                    emails to Your email address provided during registration.
                                </div>
                                <div><br/></div>
                                <div>11. Cancellation and Return of Products</div>
                                <div>MEMBERSHIP; CANCELLATION</div>
                                <div>By signing up for a subscription or membership to the Website, accessing any
                                    password protected area of the Website, using any "members only" content
                                    available at or through the Website, or by accepting these Terms and Conditions
                                    by any other legally recognizable means, You hereby acknowledge and agree that
                                    You will be irrevocably agreeing to all the terms, conditions, obligations,
                                    warranties, and other provisions set forth in this Agreement, including the
                                    authorization for and acceptance of full financial responsibility for all
                                    charges set forth in this Agreement.
                                </div>
                                <div>To terminate Your membership, Your subscription must be canceled at least 7
                                    days prior to the end of the current term (or within Your trial period in the
                                    case of trial membership). Certain features are available to upgraded or
                                    converted members only.
                                </div>
                                <div>You agree that if You do not send the Company notice of cancellation of Your
                                    membership at least SEVEN (7) DAYS from the expiration of Your membership term
                                    (including any free or promotional membership terms), or within Your trial
                                    period in the case of trial membership the Company shall, with the full
                                    authorization You hereby provide, automatically and without further notice,
                                    renew Your membership to Website.
                                </div>
                                <div>All cancellations received by the Company at least SEVEN (7) DAYS from the
                                    expiration of Your membership will be effective upon receipt and The Company
                                    may, at any time and at its sole discretion and without cause or the providing
                                    of any reason, cancel any membership.
                                </div>
                                <div>You hereby acknowledge and agree that if You cancel Your membership, or if Your
                                    membership is cancelled by the Company, Your password will be removed from the
                                    system at the end of the then current membership period and that You will be
                                    entitled to receive the full benefits of Your membership until the end of such
                                    membership period. You shall not be entitled to any pro-rated or partial refund
                                    if You cancel Your membership before the end of the then current membership
                                    period for any reason.
                                </div>
                                <div>In order to cancel Your membership, please call us.</div>
                                <div>RETURN OF PRODUCTS</div>
                                <div>If You wish to return one or more purchased products, You should inform us.
                                </div>
                                <div>In the case of sealed goods which are not suitable for returns due to health
                                    protection or hygiene reasons, the right to cancel ceases if the goods become
                                    unsealed after delivery.
                                </div>
                                <div>The Conditions of Returned Products</div>
                                <div>Any depreciation in value related to product use that is improper or different
                                    from its intended use and function is paid for by the customer. In other words -
                                    You can try the product in the same way You would try it in a physical outlet.
                                    However, if You damage the product through misuse or carelessness and seek
                                    reimbursement, You may end up receiving only a small part or none of the
                                    purchase price back if You return it, depending on the commercial value of the
                                    product(s) in question and the nature of the given incident.
                                </div>
                                <div>Refunds are issued in the same format as the original payment method. We
                                    reserve the right to withhold Your refund until We have received the products
                                    that are to be returned. If You wish to cancel Your purchase, send Your
                                    product(s) to:
                                </div>
                                <div><br/></div>
                                <div>RETURN ADDRESS;</div>
                                <div>Hepdrive Limited</div>
                                <div>13024795</div>
                                <div>8 Garland Drive, Loxley, , S6 6SS, Sheffield,</div>
                                <div>United Kingdom</div>
                                <div><br/></div>
                                <div>In order to expedite the return process, please include a copy of Your order
                                    confirmation in addition to the product(s) that You are returning. If You do no
                                    longer have Your order confirmation, You may also include the email address used
                                    when placing the order or the order number itself.
                                </div>
                                <div>12. Refunds</div>
                                <div>Refunds for purchases or recurring charges may be requested by contacting
                                    customer support. Refunds or credits will not be issued for partially used
                                    Memberships. Cancellation for all future recurring billing may be requested in
                                    accordance with Section 11 - Cancellation. The website reserves the right to
                                    grant a refund or a credit applicable to purchases to the Site at its
                                    discretion. The decision to refund a charge does not imply the obligation to
                                    issue additional future refunds. Should a refund be issued by us for any reason,
                                    it will be credited solely to the payment method used in the original
                                    transaction. The company will not issue refunds by cash, cheque, money transfer
                                    or other means of payment. The refund will be processed immediately by us,
                                    depending on the payment method used in the original transaction, depositing the
                                    funds may take 3-5 business days.
                                </div>
                                <div><br/></div>
                                <div>13. Cardholder Disputes/Chargebacks</div>
                                <div>All chargebacks are thoroughly investigated and may prevent future purchases
                                    with us given the circumstances. Fraud claims may result in us contacting
                                    Subscriber's/Customer's issuer to protect You and prevent future fraudulent
                                    charges to Your card.
                                </div>
                                <div><br/></div>
                                <div>14. Your Right to Complain</div>
                                <div>Our offer the standard legal complaints procedure, applicable for 24 months
                                    after delivery. This means that You can get Your product repaired, exchanged,
                                    get Your money back or receive a price reduction, depending on the situation in
                                    question. Your complaint must be valid, meaning that any faults cannot be the
                                    result of incorrect use of the product or destructive behavior. Note that for
                                    products with a limited lifespan, Your right to complain is limited accordingly.
                                </div>
                                <div><br/></div>
                                <div>HOW QUICKLY SHOULD I FILE A COMPLAINT?</div>
                                <div>Contact us as soon as You notice a mistake or missing parts on and for a
                                    product that has been purchased at the Site. This should happen as soon as
                                    possible or within a reasonable time period from the moment You notice that
                                    there is something wrong with the product. File the complaint via the Support
                                    page or by contacting us customer service directly on phone.
                                </div>
                                <div>COMPLAINTS</div>
                                <div>If You want to complain about Your purchase, send the complaint to our customer
                                    service either by calling them.
                                </div>
                                <div>15. Membership; Authorization of Use</div>
                                <div>Subscribers to the Site are hereby authorized a single access rights to access
                                    the service and or products located at this Site. This access rights shall be
                                    granted for sole use to one Subscriber. All Memberships are provided for
                                    personal use and shall not be used for any commercial purposes or by any other
                                    third parties. Commercial use of either the Site or any products/services found
                                    within is strictly prohibited unless authorized by the Site. No material within
                                    the Site may be transferred to any other person or entity, whether commercial or
                                    non-commercial. No material within the Site may be distributed through
                                    peer-to-peer networks or any other file sharing platforms. In addition,
                                    materials may not be modified, or altered. Materials may not be displayed
                                    publicly, or used for any rental, sale, or display. Materials shall extend to
                                    copyright, trademarks, or other proprietary notices there from. Our company and
                                    the Site reserve the right to terminate the Subscriber's access rights at any
                                    time if the terms of this agreement are breached. In the case that the terms are
                                    breached, Subscriber will be required to immediately destroy any information or
                                    material printed, downloaded or otherwise copied from the site.
                                </div>
                                <div><br/></div>
                                <div>16. Membership; Transfer of Access Rights</div>
                                <div>Access to the Site is through a combination of a username and password.
                                    Subscribers may not under any circumstances release their access rights to any
                                    other person and are required to keep their access rights strictly
                                    confidential.We will not release passwords for any reason, to anyone other than
                                    the Subscriber, except as may be specifically required by law or court order.
                                    Unauthorized access to the Site is a breach of this Agreement. Subscribers
                                    acknowledge that the owner of the Site may track through the use of special
                                    software each Subscriber's entry to the site. If any breach of security, theft
                                    or loss of access rights, or unauthorized disclosure of access rights
                                    information occurs, Subscriber must immediately notifyus or the Site of said
                                    security breach. Subscriber will remain liable for unauthorized use of service
                                    until we or the site is notified of the security breach by e-mail or telephone.
                                </div>
                                <div><br/></div>
                                <div>17. Supplementary Terms and Conditions</div>
                                <div>The Site may have additional Terms and Conditions that are an integral part of
                                    their offering to the Subscriber/Customer and are in addition to these Terms and
                                    Conditions. Such Terms and Conditions as listed at the site will in no way
                                    invalidate any of the Terms and Conditions listed here. This Agreement shall be
                                    construed and enforced in accordance with the Laws of "United Kingdom"
                                    applicable to contracts negotiated, executed, and wholly performed within said
                                    Country. Disputes arising hereunder shall be settled in "United Kingdom".
                                </div>
                                <div><br/></div>
                                <div>18. Severability</div>
                                <div>If any provision of this Agreement shall be held to be invalid or unenforceable
                                    for any reason, the remaining provisions shall continue to be valid and
                                    enforceable. If a court finds that any of this Agreement is invalid or
                                    unenforceable, but that by limiting such provision it would become valid or
                                    enforceable, then such provision shall be deemed to be written, construed, and
                                    enforced as so limited.
                                </div>
                                <div><br/></div>
                                <div>19. Notice</div>
                                <div>Notices by the Site to Subscribers/Customer may be given by means of electronic
                                    messages through the Site, by a general posting on the Site, or by conventional
                                    mail. Notices by Subscriber/Customer may be given by electronic messages,
                                    conventional mail, telephone unless otherwise specified in the Agreement. All
                                    questions, complaints, or notices regarding the site must be directed to us. All
                                    cancellations of service to a site must also be directed to us.
                                </div>
                                <div><br/></div>
                                <div>20. DISCLAIMER</div>
                                <div>USER UNDERSTANDS THAT WE CANNOT AND DOES NOT GUARANTEE OR WARRANT THAT FILES
                                    AVAILABLE FOR DOWNLOADING FROM THE INTERNET WILL BE FREE OF VIRUSES, WORMS,
                                    TROJAN HORSES OR OTHER CODE THAT MAY MANIFEST CONTAMINATING OR DESTRUCTIVE
                                    PROPERTIES. USER IS RESPONSIBLE FOR IMPLEMENTING SUFFICIENT PROCEDURES AND
                                    CHECKPOINTS TO SATISFY SUBSCRIBER/CUSTOMER PARTICULAR REQUIREMENTS FOR ACCURACY
                                    OF DATA INPUT AND OUTPUT, AND FOR MAINTAINING A MEANS EXTERNAL TO THE SITE FOR
                                    THE RECONSTRUCTION OF ANY LOST DATA. OUR COMPANY DOES NOT ASSUME ANY
                                    RESPONSIBILITY OR RISK FOR SUBSCRIBER/CUSTOMER USE OF THE INTERNET. USERS USE OF
                                    THE SITE IS AT THEIR OWN RISK. THE CONTENT IS PROVIDED "AS IS" AND WITHOUT
                                    WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED. OUR COMPANY DISCLAIMS ALL
                                    WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                    PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. OUR COMPANY DOES NOT WARRANT
                                    THAT THE FUNCTIONS OR CONTENT CONTAINED IN THE SITE WILL BE UNINTERRUPTED OR
                                    ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER THAT
                                    MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. OUR COMPANY
                                    DOES NOT WARRANT OR MAKE ANY REPRESENTATION REGARDING USE, OR THE RESULT OF USE,
                                    OF THE CONTENT IN TERMS OF ACCURACY, RELIABILITY, OR OTHERWISE. THE CONTENT MAY
                                    INCLUDE TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS, ANDWE MAY MAKE CHANGES
                                    OR IMPROVEMENTS AT ANY TIME. USER, AND NOT WE, ASSUME THE ENTIRE COST OF ALL
                                    NECESSARY SERVICING, REPAIR OR CORRECTION IN THE EVENT OF ANY LOSS OR DAMAGE
                                    ARISING FROM THE USE OF THE SITE OR ITS CONTENT. OUR COMPANY MAKES NO WARRANTIES
                                    THAT SUBSCRIBER/CUSTOMER USE OF THE CONTENT WILL NOT INFRINGE THE RIGHTS OF
                                    OTHERS AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ERRORS OR OMISSIONS IN
                                    SUCH CONTENT. OUR COMPANY DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING
                                    THE CONTENT'S APPROPRIATENESS OR AUTHORIZATION FOR USE IN ALL COUNTRIES, STATES,
                                    PROVINCES, COUNTY OR ANY OTHER JURISDICTIONS. IF SUBSCRIBER/CUSTOMER CHOOSES TO
                                    ACCESS THE SITE, SUBSCRIBER/CUSTOMER DOES SO ON SUBSCRIBER'S/CUSTOMER'S OWN
                                    INITIATIVE AND RISK AND IS RESPONSIBLE FOR COMPLIANCE WITH ALL APPLICABLE LAWS.
                                </div>
                                <div><br/></div>
                                <div>21. Membership; Subscription fees and user communication</div>
                                <div>The current membership rate which will appear on Subscriber credit card bill,
                                    will be debited from Subscriber's account according to Subscriber's choice of
                                    payment means. "OPT-IN AND USER COMMUNICATION" - Subscriber expressly and
                                    specifically acknowledges and agrees that the email address or other means of
                                    communicating with Subscriber may be used to send the Subscriber offers,
                                    information or any other commercially oriented emails or other means of
                                    communications. More specifically, some offers may be presented to the
                                    Subscriber via email campaigns or other means of communications with the option
                                    to express the Subscriber's preference by either clicking or entering "accept"
                                    (alternatively "yes") or "decline" (alternatively "no"). By selecting or
                                    clicking the "accept" or "yes", the Subscriber indicates that the Subscriber
                                    "OPTS-IN" to that offer and thereby agrees and accepts that the Subscriber's
                                    personal information, including its email address and data may be used for that
                                    matter or disclosed to third-parties.
                                </div>
                                <div><br/></div>
                                <div>22. Sponsors, Advertisers and Third Parties</div>
                                <div>The Site may provide links to sponsor, advertiser, or other third party
                                    websites that are not owned or controlled by us. Inclusion of, linking to, or
                                    permitting the use or installation of any third party site, applications,
                                    software, content or advertising does not imply approval or endorsement thereof
                                    by us. Our company has no control over, and assumes no responsibility for, the
                                    content, privacy policies, or practices of any third parties. By accessing or
                                    using the Site, You agree to release our company from any and all liability
                                    arising from Your use of any third-party website, content, service, or software
                                    accessed through the Site. Your communications or dealings with, or
                                    participation in promotions of, sponsors, advertisers, or other third parties
                                    found through the Site, are solely between You and such third parties. You agree
                                    that we shall not be responsible or liable for any loss or damage of any sort
                                    incurred as the result of any dealings with such sponsors, third parties or
                                    advertisers, or as the result of their presence in the Site.
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