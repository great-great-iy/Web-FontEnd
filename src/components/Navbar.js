import React, { useState, useEffect } from 'react';
// import { button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(0);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onActive = (value) => {
    setClick(false);
    setActive(value);
  }

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <i className="fas fa-graduation-cap"/> PTIT */}
            <img src='../images/Logo_PTIT_University.png' alt='logo'/>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' 
                className={`nav-links ${(!click && active === 1)? 'nav-links-active' : ''}`}
                onClick={() => onActive(1)}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className={`nav-links ${(!click && active === 2)? 'nav-links-active' : ''}`}
                onClick={() => onActive(2)}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/course'
                className={`nav-links ${(!click && active === 3)? 'nav-links-active' : ''}`}
                onClick={() => onActive(3)}
              >
                Course
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blog'
                className={`nav-links ${(!click && active === 4)? 'nav-links-active' : ''}`}
                onClick={() => onActive(4)}
              >
                Blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className={`nav-links ${(!click && active === 5)? 'nav-links-active' : ''}`}
                onClick={() => onActive(5)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
