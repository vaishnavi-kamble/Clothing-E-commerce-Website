import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';
import Carousel from 'react-bootstrap/Carousel';

// Import Images
import homepaging1 from '../Assests/slider1.jpg';
import homepaging2 from '../Assests/slider2.jpg';
import homepaging3 from '../Assests/slider3.jpg';

export const Hero = () => {
  return (
    <div className="hero-container">
      <Carousel fade interval={1000} pause="hover" indicators controls>
        <Carousel.Item>
          <img className="d-block w-100 slider-img" src={homepaging1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 slider-img" src={homepaging2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 slider-img" src={homepaging3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;