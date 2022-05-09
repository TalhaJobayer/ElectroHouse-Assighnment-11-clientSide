import React, { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [Error,setError]=useState('')
    const navigate=useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error ) {
        setError( error?.message)
       
 
     }
     
     if (user ) {
      
         navigate(from, { replace: true });
     }
     
    return (
        <div>
             <FcGoogle  className='googleIcon' onClick={() => signInWithGoogle()} ></FcGoogle>
        </div>
    );
};

export default SocialLogin;