import React from 'react';
import "./Customer.css";


const Customer = () => {
  const locations = [
    { id: 1, name: "San Francisco, CA" },
    { id: 2, name: "Los Angeles, CA" },
    { id: 3, name: "San Diego, CA" },
    { id: 4, name: "New York, NY" },
    { id: 5, name: "Las Vegas, NV" },
    { id: 6, name: "Miami, FL" },
  ];

  return (
      <section className='customer'>
             <div className="container">
                   <div className="customer__container">
                        <div className="customer__header">
                              <h2 className='customer__title'>Locations</h2>
                              <p className='customer__text'>
                                   Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet.
                              </p>
                        </div>
                        <div className="customer__grid">
                              {locations.map((item) => (
                                   <div className='customer__card' key={item.id}>
                                         <h3 className='customer__card-title'>{item.name}</h3>
                                         <a className='customer__link' href="#">
                                              View Properties <span>&rsaquo;</span>
                                         </a>
                                   </div>
                              ))}
                        </div>
                        <div className="customer__footer-btns">
                              <a className='customer__btn-primary' href="#">Explore properties</a>
                              <a className='customer__btn-secondary' href="#">Contact agent <span>&rsaquo;</span></a>
                        </div>
                   </div>
             </div>
      </section>
  )
}

export default Customer;