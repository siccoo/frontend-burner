import React from 'react';

import "./Footer.css";

import Logo from "../../images/burner.png";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row columns-wrapper">
                        <div className="col text-left col-sm-4 col-md-4 col-lg-4">
                        <img src={Logo} alt="oneburner" className="footer-logo" />
                        </div>
                        <div className="col text-left col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div className="col text-left col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div className="col text-left col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div className="col text-left col-sm-2 col-md-2 col-lg-2">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;