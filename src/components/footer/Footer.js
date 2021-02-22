import React from 'react';

import "./Footer.css";

import Logo from "../../images/burner.png";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row columns-wrapper">
                        <div className="col-md-6 text-left">
                            <img src={Logo} alt="oneburner" className="footer-logo" />
                        </div>
                        <div className="col-md-6 text-left">
                            {/* <img src={Logo} alt="oneburner" className="footer-logo" /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <p>No 1 CRM solution in Africa</p>
                            <span>Terms of Use | Privacy Policy</span><br/><br/>
                            <span>Get in touch</span>
                            <p>+234-80-000-0000</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <h6>Product</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Company</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Oneburner for teams</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Resources</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>© 2020 Oneburner.com | All Rights Reserved. </p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;