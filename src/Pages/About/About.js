import React from 'react';
import myPhoto from '../../images/myphoto.JPG'
const About = () => {
    return (
        <div className='row container'>
            
            <div className='col-lg-6'>
            <img className='w-75' src={myPhoto} alt="" />
            </div>
            <div className='col-lg-6'>
            <h1>Mohammad Al Amin</h1>
            <p>Diploma Engineer in Computer</p>
            <p>আমি আগামী তিন চার মাসের ভিতরে  ফুল স্টাক Web-Developer হতে চাই ইনশাআল্লাহ</p>
            <button className='btn btn-info px-5 fs-5'>Details Me</button>
            </div>
        </div>
    );
};

export default About;