import React from 'react';

import "./Contact.css";

import Flag from "../../images/Vector (5).png";

const Contact = () => {
    return (
        <div>
            <section className="contact-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div class="form-group row">
                                    <div class="col-lg-6">
                                        <label>Last Name</label>
                                        <input type="text" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="">First Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Work Email</label>
                                    <input type="email" id="email" />
                                </div>
                                <div class="input-group mb-3 mt-4 ">
                                    <div class="input-group-prepend">
                                    <label for="exampleInputPhoneNumber1">Phone Number</label>
                                        <span class="input-group-text">
                                            <img className="" src={Flag} alt="alternative" />
                                        </span>
                                    </div>
                                    <input type="tel" placeholder="+234" aria-label="Username" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPosition1">Product of Interest</label>
                                    <select className="" name="career-role" placeholder="Select an option">
                                        <option value="">Select the position you're applying for</option>
                                        <option value="Frontend_dev">Senior Frontend Developer</option>
                                        <option value=".NET_dev">.NET Developer</option>
                                        <option value="MERN_dev">MERN Stack Developer</option>
                                        <option value="Business_dev">Business Growth Developer</option>
									</select>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-6">
                                        <label>Company Name </label>
                                        <input type="text" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="">Company Size </label>
                                        <select className="" name="career-role" placeholder="Select an option">
                                            <option value="">Select an option</option>
                                            <option value="Frontend_dev">Senior Frontend Developer</option>
                                            <option value=".NET_dev">.NET Developer</option>
                                            <option value="MERN_dev">MERN Stack Developer</option>
                                            <option value="Business_dev">Business Growth Developer</option>
									    </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="help">How can our expert help you?</label>
                                    <textarea name="message" cols="20" rows="5" className="upLabel"  placeholder="Tell us anything" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" />
                                </div>
                                <button type="submit" className="">Contact Us</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;