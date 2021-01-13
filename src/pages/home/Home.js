import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css";

import HeaderImg from "../../images/lanidng-image.png"

const Home = () => {
    return (
        <div>
            <section className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <h1>Collaborate with your team and get more done</h1>
                            <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
                            <Link to="/" className="btn-solid-lg home-btn">Request a demo</Link>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img className="img-fluid" src={HeaderImg} alt="alternative" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;