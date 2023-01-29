import Cards from './Cards';
import Hero from './Hero';
import Progress from './Progress';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Cards />

      <div className='educate'>
        <h3>7%</h3>
        <p>
          With only 7% of the country having tree cover, Kenya is the
          least forested country in Africa. That works out as 67 trees
          per person rather than a global average of 420.
        </p>
      </div>
      <Progress />
    </div>
  );
};

export default Home;
