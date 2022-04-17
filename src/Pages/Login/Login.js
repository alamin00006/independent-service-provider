import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


 const handleSubmit =(e)=>{
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   createUserWithEmailAndPassword(email, password);
 }


    return (
       
            <div className='d-flex justify-content-center login-form'>
            
            <form onSubmit={handleSubmit}>
            <h1 className='form-title'>Please Login</h1>
                <label htmlFor="email">Email</label>
                <input className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />

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