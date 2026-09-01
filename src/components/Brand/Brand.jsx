import React from 'react';
import "./Brand.css";
import rasim1 from "./images/rasim1.png";
import rasim2 from "./images/rasim2.png";
import rasim3 from "./images/rasim3.png";
import rasim4 from "./images/rasim4.png";
import rasim5 from "./images/rasim5.png";
const Brand = () => {
  return (
      <section className='brand'>
            <div className="container">
                  <div className="brand__container">
                        <div className="brand__box">
                              <p className='brand__text'>As seen on the world's best magazines and media</p>
                              <span className='brand__span'>
                                   <img src={rasim1} alt="" />
                                   <img src={rasim2} alt="" />
                                   <img src={rasim3} alt="" />
                                   <img src={rasim4} alt="" />
                                   <img src={rasim5} alt="" />
                              </span>
                        </div>
                  </div>
            </div>
      </section>
  )
}

export default Brand
