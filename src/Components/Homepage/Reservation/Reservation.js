import React from 'react';
import './Reservation.scss';

export default function Reservation() {
  return (
    <section className="reservation">
      <h2 className="heading -h2 -white">Ready to make a reservation?</h2>
      <a href="booking.html" className="a-btnCta -btnTransparent">
        Book a table
      </a>
    </section>
  );
}
