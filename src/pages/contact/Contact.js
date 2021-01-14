import React from 'react';

import "./Contact.css";

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