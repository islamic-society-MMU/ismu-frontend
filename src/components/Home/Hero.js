import React from 'react';
import desktopHeroImage from './../../assets/images/background_two.jpeg';
import mobileHeroImage from './../../assets/images/mobile-hero.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-img'>
        <picture>
          <source
            media='(min-width: 500px)'
            srcSet={desktopHeroImage}
          />
          <source
            media='(max-width: 400px)'
            srcSet={mobileHeroImage}
          />
          <img src={desktopHeroImage} alt='Hero' />
        </picture>
      </div>

      <div className='hero-text'>
        <h1>
          Want to learn and grow together as one ummah in islam?
        </h1>
        <div className='hero-btns'>
          <button>join us</button>
          <button>donate</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
