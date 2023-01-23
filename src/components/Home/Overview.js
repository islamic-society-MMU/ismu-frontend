import React from 'react';
// import donationImg from './../../assets/images/donation.jpg';
import donorImg from './../../assets/images/donor.jpg';
import eventImg from './../../assets/images/event-illustration.png';
import illustrationImg from './../../assets/images/islam-illustration.webp';

const Overview = () => {
  return (
    <section className='overview'>
      {/* <div className='overview-item'>
        <img src={donationImg} alt='donation' />
        <div className='overview-details'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, nemo rerum. Tempora mollitia distinctio eum
            ipsa saepe provident aut nostrum.
          </p>
          <button>learn more</button>
        </div>
      </div> */}
      <div className='overview-item'>
        <img src={illustrationImg} alt='Islam illustration' />
        <div className='overview-details'>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, nemo rerum. Tempora mollitia distinctio eum
            ipsa saepe provident aut nostrum.
          </h4>
          <button>learn more</button>
        </div>
      </div>
      <div className='overview-item'>
        <img src={eventImg} alt='event illustration' />
        <div className='overview-details'>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, nemo rerum. Tempora mollitia distinctio eum
            ipsa saepe provident aut nostrum.
          </h4>
          <button>learn more</button>
        </div>
      </div>
      <div className='overview-item'>
        <img src={donorImg} alt='donor' />
        <div className='overview-details'>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, nemo rerum. Tempora mollitia distinctio eum
            ipsa saepe provident aut nostrum.
          </h4>
          <button>learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Overview;
