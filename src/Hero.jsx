import './Hero.css'
import man from './assets/man.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Explore the latest and best of <span>Gentle men’s watch </span></h1>
      </div>
      <div className="her-text">
        <h1>Explore the latest <br /> and best of <span>Gentle <br /> men’s watch </span></h1>
      </div>
      <div className="hero-img">
        <img src={man} alt="Model" />
      </div>
    </div>
  )
}

export default Hero