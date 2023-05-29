import React from 'react';
import './ReturnPolicy.css'

const ReturnPolicy = ({setReturn}) => {
    return (
        <div className="returnPolicy" onClick={()=>setReturn(false)}>
            <div className="returnBlock">
                <h1>Return Policy</h1>
                <p>
                    Products can be returned within 30 days of delivery for a FULL Refund
                    <br/>
                    <br/>

                    Items must be received in original condition - unused and in original packaging.
                    <br/>
                    <br/>

                    To complete your return, we require your receipt or proof of purchase. Please include this in your
                    parcel when returning your item.
                    <br/>
                    <br/>

                    We process all returns within one week of receiving your items and we will send you an email with the
                    details of your processed return.
                    <br/>
                    <br/>

                    Please contact is via our Contact Page if you believe your product is damaged or faulty.Buyer will be
                    responsible for paying for your own shipping costs for returning your item.
                    <br/>
                    <br/>
                    Shipping costs are non-refundable.
                    <br/>
                    <br/>
                    If 30 days have gone by since you received your order, unfortunately we cannot offer you a return or
                    exchange.
                </p>
                <h2>To start a return, please message us via the Contact Page with your:</h2>
                <p>
                    Full Name
                    <br/>
                    Order Number
                    <br/>
                    Request for Return
                </p>
                <h2>
                    Refunds
                </h2>
                <p>
                    Once your return is received and inspected, we will send you an email to notify you that we have
                    received your returned item. We will also notify you of the approval or rejection of your refund. If you
                    are approved, then your refund will be processed, and a credit will automatically be applied to your
                    credit card or original method of payment, within a certain amount of days.
                    <br/>
                    <br/>
                    Late or missing refunds (if applicable)
                    If you haven’t received a refund yet, first check your bank account again. Then contact your credit card
                    company, it may take some time before your refund is officially posted. Next contact your bank. There is
                    often some processing time before a refund is posted. If you’ve done all of this and you still have not
                    received your refund yet, please contact us our Contact Page.
                </p>
            </div>
        </div>
    );
};

export default ReturnPolicy;