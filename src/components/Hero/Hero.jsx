import React from 'react';
import heri from "./images/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__container">
          <div className="hero__box">
            <a className='hero__link' href="#">Find your dream place</a>
            <h1 className='hero__title'>Find house for your family in minutes</h1>
            <p className='hero__text'>
              Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.
            </p>
            <form className="hero__form">
              <input type="text" placeholder='Search properties...' />
              <button type='submit'>Find property</button>
            </form>
          </div>
          <div className='hero__img'>
            <img src={heri} alt="Hero House" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;