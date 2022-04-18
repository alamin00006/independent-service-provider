import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='row w-100 bg-dark p-5 text-white'>
            <div className='col-lg-4 col-sm-12'>
                <h1>Physical Medicine Speacilist</h1>
                <ul>
                    <li>Health Care Service</li>
                    <li>Any Where Any Time</li>
                </ul>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <h1>Services</h1>
                <ul>
                    <li>Stemcell</li>
                    <li>PRP</li>
                    <li>Strock fast Improve</li>
                    <li>Choronic Lumbago</li>
                    <li>Bels Pulsy</li>
                    <li>Therapy</li>
                </ul>
            </div>
            <div className='col-lg-4 col-sm-12'>
            <h1>Public Relation</h1>
            <ul>
                <li>Apply as partner</li>
                <li>Career</li>
            </ul>
            
            </div>
            <h5 className='text-center'>copyright &copy;</h5>
        </div>
    );
};

export default Footer;