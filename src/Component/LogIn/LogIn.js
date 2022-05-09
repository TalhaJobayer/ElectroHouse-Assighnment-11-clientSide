import React from 'react';
import './LogIn.css'

const LogIn = () => {
    return (
        <div >
        <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                        
                        <h3>Sign Into Your Account</h3>
                        <form action="#" method="GET">
                            <div className="form-group form-box clearfix">
                                <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address"/>
                               
                            </div>
                            <div className="form-group form-box clearfix">
                                <input name="password" type="password" className="form-control" autocomplete="off" placeholder="Password" aria-label="Password"/>
                               
                            </div>
                            <div className="checkbox form-group form-box">
                                <div className="form-check float-start">
                                    <input className="form-check-input" type="checkbox" id="rememberme"/>
                                    <label className="form-check-label" for="rememberme">
                                        Remember me
                                    </label>
                                </div>
                                <a href="forgot-password-1.html" className="link-light float-end forgot-password">Forgot your password?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-theme"><span>Login</span></button>
                            </div>
                            <div className="extra-login form-group clearfix">
                                <span>Or Login With</span>
                            </div>
                        </form>
                        <div className="clearfix"></div>
                       <p>Don't have an account? <a href="register-1.html" className="thembo"> Register here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
           
        </div>
    );
};

export default LogIn;