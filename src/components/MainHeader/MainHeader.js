import React, { useState, useEffect } from 'react';

import { Zoom, Fade } from 'react-awesome-reveal';

import './MainHeader.css';

const MainHeader = (props) => {
  const [showText, setShowText] = useState(false);
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      setShowPointer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const showTextContent = () => {
    return showText ? 'show-text' : '';
  };

  const showDownPointer = () => {
    return showPointer ? 'show' : '';
  };

  return (
    <section id='main' className='Main-Container'>
      <Zoom delay={500} duration={1200} triggerOnce direction={'bottom'}>
        <div className={`Text-Container ${showTextContent()}`}>
          {props.children}
        </div>
      </Zoom>

      <div className={`Main-Container__pointer ${showDownPointer()}`}>
        <Fade delay={2500} triggerOnce>
          <p style={{ marginBottom: '0' }}>Find out more about what I do</p>
          <p style={{ textAlign: 'center' }}>
            <i className='material-icons arrow'>arrow_circle_down</i>
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default MainHeader;
