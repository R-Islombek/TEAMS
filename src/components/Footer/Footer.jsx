import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__container">
          
          <div className="footer__brand">
            <div className="footer__logo-wrapper">
              <span className="footer__logo-icon"></span>
              <span className="footer__logo-text">Realco</span>
            </div>
          </div>

          {/* Menyu ustuni: Pages */}
          <div className="footer__col">
            <h4>Pages</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#agents">Agents</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#properties">Properties</a></li>
            </ul>
          </div>

          {/* Menyu ustuni: CMS Pages */}
          <div className="footer__col">
            <h4>CMS Pages</h4>
            <ul>
              <li><a href="#property">Property</a></li>
              <li><a href="#property-single">Property Single</a></li>
              <li><a href="#blog-categories">Blog Categories</a></li>
              <li><a href="#blog-single">Blog Single</a></li>
              <li><a href="#agent-single">Agent Single</a></li>
            </ul>
          </div>

          {/* Menyu ustuni: Utility Pages */}
          <div className="footer__col">
            <h4>Utility Pages</h4>
            <ul>
              <li><a href="#style-guide">Style Guide</a></li>
              <li><a href="#changelog">Changelog</a></li>
              <li><a href="#licenses">Licenses</a></li>
              <li><a href="#404">404</a></li>
              <li><a href="#password">Password</a></li>
              <li><a href="#search">Search</a></li>
            </ul>
          </div>

          {/* Obuna bo'lish (Subscribe) qismi */}
          <div className="footer__subscribe">
            <h4>Subscribe</h4>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
            
            <span className="footer__policy">
              By subscribing you agree to with our <a href="#privacy">Privacy Policy</a>
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;