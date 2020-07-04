import React from 'react';

import { Fade } from 'react-awesome-reveal';

import LoggerPic from '../../Images/logger.png';
import WeatherPic from '../../Images/weather1.png';
import UrlPic from '../../Images/url-shortener.png';

import './ProjectsSection.css';

const Projects = () => {
  return (
    <section id='projects' className='Projects-Section'>
      <h3 id='Projects-Section__header'>&nbsp;My Projects&nbsp;</h3>

      <div className='row'>
        {/* START OF 1ST PROJECT */}
        <Fade delay={100} triggerOnce>
          <div className='col s12 m6 l4 offset-l2'>
            <div className='card sticky-action' style={cardBroderStyle}>
              <div className='card-image waves-effect waves-block waves-light'>
                <img
                  className='activator'
                  src={LoggerPic}
                  alt='Maintenance Logger Screenshot'
                />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  Maintenance Logger
                  <i className='material-icons right'>more_vert</i>
                </span>
                <p style={techusedStyleObj}>
                  Tech used: React, Redux, Node/Express & MongoDB
                </p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  Maintenance Logger
                  <i className='material-icons right'>close</i>
                </span>
                <p style={revealStyleObj}>
                  Record and update information regarding an organisation's
                  maintenance tasks.
                </p>
                <p style={revealStyleObj}>
                  This project allows the user to create records of maintenance
                  tasks and associate their initiation with an employee. The
                  details of a task can then be updated and its full history can
                  be viewed. It is also possible to create and delete employees
                  from the employee list.
                </p>
                <p style={revealStyleObj}>
                  Developed using: React, Redux, MaterializeCSS, Node/Express &
                  MongoDB
                </p>
              </div>
              <div className='card-action Projects-Section__links'>
                <p>
                  <a
                    href='https://flannel-parliament-04846.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fas fa-link'></i>&nbsp;View Live Site&nbsp;
                  </a>
                </p>
                <p>
                  <a
                    href='https://github.com/MartinKearney/Maintenance-Logger'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fab fa-github'></i>&nbsp;View Code on
                    GitHub&nbsp;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        {/* START OF 2ND PROJECT */}
        <Fade delay={500} triggerOnce>
          <div className='col s12 m6 l4'>
            <div className='card sticky-action' style={cardBroderStyle}>
              <div className='card-image waves-effect waves-block waves-light'>
                <img
                  className='activator'
                  src={WeatherPic}
                  alt='Weather App Screenshot'
                />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  Weather App<i className='material-icons right'>more_vert</i>
                </span>
                <p style={techusedStyleObj}>
                  Tech used: React, Node/Express & OpenWeatherMap API
                </p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  Weather App<i className='material-icons right'>close</i>
                </span>
                <p style={revealStyleObj}>
                  Get the current weather and a 5-day forecast for locations
                  across the globe.
                </p>
                <p style={revealStyleObj}>
                  This project utilises the Open Weather Map API for weather
                  data and a reverse-geocoding API to resolve location name
                  conflicts both between and within countries.
                </p>
                <p style={revealStyleObj}>
                  Developed using: React, Node/Express, OpenWeatherMap & HERE
                  Developer APIs
                </p>
              </div>
              <div className='card-action Projects-Section__links'>
                <p>
                  <a
                    href='https://upper-bunnyhug-64871.herokuapp.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fas fa-link'></i>&nbsp;View Live Site&nbsp;
                  </a>
                </p>
                <p>
                  <a
                    href='https://github.com/MartinKearney/Weather-App'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fab fa-github'></i>&nbsp;View Code on
                    GitHub&nbsp;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      {/* START OF 3RD PROJECT */}
      <div className='row'>
        <Fade delay={900} triggerOnce>
          <div className='col s12 m6 offset-m3 l4 offset-l4'>
            <div className='card sticky-action' style={cardBroderStyle}>
              <div className='card-image waves-effect waves-block waves-light'>
                <img
                  className='activator'
                  src={UrlPic}
                  alt='URL Shortener Screenshot'
                />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  URL Shortener<i className='material-icons right'>more_vert</i>
                </span>
                <p style={techusedStyleObj}>
                  Tech used: React, Node/Express & MongoDB
                </p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  URL Shortener<i className='material-icons right'>close</i>
                </span>
                <p style={revealStyleObj}>
                  Translate a long URL into an abbreviated alternative.
                </p>
                <p style={revealStyleObj}>
                  Once created, the shortened link is stored in a database along
                  with the original URL. The server listens for incoming
                  requests and will redirect the user of a shortened URL if a
                  record of it is found in the database.
                </p>
                <p style={revealStyleObj}>
                  Developed using: React, Node/Express & MongoDB
                </p>
              </div>
              <div className='card-action Projects-Section__links'>
                <p>
                  <a
                    href='https://intense-wildwood-80264.herokuapp.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fas fa-link'></i>&nbsp;View Live Site&nbsp;
                  </a>
                </p>
                <p>
                  <a
                    href='https://github.com/MartinKearney/URL-Shortener'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={linksStyleObj}
                  >
                    <i className='fab fa-github'></i>&nbsp;View Code on
                    GitHub&nbsp;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

const cardBroderStyle = {
  border: '8px solid #ccc',
  borderRadius: '12px',
};

const linksStyleObj = {
  marginRight: '0',
};

const revealStyleObj = {
  textAlign: 'justify',
  fontSize: '1.2rem',
};

const techusedStyleObj = {
  textAlign: 'justify',
  fontSize: '0.7rem',
};

export default Projects;
