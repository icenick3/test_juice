import React from 'react';
import './FAQ.css'

const Faq = ({setFAQ}) => {
    return (
        <div className="returnPolicy4" onClick={()=> setFAQ(false)}>
            <div className="returnBlock4">
                <h1>FAQ's</h1>
                <h2>Do I Have to Order Online?</h2>
                <p>We’re an online retailer, so it’s definitely the best way. Don’t worry, we’ve got you covered with really fast, safe and secure payment option, and we’ll make sure we get your stuff to you fast.</p>

                <h2>Is it Safe to Order Online?</h2>
                <p>Of course! We use industry-standard encryption systems for potentially sensitive information, such as your name, address and other critically sensitive information. Information passed between your computer and our website cannot be read in the event of someone else intercepting it.</p>

                <h2>Payment Options</h2>
                <p>Pay for your purchases using Visa, Visa Debit, MasterCard, American Express.</p>

                <h2>Checking Out</h2>
                <p>By clicking the "Checkout" button in your cart, you will be asked to either log in to your account or to create one.</p>
                <p>If you don't have an account, you will be asked to create one with your shipping address information. Select 'use this address for billing' if your billing address is the same as your shipping address, and then proceed to the next step.</p>
                <p>If you unselect the box 'use this address for billing', you will be able to enter your billing address now.</p>
                <p>If you have a discount code, you can enter this now! Complete your order, simply confirm by reviewing the order totals and entering your payment information. Then click the "Pay Now" button. Upon completion, you will be given an order number and you will receive an email confirmation of your order details. So Easy.</p>

                <h2>When We Have Received Your Order</h2>
                <p>Once you’ve placed your order, you will be directed to an order confirmation message, which will contain your order details. This information will also be emailed to you, but it could take up to 30 minutes to arrive. Once our team at the warehouse have processed your order, you will receive a second email to let you know that your order has been shipped. If an email does not appear to have been received, please check your spam folder.</p>

                <h2>Incorrect or Faulty Items</h2>
                <p>We're sorry to hear that! Hit us up within 30 days of receiving your goods via our Contact Page with your order number. Our Customer Care team will get on this, ASAP!</p>

                <h2>Payment from Your Account</h2>
                <p>If there is an issue with the payment, either your card issuer or a member of the Customer Care team will contact you.</p>

            </div>
        </div>
    );
};

export default Faq;