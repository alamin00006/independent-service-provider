import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Subscribe></Subscribe>
          <Footer></Footer>
        </div>
    );
};

export default Home;