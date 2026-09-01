import React from 'react';
import rasim1 from "./images/rasim1.png";
import rasim2 from "./images/rasim2.png";
import rasim3 from "./images/rasim3.png";
import { FaStar } from "react-icons/fa";
import "./Section.css";

const Section = () => {
  // Mijozlarning fikrlari massivi
  const reviews = [
    {
      id: 1,
      text: `"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."`,
      name: "Michael Webb",
      role: "Customer",
      img: rasim1
    },
    {
      id: 2,
      text: `"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor."`,
      name: "Amber Keene",
      role: "Customer",
      img: rasim2
    },
    {
      id: 3,
      text: `"Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl."`,
      name: "Sarah Tarleton",
      role: "Customer",
      img: rasim3
    }
  ];

  return (
      <section className='section'>
            <div className="container">
                  <div className="section__container">
                       {/* Sarlavha qismi */}
                       <div className="section__header">
                            <h2 className='section__title'>What customers say</h2>
                            <p className='section__text'>
                                Faucibus orci luctus et ultrices posuere cubilia curae.
                            </p>
                       </div>
                       <div className="section__grid">
                            {reviews.map((item) => (
                                 <div className='section__card' key={item.id}>

                                       <div className='section__stars'>
                                             {[...Array(5)].map((_, i) => (
                                                  <FaStar key={i} />
                                             ))}
                                       </div>

                                       <p className='section__card-text'>{item.text}</p>

                                       <div className='section__profile'>
                                             <img src={item.img} alt={item.name} />
                                             <div className='section__profile-info'>
                                                   <h4 className='section__profile-name'>{item.name}</h4>
                                                   <span className='section__profile-role'>{item.role}</span>
                                             </div>
                                       </div>
                                 </div>
                            ))}
                       </div>
                  </div>
            </div>
      </section>
  )
}

export default Section;