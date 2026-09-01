import React from 'react';
import comfort from "./images/comfort.png";
import "./Comfort.css";

const Comfort = () => {
  return (
      <section className='comfort'>
           <div className="container">
                <div className="comfort__container">
                      {/* Chap matnlar qismi */}
                      <div className="comfort__box">
                            <span className='comfort__badge'>Comfort first</span>
                            <h2 className='comfort__title'>The best houses for family comfort</h2>
                            <p className='comfort__text'>
                                Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.
                            </p>
                            <div className='comfort__btns'>
                                  <a className='comfort__btn-primary' href="#">Explore properties</a>
                                  <a className='comfort__btn-secondary' href="#">Contact agent <span>&rsaquo;</span></a>
                            </div>
                      </div>

                      {/* O'ng rasm qismi */}
                      <div className="comfort__img-box">
                            <img src={comfort} alt="Family comfort house" />
                      </div>
                </div>
           </div>
      </section>
  )
}

export default Comfort;