import React from 'react';
import './Reservation.scss';
import { Link } from 'react-router-dom';
export default function Reservation() {
  return (
    <section className="reservation">
      <h2 className="heading -h2 -white">Ready to make a reservation?</h2>

      <Link to="/booking" className="a-btnCta -btnTransparent">
        Book a table
      </Link>
    </section>
  );
}
