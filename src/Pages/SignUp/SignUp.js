import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      if(user){
        navigate('/home')
    }
 const handleSubmit =(e)=>{
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   createUserWithEmailAndPassword(email, password);


 }

    return (
        <div className='d-flex justify-content-center login-form'>
            
        <form onSubmit={handleSubmit}>
        <h1 className='form-title'>Please Register</h1>
            <label htmlFor="email">Email</label>
            <input className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />

           <input className='bg-info border-0 py-2 mt-2 fs-5' type="submit" value="Register" />
           <p>Already have a Account<Link to = "/login">Please Login
           </Link></p>
           
        </form>
    </div>
    
    );
};

export default SignUp;