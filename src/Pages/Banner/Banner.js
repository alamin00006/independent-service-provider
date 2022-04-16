import React from 'react';
import banner from '../../images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-title'>
            <h1 className='w-50'>This is My profession Serveice</h1>
            <input type="text" name="" placeholder='Serch your Service' id="" />
            <button className='btn btn-primary w-50 mt-2 fs-5'>Search</button>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;