import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css";

import HeaderImg from "../../images/lanidng-image.png";
import Brands from "../../images/Component 7.png";
import Video from "../../images/Rectangle 26.png";
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
        </div>
    )
}

export default Home;