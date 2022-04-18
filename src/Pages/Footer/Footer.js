import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='row w-100 bg-dark p-5 text-white'>
            <div className='col-lg-4 col-sm-12'>
                <h3>Physical Medicine Speacilist</h3>
                <ul>
                    <li>Health Care Service</li>
                    <li>Any Where Any Time</li>
                </ul>
            </div>
            <div className='col-lg-4 col-sm-12'>
                <h3>Services</h3>
                <ul>
                    <li>Stemcell</li>
                    <li>PRP</li>
                    <li>Strocke fast Improve</li>
                    <li>Choronic Lumbago</li>
                    <li>Bels Pulsy</li>
                    <li>Therapy</li>
                </ul>
            </div>
            <div className='col-lg-4 col-sm-12'>
            <h3>Public Relation</h3>
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