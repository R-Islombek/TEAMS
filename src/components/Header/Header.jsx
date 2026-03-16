import React from 'react'

const Header = () => {
  return (
    <div>
           <header className='header'>
            <div className="container">
              <div className="header__container">
                <h1 className='logo'>LOGO</h1>
                <ul className='header__list'>
                  <li className='header__list'><a href="">Home</a></li>
                  <li className='header__list'><a href="">About</a></li>
                  <li className='header__list'><a href="">Contact</a></li>
                </ul>
              </div>
            </div>
           </header>
    </div>
  )
}

export default Header
