import React from 'react';
import rasim from "./images/rasim.png";
import "./Props.css";

const Props = () => {
  return (
    <section className='props-section'>
      <div className="container">
        <div className="props__banner" style={{ backgroundImage: `url(${rasim})` }}>
          <div className="props__content">
            <div className="props__icon-box">
              <img src={rasim} alt="Family icon" />
            </div>

            <h2 className='props__title'>Families are our priority</h2>

            <p className='props__text'>
              Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.
            </p>

            <a href="#" className='props__btn'>Get started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Props;