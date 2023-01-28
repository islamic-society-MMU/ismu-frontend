import heroImg from "../assets/images/background_two.jpeg"

const Hero = () => {
    return (
      <div className='hero'>
        <img src={heroImg} alt='hero-img' />
        <div className='hero-text'>
          <h1>
            Want to learn and grow together as one ummah in islam?
          </h1>
          <button>join us</button>
        </div>
      </div>
    );
}
 
export default Hero;