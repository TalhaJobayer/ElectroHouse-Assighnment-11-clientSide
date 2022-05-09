import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
           <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                       
                        <h3>Create An Cccount</h3>
                        <form action="#" method="GET">
                            <div className="form-group form-box">
                                <input name="name" type="text" className="form-control" placeholder="Full Name" aria-label="Full Name"/>
                               
                            </div>
                            <div className="form-group form-box">
                                <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address"/>
                               
                            </div>
                            <div className="form-group form-box clearfix">
                                <input name="password" type="password" className="form-control" autocomplete="off" placeholder="Password" aria-label="Password"/>
                                <i className="flaticon-password"></i>
                            </div>
                            <div className="form-group checkbox form-box clearfix">
                                <div className="clearfix float-start">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberme"/>
                                        <label className="form-check-label" for="rememberme">
                                            I agree to the terms of service
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-theme"><span>Register</span></button>
                            </div>
                            <div className="extra-login form-group clearfix">
                                <span>Or Login With</span>
                            </div>
                        </form>
                        <div className="clearfix"></div>
                        
                        <p>Already a member? <a href="login-1.html">Login here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;