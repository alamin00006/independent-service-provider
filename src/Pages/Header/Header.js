import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='bg-info'>
            <div className='container navber'>
            <div>
                <h1>Logo</h1>
            </div>
           <div>
           <Link to= '/home'>Home</Link>
            <Link to= '/home#services'>Services</Link>
            <Link to= '/health'>Health and Medicine</Link>
            <Link to= '/about'>About</Link>
            <Link to= '/login'>Login</Link> 
           </div>
            </div>
        </nav>
    );
};

export default Header;