import React from 'react';
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      
      <div className='footer__link'>
        <a href="mailto:eva.boulanger90@gmail.com">Send me an email.</a> 
        <a href="https://www.linkedin.com/in/eva-boulanger-ba734227a" target="_blank" rel="noopener noreferrer">Follow me on LinkedIn</a>
        <a href="https://github.com/Bourrelet" target="_blank" rel="noopener noreferrer">Check out my GitHub.</a>
      </div>

        
      <p className='footer__copyright'>
        &copy; 2024 Eva Boulanger Portfolio
      </p>
    </footer>
  );
}

export default Footer;
