import React, { Fragment } from 'react';
import { Element } from 'react-scroll';

import NavBar from './NavBar/NavBar';
import MainHeader from './MainHeader/MainHeader';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import AboutSection from './AboutSection/AboutSection';
import ContactSection from './ContactSection/ContactSection';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <section id='Home-Section'>
        <Element name='home'>
          <MainHeader>
            <p>Hi, I'm Mart</p>
            <p>A Web Developer</p>
          </MainHeader>
        </Element>
      </section>
      <div className='contanier'>
        <section id='Projects-Section'>
          <Element name='projects'>
            <ProjectsSection />
          </Element>
        </section>
        <section id='About-Section'>
          <Element name='about'>
            <AboutSection />
          </Element>
        </section>
        <section id='Contact-Section'>
          <Element name='contact'>
            <ContactSection />
          </Element>
        </section>
      </div>
    </Fragment>
  );
};

export default App;
