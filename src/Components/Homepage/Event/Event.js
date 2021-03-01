import React from 'react';
import familyMobile from 'Images/homepage/family-gathering-mobile.jpg';
import familyMobile2 from 'Images/homepage/family-gathering-mobile@2x.jpg';
import familyTablet from 'Images/homepage/family-gathering-tablet.jpg';
import familyTablet2 from 'Images/homepage/family-gathering-tablet@2x.jpg';
import familyDesktop from 'Images/homepage/family-gathering-desktop.jpg';
import familyDesktop2 from 'Images/homepage/family-gathering-desktop@2x.jpg';

import specialMobile from 'Images/homepage/special-events-mobile.jpg';
import specialMobile2 from 'Images/homepage/special-events-mobile@2x.jpg';
import specialTablet from 'Images/homepage/special-events-tablet.jpg';
import specialTablet2 from 'Images/homepage/special-events-tablet@2x.jpg';
import specialDesktop from 'Images/homepage/special-events-desktop.jpg';
import specialDesktop2 from 'Images/homepage/special-events-desktop@2x.jpg';

import socialMobile from 'Images/homepage/social-events-mobile.jpg';
import socialMobile2 from 'Images/homepage/social-events-mobile@2x.jpg';
import socialTablet from 'Images/homepage/social-events-tablet.jpg';
import socialTablet2 from 'Images/homepage/social-events-tablet@2x.jpg';
import socialDesktop from 'Images/homepage/social-events-desktop.jpg';
import socialDesktop2 from 'Images/homepage/social-events-desktop@2x.jpg';

import './Event.scss';

export default function Event() {
  return (
    <section className="events">
      <div className="m-events__imgBox">
        <picture className="img">
          <source
            srcSet={`${familyMobile} 1x, ${familyMobile2} 2x,`}
            media="(max-width: 48em)"
          />
          <source
            srcSet={`${familyTablet} 1x, ${familyTablet2} 2x,`}
            media="(min-width: 48em) and (max-width: 80em)"
          />
          <source
            srcSet={`${familyDesktop} 1x, ${familyDesktop2} 2x,`}
            media="(min-width: 80em)"
          />
          <img
            src={familyDesktop}
            alt="Family members grabbing food from the table"
            className="m-event__img -visible"
            id="familyGatheringImg"
          />
        </picture>

        <picture className="img">
          <source
            srcSet={`${specialMobile} 1x, ${specialMobile2} 2x,`}
            media="(max-width: 48em)"
          />
          <source
            srcSet={`${specialTablet} 1x, ${specialTablet2} 2x,`}
            media="(min-width: 48em) and (max-width: 80em)"
          />
          <source
            srcSet={`${specialDesktop} 1x, ${specialDesktop2} 2x,`}
            media="(min-width: 80em)"
          />
          <img
            src={specialDesktop}
            alt="Smiling family sitting by the table raising their drinks"
            className="m-event__img"
            id="specialEventsImg"
          />
        </picture>

        <picture className="img">
          <source
            srcSet={`${socialMobile} 1x, ${socialMobile2} 2x,`}
            media="(max-width: 48em)"
          />
          <source
            srcSet={`${socialTablet} 1x, ${socialTablet2} 2x,`}
            media="(min-width: 48em) and (max-width: 80em)"
          />
          <source
            srcSet={`${socialDesktop} 1x, ${socialDesktop2} 2x,`}
            media="(min-width: 80em)"
          />
          <img
            src={socialDesktop}
            alt="Wine glasses on the table surrounded by people"
            className="m-event__img"
            id="socialEventsImg"
          />
        </picture>
      </div>
      <div className="m-events__box">
        <div className="m-events__textBox">
          <div className="m-events__event">
            <h2 className="heading -h2 -black" id="eventHeading">
              Family Gathering
            </h2>
            <p className="paragraph -black" id="eventText">
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
          </div>
        </div>

        <a href="booking.html" className="a-btnCta -btnBlack">
          Book a table
        </a>

        <ul className="m-events__nav">
          <li className="m-events__item -active">Family Gathering</li>
          <li className="m-events__item">Special Events</li>
          <li className="m-events__item">Social Events</li>
        </ul>
      </div>
    </section>
  );
}
