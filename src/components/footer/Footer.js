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
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Features</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Enterprise</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Security</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Trust</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Customer Stories</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Pricing</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Integrations</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Oneburner Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Company</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="https://events.salesruby.com" target="_blank" rel="noreferrer" className="footer-list">Events</a>
                                </li>
                                <li className="list-items">
                                    <a href="/careers" className="footer-list">Careers</a>
                                </li>
                                <li className="list-items">
                                    <a href="/about" className="footer-list">About Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/contact" className="footer-list">Contact Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/pricing" className="footer-list">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Oneburner for teams</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="https://events.salesruby.com" target="_blank" rel="noreferrer" className="footer-list">Events</a>
                                </li>
                                <li className="list-items">
                                    <a href="/careers" className="footer-list">Careers</a>
                                </li>
                                <li className="list-items">
                                    <a href="/about" className="footer-list">About Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/contact" className="footer-list">Contact Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/pricing" className="footer-list">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Resources</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="https://events.salesruby.com" target="_blank" rel="noreferrer" className="footer-list">Events</a>
                                </li>
                                <li className="list-items">
                                    <a href="/careers" className="footer-list">Careers</a>
                                </li>
                                <li className="list-items">
                                    <a href="/about" className="footer-list">About Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/contact" className="footer-list">Contact Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/pricing" className="footer-list">Pricing</a>
                                </li>
                            </ul>
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