import React, { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [Error,setError]=useState('')
    const navigate=useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading></Loading>
    }
    if (error ) {
        setError( error?.message)
       
 
     }
     
     if (user ) {
      
         navigate(from, { replace: true });
     }
     
    return (
        <div>
            <p>{Error}</p>
             <FcGoogle  className='googleIcon' onClick={() => signInWithGoogle()} ></FcGoogle>
        </div>
    );
};

export default SocialLogin;