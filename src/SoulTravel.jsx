import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/slices/authSlices';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import headerImage from './assets/talk.jpeg';
import './styles.css';

const SoulTravel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user); // Get the user from Redux state

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown
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
          <li><a href="/home">Home</a></li>
          <li><a href="/user">Progress</a></li>
          <li><a href="/admin">Start Now</a></li>
        </ul>
        <div className="nav__btns">
          {isLoggedIn ? (
            <>
              <div className="profile__container">
                <FaUserCircle className="profile__icon" onClick={handleProfileClick} />
                {isProfileOpen && (
                  <div className="profile__dropdown">
                    <p>Username: {user.username}</p>
                    {/* <p>Email: {user.email}</p> */}
                    <button className="btn sign__out" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/form" className="btn sign__up">Sign Up</Link>
              <Link to="/login" className="btn sign__in">Sign In</Link>
            </>
          )}
        </div>
      </nav>
      <header className="header__container">
        <div className="header__image">
          <img src={headerImage} alt="IMG" />
        </div>
        <div className="header__content">
          <h1>Track your voice<br />refine your speech unlock your full potential</h1>
          <p>
            Embark on Your Journey Today and Discover Uncharted Wonders Around the
            World - Your Adventure Awaits with Exciting Experiences, Unforgettable
            Memories, and Endless Opportunities
          </p>
          <div className="bar">
            ADARSH M S
          </div>
        </div>
      </header>
    </div>
  );
};

export default SoulTravel;
