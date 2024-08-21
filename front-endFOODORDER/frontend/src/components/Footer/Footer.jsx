import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim explicabo fugiat a! Modi, voluptas sapiente
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook} alt="Facebook" />
            <img src={assets.instagram} alt="Instagram" />
            <img src={assets.linkedin} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+905346527379">+90 534 652 7379</a></li>
            <li><a href="mailto:contact@express.com">contact@express.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Express.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
