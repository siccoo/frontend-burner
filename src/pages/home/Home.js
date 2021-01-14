import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css";

import HeaderImg from "../../images/lanidng-image.png";
import Brands from "../../images/Component 7.png";
import Video from "../../images/Rectangle 26.png";
import Table1 from "../../images/Frame 2 1.png";
import Table2 from "../../images/Rectangle 22.png";
import Table3 from "../../images/Rectangle 19.png";
import Table4 from "../../images/Rectangle 21.png";
import Tools from "../../images/integration tools.png";
import Lead from "../../images/Component 3.png";
import { FiChevronRight } from 'react-icons/fi';

const Home = () => {
    return (
        <div>
            <section className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <h1>Collaborate with your team and get more done</h1>
                            <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
                            <Link to="/" className="btn-solid-lg">Start Free Trial <FiChevronRight/></Link>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img className="img-fluid" src={HeaderImg} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="home1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Over 500+ companies bond teams together with Oneburner</p>
                            <img className="brands-img" src={Brands} alt="brands"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Manage team activities all in one place</h5>
                            <p>Keep your team organized and informed with activities that are up to date.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={Video} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="home3">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid" src={Table1} alt="alternative"  />
                        </div>
                        <div className="col-md-6">
                            <h6>Bring your team up to speed</h6>
                            <p>Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h6>Automated task timeline</h6>
                            <p>View dates, projects, calendar, sprint and more with reliability.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={Table2} alt="alternative"  />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <img className="tools-img" src={Tools} alt="alternative" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid" src={Table4} alt="alternative"  />
                        </div>
                        <div className="col-md-6">
                            <h6>Timeless report generator</h6>
                            <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h6>Efficient lead management</h6>
                            <p>Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={Table3} alt="alternative"  />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid" src={Lead} alt="alternative"  />
                        </div>
                        <div className="col-md-6">
                            <h6>Timeless report generator</h6>
                            <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="home4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5>Choose a better way to work</h5>
                            <p>No credit card details | No additional installation | No time wasting</p>
                            <Link to="/" className="btn-solid-lg">Start Free Trial <FiChevronRight/></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;