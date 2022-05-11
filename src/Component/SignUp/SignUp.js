import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const [Error ,setError]=useState('')
  const [updateProfile] = useUpdateProfile(auth);
  const navigate=useNavigate();
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
// =====================createUserWithEmailAndPassword====================
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit=(event)=>{
     event.preventDefault()
     const name=event.target.name.value;
     const email=event.target.email.value;
     const password=event.target.password.value;
     createUserWithEmailAndPassword(email,password)
     console.log(user);
     updateProfile({displayName:name})
     console.log(email , password);
     
    
     if( loading){
       return <Loading></Loading>;
     }
     if (error ) {
      setError(error?.message)
         console.log(Error);
     }
    if(user){
     
      sendEmailVerification()
      alert('Sent email');
      navigate('/')
    }
    
    
     
  }
    return (
        <div>
           
           <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                       
                        <h3>Create An Cccount</h3>
                        <form  onSubmit={handleSubmit} >
                            <div className="form-group form-box">
                                <input name="name" type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" required/>
                               
                            </div>
                            <div className="form-group form-box">
                                <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" required/>
                               
                            </div>
                            <div className="form-group form-box clearfix">
                                <input name="password" type="password" className="form-control"  placeholder="Password" aria-label="Password" required/>
                               
                            </div>
                            <div className="form-group checkbox form-box clearfix">
                                <div className="clearfix float-start">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberme"/>
                                        <label className="form-check-label">
                                            I agree to the terms of service
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-theme"><span>Register</span></button>
                            </div>
                            <p style={{color:"red"}}>{Error}</p>
   <br />
                            <div className="extra-login form-group clearfix">
                                <span>Or Login With</span>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <div className="clearfix"></div>
                        
                        <p>Already a member? <Link style={{color:"blue"}} to={"/Login"}>Login</Link></p>
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