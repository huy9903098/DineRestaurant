import React from 'react';
import logo from 'Images/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="booking">
      <div className="booking__logoBox">
        <Link to="/">
          <img src={logo} className="booking__logo" alt="Dine logo" />
        </Link>
      </div>
      <h1 className="-h1 -white">Reservations</h1>
      <p className="paragraph -white">
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </p>
      <a href="#" className="a-btnCta -btnTransparent">
        Reserve place
      </a>
    </header>
  );
}
