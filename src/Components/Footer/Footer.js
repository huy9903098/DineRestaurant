import React from 'react';
import logo from 'Images/logo.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer -white">
      <img src={logo} alt="Dine logo" />
      <ul className="m-footer__address">
        <li>Marthwaite, Sedbergh</li>
        <li>Cumbria</li>
        <li>+00 44 123 4567</li>
      </ul>
      <ul className="m-footer__openTimes">
        <li>Open Times</li>
        <li>Mon - Fri: 09:00 AM - 10:00 PM</li>
        <li>Sat - Sun: 09:00 AM - 11:30 PM</li>
      </ul>
    </footer>
  );
}
