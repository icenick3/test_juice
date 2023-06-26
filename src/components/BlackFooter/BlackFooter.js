import React, {useState} from 'react';
import './BlackFooter.css'

const BlackFooter = ({setReturn, setShiping, setAbout, setContactUs, setFaq}) => {

    const [active, setActive] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 5000)
    }

    return (
        <div id="blackFooter">
            <div id="mainBlackFooter">
                <div id="SEFooter">
                    <h2>Liens rapides</h2>
                    <ul>
                        <li onClick={() => setAbout(true)}>Privacy Policy</li>
                        <li onClick={() => setContactUs(true)}>Contact US</li>
                        <li onClick={() => setFaq(true)}>Terms of Service</li>
                        <li onClick={() => setReturn(true)}>Payment Policy</li>
                    </ul>
                </div>
                <div id="FEFooter">
                    <p>support@sound.scape</p>
                    <br/>
                    <p>49 Dalberg Rd, London SW2 1AJ, Great Britain</p>
                    <br/>
                    <p>Cell: +447909777249</p>
                </div>
                <div id="TEFooter">
                    <h2>Restez au courant !</h2>
                    <p>Abonnez-vous à notre newsletter</p>
                    <form onSubmit={onsubmit}>
                        <input type="email" placeholder={"Email"}/>
                        {active && <p>Merci de vous être abonné à notre boutique</p>}
                        <button>S'inscrire</button>
                    </form>
                </div>
            </div>
            <p className="ARText">This site is not part of the Facebook or Facebook Inc. website and is not endorsed by Facebook. FACEBOOK
                is a trademark of FACEBOOK, Inc. Facebook provides a platform to serve advertising, but the opinions
                and/or views expressed on this website are not representative of Facebook, Inc.

                The views and/or opinions expressed on our website's social media platforms, including, but not limited
                to, our blogs and Facebook pages, represent the thoughts of individual bloggers and online communities,
                and not necessarily those of our website or any of its business partners, affiliates, or any of their
                respective officers, employees, staff, or board members. The views and opinions expressed on these pages
                do not reflect the views of the site on which they are posted, other sites affiliated with the site,
                personnel involved in the maintenance of the site or any member of the site.

                The opinions or views expressed on the social media platforms of this website are not representative of
                Facebook, Inc.

                While our website makes reasonable efforts to monitor and/or moderate content posted on its social media
                platforms, we do not moderate all comments and cannot always respond in a timely manner to online
                inquiries.

                All new customers are entered into a drawing for the campaign product posted. If you are the lucky
                winner, you will be contacted directly by email. This special offer includes a three-day trial to an
                affiliate service, after which the subscription fee of thirty-three euros every fourteen days - will be
                automatically deducted from your credit card. If for any reason you are not satisfied with the service,
                you can cancel your account within three days. The service will be renewed every thirty days until
                cancelled. This campaign will expire on December thirty-first of this year. If you wish to participate
                without signing up for a three-day trial at Toolsandtoys, please send an e-mail.</p>
        </div>
    );
};

export default BlackFooter;