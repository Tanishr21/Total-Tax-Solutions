import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

const Contacttest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axg1ax7', 'template_2kvo21o', form.current, '3Eds-GzWinE3FhQEr')
      .then((result) => {
          console.log(result.text);
          console.log("senttt")
      }, (error) => {
          console.log(error.text);
      });
  }; 
   const handleSubmit=() => {
    window.alert("Thank You!")

   }
    return(
        <form className="main" ref={form} onSubmit={sendEmail}>
          <h1>Get in touch.</h1>
          <div className="text-container">
            We're here to address your inquires and provide assistance!<br />
            <span>Thank you for your interest in Total Tax Solutions.</span>
          </div>
          <div className="form-container">
            <input placeholder="Enter your name" name="user_name"></input>
            <input placeholder="email@example.com" name='user_email'></input>
            <input placeholder="phone" name='user_phone' type="number"></input>
            <textarea placeholder="message" name="user_message">Message</textarea>
            <button type='submit' value="Send" name='message' onClick={handleSubmit}>Send Message</button>
            <div id='confirm'></div>
          </div>
        </form>
    )
}
export default Contacttest;