import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import headerImage from './assets/talk.jpeg';
import './styles.css'; // Ensure this path is correct

const SoulTravel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    ScrollReveal().reveal('.header__image img', {
      ...scrollRevealOption,
      origin: 'right',
    });

    ScrollReveal().reveal('.header__content h1', {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal('.header__content p', {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal('.header__content form', {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal('.header__content .bar', {
      ...scrollRevealOption,
      delay: 2000,
    });

    ScrollReveal().reveal('.header__image__card', {
      duration: 1000,
      interval: 500,
      delay: 2500,
    });
  }, []);

  return (
    <div className='sbody'>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">SNAPTALK <span>TRACKER</span></a>
          </div>
          <div className="nav__menu__btn" onClick={handleMenuClick}>
            <span><i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i></span>
          </div>
        </div>
        <ul className={`nav__links ${isOpen ? 'open' : ''}`} onClick={handleNavLinkClick}>
          <li><a href="#">Home</a></li>
          <li><a href="/user">User</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav__btns">
          <Link to="/form" className="btn sign__up">Sign Up</Link>
          <Link to="/login" className="btn sign__in">Sign In</Link>
        </div>
      </nav>
      <header className="header__container">
        <div className="header__image">
          <img src={headerImage} alt="IMG" />
        </div>
        <div className="header__content">
          <h1>Track your voice<br />refine your speech<span> unlock</span> your full potential</h1>
          <p>
            Embark on Your Journey Today and Discover Uncharted Wonders Around the
            World - Your Adventure Awaits with Exciting Experiences, Unforgettable
            Memories, and Endless Opportunities
          </p>
          {/* <form action="/">
            <div className="input__row">
              <div className="input__group">
                <h5>Destination</h5>
                <div>
                  <span><i className="ri-map-pin-line"></i></span>
                  <input type="text" placeholder="Paris, France" />
                </div>
              </div> 
              <div className="input__group">
                <h5>Date</h5>
                <div>
                  <span><i className="ri-calendar-2-line"></i></span>
                  <input type="text" placeholder="17 July 2024" />
                </div>
              </div>
            </div>
            <button type="submit">Search</button>
          </form> */}
          <div className="bar">
            Copyright © 2024 Web Design Mastery. All rights reserved.
          </div>
        </div>
      </header>
    </div>
  );
};

export default SoulTravel;
