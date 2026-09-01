import React from 'react';
import card1 from "./images/card.png";
import { FaRegCreditCard, FaRegFileAlt } from "react-icons/fa";
import "./Card.css";

const Card = () => {
  return (
    <section className='card'>
           <div className="container">
                <div className="card__container">
                      {/* Chap rasm qismi */}
                      <div className="card__img-box">
                            <img src={card1} alt="Fast forward process" />
                      </div>

                      {/* O'ng matn va xususiyatlar qismi */}
                      <div className="card__content">
                            <span className='card__badge'>Quick and easy</span>
                            <h2 className='card__title'>Fast forward process</h2>
                            <p className='card__text'>
                                Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.
                            </p>

                            {/* Ikki ta kichik xususiyat bloki */}
                            <div className='card__features'>
                                  <div className='card__feature-item'>
                                        <div className='card__feature-icon'>
                                              <FaRegCreditCard />
                                        </div>
                                        <div className='card__feature-info'>
                                              <h3 className='card__feature-title'>Affordable prices</h3>
                                              <p className='card__feature-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                        </div>
                                  </div>

                                  <div className='card__feature-item'>
                                        <div className='card__feature-icon'>
                                              <FaRegFileAlt />
                                        </div>
                                        <div className='card__feature-info'>
                                              <h3 className='card__feature-title'>Less paper work</h3>
                                              <p className='card__feature-desc'>Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.</p>
                                        </div>
                                  </div>
                            </div>

                            {/* Tugmalar */}
                            <div className='card__btns'>
                                  <a className='card__btn-primary' href="#">Explore properties</a>
                                  <a className='card__btn-secondary' href="#">Contact agent <span>&rsaquo;</span></a>
                            </div>
                      </div>
                </div>
           </div>
    </section>
  )
}

export default Card;