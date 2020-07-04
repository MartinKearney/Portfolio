import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

import './NavBar.css';

const NavBar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 0
      ? setShowNavBackground(true)
      : setShowNavBackground(false);
  };

  const showNavBarBackground = () => {
    return showNavBackground ? '' : 'no-background';
  };

  const scrollToElement = (elt) => {
    scroller.scrollTo(elt, {
      duration: 1000,
      delay: 200,
      smooth: true,
    });
  };

  const handleAnchorClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`NavBar-Container ${showNavBarBackground()}`}>
      <ul className='NavBar-List'>
        <Scrollspy
          items={[
            'Home-Section',
            'Projects-Section',
            'About-Section',
            'Contact-Section',
          ]}
          currentClassName='underline'
          offset={-500}
        >
          <li
            className='NavBar-List__item'
            id='Home'
            onClick={(e) => {
              scrollToElement('home');
            }}
          >
            <a href='#Home-Section' onClick={(e) => handleAnchorClick(e)}>
              Home
            </a>
          </li>
          <li
            className='NavBar-List__item'
            id='Projects'
            onClick={(e) => {
              scrollToElement('projects');
            }}
          >
            <a href='#Projects-Section' onClick={(e) => handleAnchorClick(e)}>
              Projects
            </a>
          </li>
          <li
            className='NavBar-List__item'
            id='About'
            onClick={(e) => {
              scrollToElement('about');
            }}
          >
            <a href='#About-Section' onClick={(e) => handleAnchorClick(e)}>
              About
            </a>
          </li>
          <li
            className='NavBar-List__item'
            id='Contact'
            onClick={(e) => {
              scrollToElement('contact');
            }}
          >
            <a href='#Contacts-Section' onClick={(e) => handleAnchorClick(e)}>
              Contact
            </a>
          </li>
        </Scrollspy>
      </ul>
    </div>
  );
};

export default NavBar;
