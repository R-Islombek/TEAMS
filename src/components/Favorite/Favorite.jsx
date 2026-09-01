import React from 'react';
import rasim1 from "./images/rasim1.png";
import rasim2 from "./images/rasim2.png";
import rasim3 from "./images/rasim3.png";
import rasim4 from "./images/rasim4.png";
import rasim5 from "./images/rasim5.png";
import rasim6 from "./images/rasim6.png";
import { IoLocationOutline } from "react-icons/io5";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import "./Favorite.css";

const Favorite = () => {
  const houses = [
    {
      id: 1,
      img: rasim1,
      title: "Cozy studio in Los Angeles",
      price: "$ 1,200.00 USD",
      location: "2263 Southlea, Los Angeles",
      beds: 2,
      baths: 2,
      area: "840 sqft"
    },
    {
      id: 2,
      img: rasim2,
      title: "Tiny home in San Diego",
      price: "$ 740,000.00 USD",
      location: "2569 El Segundo, San Diego",
      beds: 1,
      baths: 2,
      area: "400 sqft"
    },
    {
      id: 3,
      img: rasim3,
      title: "Crown house in New York",
      price: "$ 980,000.00 USD",
      location: "4489 Smity Fielda, New York",
      beds: 2,
      baths: 4,
      area: "3200 sqft"
    },
    {
      id: 4,
      img: rasim4,
      title: "Family house in Los Angeles",
      price: "$ 4,200.00 USD",
      location: "2263 Southlea, Los Angeles",
      beds: 2,
      baths: 3,
      area: "1400 sqft"
    },
    {
      id: 5,
      img: rasim5,
      title: "Studio in Las Vegas",
      price: "$ 820,000.00 USD",
      location: "2569 Halls Corner, Las Vegas",
      beds: 2,
      baths: 3,
      area: "2400 sqft"
    },
    {
      id: 6,
      img: rasim6,
      title: "San Diego story",
      price: "$ 3,700.00 USD",
      location: "2569 El Segundo, San Diego",
      beds: 1,
      baths: 2,
      area: "650 sqft"
    }
  ];

  return (
    <>
         <section className='favorite'>
              <div className="container">
                   <div className="favorite__container">
                        {/* Yuqori qism (Sarlavha va beyj) */}
                        <div className="favorite__header-box">
                              <span className='favorite__badge'>Properties</span>
                              <h2 className='favorite__title'>Houses in your favorite area</h2>
                        </div>

                        <div className='favorite__grid'>
                              {houses.map((item) => (
                                   <div className='favorite__card' key={item.id}>
                                         <div className='favorite__img-box'>
                                              <img src={item.img} alt={item.title} />
                                         </div>
                                         <div className='favorite__content'>
                                              <h3 className='favorite__card-title'>{item.title}</h3>
                                              <p className='favorite__price'>{item.price}</p>
                                              
                                              <div className='favorite__location'>
                                                   <IoLocationOutline />
                                                   <span>{item.location}</span>
                                              </div>

                                              <div className='favorite__divider'></div>

                                              <div className='favorite__details'>
                                                   <div className='favorite__detail-item'>
                                                        <BiBed />
                                                        <span>{item.beds}</span>
                                                   </div>
                                                   <div className='favorite__detail-item'>
                                                        <BiBath />
                                                        <span>{item.baths}</span>
                                                   </div>
                                                   <div className='favorite__detail-item'>
                                                        <BiArea />
                                                        <span>{item.area}</span>
                                                   </div>
                                              </div>
                                         </div>
                                   </div>
                              ))}
                        </div>

                        <div className='favorite__footer-btns'>
                              <a className='favorite__btn-primary' href="#">Explore properties</a>
                              <a className='favorite__btn-secondary' href="#">Contact agent <span>&rsaquo;</span></a>
                        </div>
                   </div>
              </div>
         </section>
    </>
  )
}

export default Favorite;