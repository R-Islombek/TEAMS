import React from 'react';
import "./How.css";
import Home from "./images/home.png";
import Key from "./images/key.png";
import Register from "./images/register.png";
import "./How.css";

const How = () => {
  return (
      <section className='how'>
          <div className="container">
               <div className="how__container">
                    <div className="how__box">
                          <h2 className='how__title'>How it works</h2>
                          <p className='how__text'>Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis.</p>
                    </div>
                    <ul className='how__list'>
                         <li className='how__item'>
                               <div className="how__icon-box">
                                    <img src={Register} alt="Register icon" />
                               </div>
                               <h3 className='how__title-name'>Evaluate Property</h3>
                               <p className='how__text-name'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
                         </li>
                         <li className='how__item'>
                               <div className="how__icon-box">
                                    <img src={Key} alt="Key icon" />
                               </div>
                               <h3 className='how__title-name'>Meet Your Realtor</h3>
                               <p className='how__text-name'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
                         </li>
                         <li className='how__item'>
                               <div className="how__icon-box">
                                    <img src={Home} alt="Home icon" />
                               </div>
                               <h3 className='how__title-name'>Close the Deal</h3>
                               <p className='how__text-name'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
                         </li>
                    </ul>
               </div>
          </div>
      </section>
  )
}

export default How;