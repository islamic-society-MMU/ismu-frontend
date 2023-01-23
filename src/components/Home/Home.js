import React from 'react';
import Hero from './Hero';
import Overview from './Overview';

const Home = ({ theme }) => {
  return (
    <div className='home'>
      <Hero />
      <Overview theme={theme} />
    </div>
  );
};

export default Home;
