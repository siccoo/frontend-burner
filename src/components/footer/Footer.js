import React from 'react';

import "./Footer.css";

import Logo from "../../images/burner.png";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row columns-wrapper">
                        <div className="col-md-4 text-left">
                        <img src={Logo} alt="oneburner" className="footer-logo" />
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;