import React, { useEffect } from 'react';
import Topbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import "./Enterprise.css";

import EheaderImg from "../../images/Component 4.png";
import Brands from "../../images/Component 7.png";
import List from "../../images/check-circle.png";
import Award from "../../images/award.png";
import Tools from "../../images/integration tools.png";
import Africa from "../../images/africa 1.png";
import { FiChevronRight } from 'react-icons/fi';

const Enterprise = () => {

    useEffect(() => {
        document.title = " Oneburner | Building an Enterprise application";
    }, []);

    return (
        <div>
            <section>
                <Topbar />
            </section>
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
                        <div className="e-wrapper mx-auto">
                            <div className="col-sm-12 col-md-10 offset-md-1">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="award" src={Award} alt="alternative" />
                                    </div>
                                    <div className="col-md-9 align-self-center pl-4">
                                        <h3>Best Collaboration Software</h3>
                                        <p>Africa tech coalition award 2020</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 text-right">
                                <img className="award" src={Award} alt="alternative" />
                            </div>
                            <div className="col-md-6">
                                <h3>Best Collaboration Software</h3>
                                <p>Africa tech coalition award 2020</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <img className="tools-img" src={Tools} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6>Our Regional Presence</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                            <img className="africa" src={Africa} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.</p>
                        </div>
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </section>

            <section className="enterprise6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Want to learn more on how we can <br/>impact your enterprise?</h2>
                            <br/>
                            <Link to="/contact" className="btn-solid-lg">Contact Sales <FiChevronRight/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Enterprise;