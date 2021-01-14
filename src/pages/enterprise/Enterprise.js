import React from 'react';
import { Link } from "react-router-dom";

import "./Enterprise.css";

import EheaderImg from "../../images/Component 4.png";
import Brands from "../../images/Component 7.png";
import List from "../../images/check-circle.png";
import Award from "../../images/award.png";
import Tools from "../../images/integration tools.png";

const Enterprise = () => {
    return (
        <div>
            <section className="e-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img className="E-img" src={EheaderImg} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Over 500+ companies bond teams together with Oneburner</p>
                            <img className="brands-img" src={Brands} alt="brands"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>How Oneburner help enterprises grow</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Oneburner software solution helps your business by creating an enabling environment for easy communication and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime SLA and Data security</p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <img className="check-list" src={List} alt="alternative" /> Data protection and control
                            </p>
                            <p>
                                <img className="check-list" src={List} alt="alternative" /> Reporting and analytics
                            </p>
                            <p>
                                <img className="check-list" src={List} alt="alternative" /> Use single sign-on and multi-factor authentication to secure accounts
                            </p>
                            <p>
                                <img className="check-list" src={List} alt="alternative" /> Enterprise integration with other tools
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise3">
                <div className="container">
                    <div className="row">
                        <div className=" e-wrapper">
                            <div className="col-md-6 text-left">
                                <img className="award" src={Award} alt="alternative" />
                            </div>
                            <div className="col-md-6">
                                <h3>Best Collaboration Software</h3>
                                <p>Africa tech coalition award 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img className="tools-img" src={Tools} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Enterprise;