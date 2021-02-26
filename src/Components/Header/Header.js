import React from 'react';
import './Header.scss';
import logo from 'Images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="logo-box" src={logo}></img>
      <h1 className="heading -h1 -white">Exquisite dining since 1989</h1>
      <p className="paragraph -white">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
    </header>
  );
}
