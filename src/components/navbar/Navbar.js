import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../../images/burner.png";

const Topbar = () => {

    return (
            <section className="nav-section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <Link to={'/'} className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={Logo} alt="oneburner" className="home-logo" />
                    </Link>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">Product <FiChevronDown /></Link>
                                <div className="dropdown-menu">
                                    
                                </div>  
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">Pricing</Link>
                                
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/enterprise" data-toggle="dropdown">Enterprise</Link>
                            </li><br />
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Support</Link>
                            </li><br />
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/contact">Contact Sales</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/login">Log In</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn" href="/">Try for Free <FiChevronRight/></Link>
                                </li><br />
                            </ul>
                        </div>
                    </nav> 
                </div>
        </section>
    )
}

export default Topbar;