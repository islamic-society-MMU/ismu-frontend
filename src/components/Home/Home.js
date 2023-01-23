import React from 'react';
import Footer from '../Footer/Footer';
import Hero from './Hero';
import Overview from './Overview';

const Home = ({ theme }) => {
  return (
    <div className='home'>
      <Hero />
      <Overview theme={theme} />
      <Footer />
    </div>
  );
};

export default Home;
