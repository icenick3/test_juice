import React from 'react';
import './Shiping.css'

const Shiping = ({setShiping}) => {
    return (
        <div className="returnPolicy1" onClick={()=>setShiping(false)}>
            <div className="returnBlock1">
                <h1>SHIPPING & RETURNS</h1>

                <h2>Australian Residents</h2>

                <h3>Shipping Cost</h3>
                <p>Residents of Australia receive Free Australia Post Tracked Express Shipping.</p>

                <h3>Delivery Time</h3>
                <p>Orders are dispatched same day when placed before 4pm AEST. Express Shipping is 1-4 business days for delivery.</p>

                <h3>Tracking your order</h3>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>

                <h2>New Zealand Residents</h2>

                <h3>Shipping Cost</h3>
                <p>Residents of New Zealand receive Free Australia Post Tracked Express Shipping on all orders over $75. Orders under $75 incur a $4.95 postage fee.</p>

                <h3>Delivery Time</h3>
                <p>Orders are dispatched same day when placed before 1pm AEST. Express Shipping is 2-5 business days for delivery.</p>

                <h3>Tracking your order</h3>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>

                <h2>United States Residents</h2>

                <h3>Shipping Cost</h3>
                <p>Residents of USA receive Free USPS Tracked Express Shipping on all orders over $75. Orders under $75 incur a $4.95 postage fee.</p>

                <h3>Delivery Time</h3>
                <p>Orders are dispatched same day when placed before 1pm AEST. Express Shipping is 3-6 business days for delivery.</p>

                <h3>Tracking your order</h3>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>

                <h2>Canada Residents</h2>

                <h3>Shipping Cost</h3>
                <p>Residents of USA receive Free Canada Post Tracked Express Shipping on all orders over $75. Orders under $75 incur a $4.95 postage fee.</p>

                <h3>Delivery Time</h3>
                <p>Orders are dispatched same day when placed before 1pm AEST. Express Shipping is 3-6 business days for delivery.</p>

                <h3>Tracking your order</h3>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>

                <h2>United Kingdom Residents</h2>

                <h3>Shipping Cost</h3>
                <p>Residents of USA receive Free Royal Mail Tracked Express Shipping on all orders over $75. Orders under $75 incur a $4.95 postage fee.</p>

                <h3>Delivery Time</h3>
                <p>Orders are dispatched same day when placed before 1pm AEST. Express Shipping is 3-6 business days for delivery.</p>

                <h3>Tracking your order</h3>
                <p>You will receive a Shipping Notification email with tracking information as soon as your order ships.</p>

                <h2>Returns policy</h2>

                <p>Products can be returned within 30 days of delivery for a FULL Refund</p>
                <p>Items must be received in original condition - unused and in original packaging.</p>
                <p>To complete your return, we require your receipt or proof of purchase. Please include this in your parcel when returning your item.</p>
                <p>We process all returns within one week of receiving your items and we will send you an email with the details of your processed return.</p>
                <p>Please contact us via our Contact Page if you believe your product is damaged or faulty.</p>
                <p>Buyer will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
                <p>If 30 days have gone by since you received your order, unfortunately we cannot offer you a return or exchange.</p>
                <p>To start a return, please message us via the Contact Page with your:</p>
                <ul>
                    <li>Full Name</li>
                    <li>Order Number</li>
                    <li>Request for Return</li>
                </ul>

                <h2>Refunds</h2>

                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

                <h2>Late or missing refunds (if applicable)</h2>

                <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us via our Contact Page.</p>

            </div>
        </div>
    );
};

export default Shiping;