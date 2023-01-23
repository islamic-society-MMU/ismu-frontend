import React from 'react';
import Footer from '../Footer/Footer';
import Hero from './Hero';
import Overview from './Overview';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Overview />
      <Footer />
    </div>
  );
};

export default Home;
