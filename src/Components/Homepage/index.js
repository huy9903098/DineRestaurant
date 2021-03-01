import React from 'react';
import Header from './Header/Header';
import Feature from './Feature/Feature';
import Hightlight from './Hightlight/Hightlight';
import Event from './Event/Event';
import Reservation from './Reservation/Reservation';
import Footer from './Footer/Footer';

export default function Homepage() {
  return (
    <>
      <Header />
      <Feature />
      <Hightlight />
      <Event />
      <Reservation />
      <Footer />
    </>
  );
}
