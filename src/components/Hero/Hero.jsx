import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heri from "./images/hero.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,    
      easing: 'ease-out-cubic',
      once: true,         
      offset: 80,
    });
  }, []);

  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__container">
          <div className="hero__box">
    
            <a
              className='hero__link'
              href="#"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Find your dream place
            </a>

            <h1
              className='hero__title'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Find house for your family in minutes
            </h1>

            <p
              className='hero__text'
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.
            </p>

            <form
              className="hero__form"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input type="text" placeholder='Search properties...' />
              <button type='submit'>Find property</button>
            </form>
          </div>

          <div
            className='hero__img'
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1100"
          >
            <img src={heri} alt="Hero House" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;