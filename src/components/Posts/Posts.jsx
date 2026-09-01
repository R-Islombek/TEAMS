import React from 'react';
import rasim1 from "./images/rasim1.png";
import rasim2 from "./images/rasim2.png";
import rasim3 from "./images/rasim3.png";

import "./Posts.css";

const Posts = () => {
  const postsData = [
    {
      id: 1,
      image: rasim1,
      tag: "Trends",
      date: "May 10, 2022",
      title: "The 9 best homes in New York",
      description: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."
    },
    {
      id: 2,
      image: rasim2,
      tag: "DIY",
      date: "May 10, 2022",
      title: "How to easily buy a house with Realco",
      description: "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet."
    },
    {
      id: 3,
      image: rasim3,
      tag: "DIY",
      date: "May 10, 2022",
      title: "Renting houses - complete guide",
      description: "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis."
    }
  ];

  return (
    <main className='sections'>
      <div className="container">
        <div className="sections__container">

          <div className="sections__header">
            <div className="sections__header-text">
              <span className="sections__badge">Blog</span>
              <h2>Latest posts</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.<br />
                Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.
              </p>
            </div>
            <button className="sections__view-all-btn">View all</button>
          </div>
          <div className="sections__grid">
            {postsData.map((post) => (
              <div className="sections__card" key={post.id}>
                <div className="sections__card-img">
                  <img src={post.image} alt={post.title} />
                </div>
                
                <div className="sections__card-content">
                  <div className="sections__card-meta">
                    <span className={`sections__tag sections__tag--${post.tag.toLowerCase()}`}>{post.tag}</span>
                    <span className="sections__date">{post.date}</span>
                  </div>
                  
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  
                  <a href="#read-more" className="sections__read-more">
                    Read more <span>&rsaquo;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Posts;