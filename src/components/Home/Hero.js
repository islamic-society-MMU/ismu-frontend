import React from 'react';
import heroImage from './../../assets/images/background_two.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-img'>
        <img src={heroImage} alt='Hero' />
      </div>

      <div className='hero-text'>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ipsum, doloremque!
        </h1>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className='hero-btns'>
          <button>join us</button>
          <button>donate</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
