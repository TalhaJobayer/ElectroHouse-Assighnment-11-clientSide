import React, { useRef, useState } from 'react';
import { Button, NavLink} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './LogIn.css'

const LogIn = () => {
    
    const [Error ,setError]=useState('')
    const emailRef = useRef('');
    const navigate=useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
    //  ========================logIn with Email and password start====================
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
    
  
    const handleSubmitSignIn=(event)=>{
      event.preventDefault();
     
      const email=event.target.email.value;
      const password=event.target.password.value;
      signInWithEmailAndPassword(email,password)
      
      console.log(email , password);
      if(loading){
        return  <Loading></Loading>;
      }
       if(user){
        navigate(from, { replace: true });
  
       
          }
         
     if (error ) {
      setError(error?.message)
         console.log(Error);
     }
   }
   const resetPassword=async (event)=>{
    const email=emailRef.current.value;
    if(email){
      sendPasswordResetEmail(email)
      toast ('Email sent')
    }
    else{
        toast ('wirte your email first')
    }
    
   }
  
    return (
        <div >
        <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                        
                        <h3>Sign Into Your Account</h3>
                        <form onSubmit={handleSubmitSignIn}>
                            <div className="form-group form-box clearfix">
                                <input name="email" ref={emailRef} type="email" className="form-control" placeholder="Email Address" aria-label="Email Address"/>
                               
                            </div>
                            <div className="form-group form-box clearfix">
                                <input name="password" type="password" className="form-control"  placeholder="Password" aria-label="Password"/>
                               
                            </div>
                            <div className="checkbox form-group form-box">
                                <div className="form-check float-start">
                                    <input className="form-check-input" type="checkbox" id="rememberme"/>
                                    <label className="form-check-label" >
                                        Remember me
                                    </label>
                                </div>
                               
                             
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-theme"><span>Login</span></button>
                            
                            </div>
                            <p style={{color:"red"}}> { Error }</p>
                            <div className="extra-login form-group clearfix">
                                <span>Or Login With</span>
                            </div>
                            
                        </form>
                        <SocialLogin></SocialLogin>
                        <div className="clearfix"></div>
                       <p>Don't have an account? <Link style={{color:"blue"}} to={"/signUp"}>Register here</Link></p>
                       <Link onClick={resetPassword} style={{color:"blue"}} to={""}>Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<ToastContainer></ToastContainer> 
        </div>
    );
};

export default LogIn;