import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='d-flex justify-content-center login-form'>
            
        <form>
        <h1 className='form-title'>Please SingIn</h1>
            <label htmlFor="email">Email</label>
            <input className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
           <input className='bg-info border-0 py-2 mt-2 fs-5' type="submit" value="SignIn" />
           <p>Already have a Account<Link to = "/login">Please Login
           </Link></p>
           
        </form>
    </div>
    
    );
};

export default SignUp;