import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

import Logo from "../../images/burner.png";
import { FiChevronDown } from "react-icons/fi";
import {
    FaFacebookF as FacebookIcon,
    FaTwitter as TwitterIcon,
    FaLinkedinIn as LinkedinIcon,
    FaYoutubeSquare as YoutubeIcon,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row columns-wrapper">
                        <div className="col-md-6 text-left">
                            <img src={Logo} alt="oneburner" className="footer-logo" />
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2 text-right">
                            <div id="footerbarDropdown" className="footerbar-collapse footer-border">
                                <ul className="footerbar">
                                    <li className=" dropdown">
                                        <Link className="dropdown-link" to="/" data-toggle="dropdown">English <FiChevronDown /></Link>
                                        <div className="dropdown-menu">
                                            <Link to="/" className="dropdown-item">
                                                    English
                                            </Link>
                                            <Link to="/" className="dropdown-item">
                                                    Spanish
                                            </Link>
                                        </div>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <p>No 1 CRM solution in Africa</p>
                            <span>Terms of Use | Privacy Policy</span><br/><br/>
                            <span>Get in touch</span>
                            <p>+234-80-000-0000</p>
                            <div className="social_info">
                                <a href="https://twitter.com" rel="">
                                    <FacebookIcon />
                                </a>
                                <a href="https://facebook.com" rel="">
                                    <FacebookIcon />
                                </a>
                                <a href="https://linkedin.com" rel="">
                                    <LinkedinIcon />
                                </a>
                            </div>
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
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">About Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Contact Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Careers</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">In the News</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Oneburner for teams</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Engineering</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Financial Services</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">CRM and Sales</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">IT</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Marketing </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Customer Support </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Human Resources </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Project Management </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Remote Work </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Resources</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Community</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Guides</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Templates</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Video Tutorials</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Professional Services</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Knowledge Base</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Blog</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Webinars</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Find a Partner</a>
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