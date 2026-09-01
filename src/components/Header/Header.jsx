import React, { useState, useEffect } from 'react';
import Logo from "./images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6"; // Yangiroq va mosroq icon
import { IoMenu, IoClose } from "react-icons/io5"; 
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll qilinganda headerga soya va fon effektini berish uchun
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Mobil menyu ochiq turganda sahifa scroll bo'lishini to'xtatish
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header__container">
          {/* Logo */}
          <a href="#" className="header__logo">
            <img src={Logo} alt="Site Logo" />
          </a>

          {/* Navigation List */}
          <ul className={`header__list ${isOpen ? "active" : ""}`}>
            <li><a className='header__link active-link' href="#" onClick={toggleMenu}>Home</a></li>
            <li><a className='header__link' href="#" onClick={toggleMenu}>Properties</a></li>
            <li><a className='header__link' href="#" onClick={toggleMenu}>About</a></li>
            <li><a className='header__link' href="#" onClick={toggleMenu}>Contact</a></li>
            
            <div className="header__actions-mobile">
              <li>
                <a className='header__link header__link-search' href="#" onClick={toggleMenu}>
                  <IoSearch /> <span>Search</span>
                </a>
              </li>
              <li>
                <a className='header__link header__link-cart' href="#" onClick={toggleMenu}>
                  <FaCartShopping /> <span>Cart</span>
                  <span className="cart-badge">2</span> {/* Misol uchun badge */}
                </a>
              </li>
            </div>

            <li>
              <a className='header__link-name' href="#" onClick={toggleMenu}>
                Find a Property
              </a>
            </li>
          </ul>

          <div className="header__icons-desktop">
            <button className="header__icon-btn" aria-label="Search">
              <IoSearch />
            </button>
            <button className="header__icon-btn cart-btn" aria-label="Cart">
              <FaCartShopping />
              <span className="cart-badge">2</span>
            </button>
          </div>

          <div className="header__toggle" onClick={toggleMenu}>
            {isOpen ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;