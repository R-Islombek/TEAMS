import React, { useState } from 'react';
import Logo from "./images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5"; // Mobil menyu ikonkalari
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="header">
             <div className="container">
                  <div className="header__container">
                         {/* Logo */}
                         <a href="#" className="header__logo">
                           <img src={Logo} alt="Site Logo" />
                         </a>

                         <ul className={`header__list ${isOpen ? "active" : ""}`}>
                              <li><a className='header__link' href="#" onClick={toggleMenu}>Home</a></li>
                              <li><a className='header__link' href="#" onClick={toggleMenu}>Properties</a></li>
                              <li><a className='header__link' href="#" onClick={toggleMenu}>About</a></li>
                              <li><a className='header__link' href="#" onClick={toggleMenu}>Contact</a></li>
                              <li><a className='header__link header__link-search' href="#" onClick={toggleMenu}><IoSearch /> <span>Search</span></a></li>
                              <li><a className='header__link header__link-cart' href="#" onClick={toggleMenu}><FaCartArrowDown /> <span>Cart</span></a></li>
                              <li><a className='header__link-name' href="#" onClick={toggleMenu}>Find a property</a></li>
                         </ul>

                         <div className="header__toggle" onClick={toggleMenu}>
                              {isOpen ? <IoClose /> : <IoMenu />}
                         </div>
                  </div>
             </div>
      </header>
  )
}

export default Header;