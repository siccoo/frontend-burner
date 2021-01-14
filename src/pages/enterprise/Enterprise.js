import React from 'react';
import { Link } from "react-router-dom";

import "./Enterprise.css";

import EheaderImg from "../../images/Component 4.png";
import Brands from "../../images/Component 7.png";

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
                        <div className="col-md-12">
                            <h3>How Oneburner help enterprises grow</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Enterprise;