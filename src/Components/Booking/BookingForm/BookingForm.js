import React from 'react';
import './BookingForm.scss';
import checkIcon from 'Images/icons/icon-check.svg';
import arrowIcon from 'Images/icons/icon-arrow.svg';
export default function BookingForm() {
  return (
    <section className="bookingForm">
      <form id="form" className="form">
        <div className="form__group">
          <input type="text" name="name" id="name" placeholder="Name" />
          <small>Error message</small>
        </div>
        <div className="form__group">
          <input type="text" name="email" id="email" placeholder="Email" />
          <small>Error message</small>
        </div>
        <div className="form__group form__group-date">
          <label for="date">Pick a date</label>
          <div className="form__dateBox">
            <input
              type="number"
              name="month"
              id="month"
              min="1"
              max="12"
              placeholder="MM"
            />
            <input
              type="number"
              name="day"
              id="day"
              min="1"
              max="31"
              placeholder="DD"
            />
            <input
              type="number"
              name="year"
              id="year"
              min="2020"
              max="2030"
              placeholder="YYYY"
            />
          </div>
          <small>Error message</small>
        </div>
        <div className="form__group form__group-time">
          <label for="time">Pick a time</label>
          <div className="form__timeBox">
            <input
              type="number"
              name="hour"
              id="hour"
              min="00"
              max="12"
              placeholder="HH"
            />
            <input
              type="number"
              name="minute"
              id="minute"
              min="00"
              max="59"
              placeholder="MM"
            />
            <div className="m-daytime__box">
              <span id="selectedDaytime">AM</span>
              <span id="arrow" className="a-arrow">
                <img src={arrowIcon} alt="Select arrow" />
              </span>
              <div className="m-daytime__options -hidden">
                <div className="m-daytime__options-AM">
                  <span id="tickAM" className="a-tick">
                    <img src={checkIcon} alt="Check icon" />
                  </span>
                  AM
                </div>
                <div className="m-daytime__options-PM">
                  <span id="tickPM" className="a-tick -hidden">
                    <img src={checkIcon} alt="Check icon" />
                  </span>
                  PM
                </div>
              </div>
            </div>
          </div>
          <small>Error message</small>
        </div>
        <div className="form__group">
          <div className="form__people">
            <span className="plusminus" id="minus">
              -
            </span>
            <span className="form__people-middle">
              <span id="peopleNumber">4</span>{' '}
              <span id="personWord">people</span>
            </span>
            <span className="plusminus" id="plus">
              +
            </span>
          </div>
        </div>
        <div className="form__group">
          <button className="a-btnSubmit" id="btnSubmit">
            Make reservation
          </button>
        </div>
      </form>
    </section>
  );
}
