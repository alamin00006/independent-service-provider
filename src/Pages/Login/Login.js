import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import {useAuthState, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    
   const [erorr, setError] = useState('');

    const [
        signInWithEmailAndPassword,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      if(user){
        navigate('/home')
    }


    const emailCheck = (e) =>{

    const emailRegex = /\S+@\S+\.\S+/;
   const validEmail = emailRegex.test(e.target.value);
   if(!validEmail){
    const p = <p className='text-danger'>please valid email</p>
    return setError(p);
   }else{
    return setError('')
   }
    }
 const handleSubmit =(e)=>{
   e.preventDefault();

   const email = e.target.email.value;
   const password = e.target.password.value;
   signInWithEmailAndPassword(email, password);
   


 }


    return (
       
            <div className='d-flex justify-content-center login-form'>
            
            <form onSubmit={handleSubmit}>
            <h1 className='form-title'>Please Login</h1>
                <label htmlFor="email">Email</label>
                <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
                <p>{erorr}</p>

                <label htmlFor="password">Password</label>
                <input className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
               <input className='bg-info border-0 py-2 mt-2 fs-5' type="submit" value="Login" />

               <p>No Account<Link to = "/signin">Please Sign In
           </Link></p>
            </form>
            
        </div>
        
    );
};

export default Login;