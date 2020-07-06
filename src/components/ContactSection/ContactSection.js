import React, { useState } from 'react';
import { HeadShake } from 'react-awesome-reveal';

import axios from 'axios';

import './ContactSection.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const ContactSection = () => {
  // Form field variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSending, setShowSending] = useState(false);
  const [sendAttemptMade, setSendAttemptMade] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Ensure send attempted variable is set to true
    if (!sendAttemptMade) {
      setSendAttemptMade(true);
    }
    sendFormData();
  };

  const checkNameForError = () => {
    return name.trim().length > 50;
  };

  const checkEmailForError = () => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email.trim());
  };

  const checkForMinReqs = () => {
    return (name || email) && message;
  };

  const sendFormData = () => {
    // Check if form meets min requirements
    // i.e. does it have at least have a name or email, and a message
    // with no error from the name field and, lastly, the email field
    // should either be blank or completed and error free
    if (
      checkForMinReqs() &&
      !checkNameForError() &&
      ((email && checkEmailForError()) || !email)
    ) {
      setShowSending(true);

      const formData = { name, email, message };

      axios({
        method: 'post',
        url: 'https://agile-cove-00243.herokuapp.com/send',
        data: formData,
      }).then((response) => {
        if (response.data.status === 'success') {
          M.toast({
            html: 'Thanks - your message has been sent!',
            classes: 'toast-style',
          });
          // alert('Thank you - your message has been sent.');
        } else if (response.data.status === 'fail') {
          M.toast({
            html: 'Sorry, something went wrong - please try again later',
            classes: 'toast-style',
          });
          // alert('Message failed to send (:');
        }
      });
      setShowSending(false);
      resetForm();
    } else {
      console.log('invalid form');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSendAttemptMade(false);
  };

  return (
    <section className='container Contact-Container'>
      <HeadShake delay={800} duration={1200} triggerOnce>
        <h3 className='Contact-header'>&nbsp;Contact Me&nbsp;</h3>
      </HeadShake>
      <div className='row'>
        <form
          className='col s12 Form-Container'
          style={{ borderRadius: '12px' }}
        >
          <div className={`sendingMsgText ${showSending ? '' : 'hidden'}`}>
            Sending message...
          </div>
          <div className='row' style={{ marginBottom: '0' }}>
            <div className='input-field col s12 m10 offset-m1 l6 offset-l3'>
              <i className='material-icons prefix'>emoji_people</i>
              {/* <i className='material-icons prefix'>person</i> */}
              <input
                id='name'
                type='text'
                onChange={handleNameChange}
                value={name}
              />
              <label htmlFor='name'>Your Name...</label>
              <small
                className={`name-error ${checkNameForError() ? '' : 'hidden'}`}
              >
                Name is too long!
              </small>
            </div>
          </div>

          <div className='row' style={{ marginBottom: '0' }}>
            <div className='input-field col s12 m10 offset-m1 l6 offset-l3'>
              <i className='material-icons prefix'>email</i>
              <input
                id='email'
                type='email'
                onChange={handleEmailChange}
                value={email}
              />
              <label htmlFor='email'>Your Email Address...</label>
              <small
                className={`email-error ${
                  !checkEmailForError() && email ? '' : 'hidden'
                }`}
              >
                Please enter a valid email address
              </small>
            </div>
          </div>

          <div className='row' style={{ marginBottom: '0' }}>
            <div className='input-field col s12 m10 offset-m1 l6 offset-l3'>
              <i className='material-icons prefix'>mode_edit</i>
              <textarea
                id='icon_prefix2'
                className='materialize-textarea'
                onChange={handleMessageChange}
                value={message}
              />
              <label htmlFor='icon_prefix2'>Message...</label>
            </div>
          </div>

          <div className='feedback'>
            <small
              className={`main-error ${
                !checkForMinReqs() && sendAttemptMade ? '' : 'hidden'
              }`}
            >
              Please enter your name and/or your email <br />
              and include a message
            </small>
          </div>

          <div className='row'>
            <div
              className='input-field col s12'
              style={{ textAlign: 'center' }}
            >
              <button
                className='btn waves-effect waves-light grey darken-1'
                style={{ width: '20%' }}
                onClick={handleClick}
              >
                Send Message
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
