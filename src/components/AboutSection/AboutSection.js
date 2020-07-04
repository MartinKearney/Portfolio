import React from 'react';

import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id='about' className='About-Container'>
      <h3>&nbsp;About Me&nbsp;</h3>
      <div className='about-text'>
        <>
          I love to build websites and I have a passion for programming, problem
          solving and learning.
        </>
        <p style={{ marginTop: '4rem', marginBottom: '1rem' }}>
          My key skills are in:
        </p>
        <p style={{ marginTop: '0' }}>
          HTML5, CSS3, JavaScript, React, Redux, Node/Express, Java & MongoDB.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
