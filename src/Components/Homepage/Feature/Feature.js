import React from 'react';
import './Feature.scss';
import enjoyableDesktop from 'Images/homepage/enjoyable-place-desktop.jpg';
import enjoyableDesktop2 from 'Images/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyableMobile from 'Images/homepage/enjoyable-place-mobile.jpg';
import enjoyableMobile2 from 'Images/homepage/enjoyable-place-mobile@2x.jpg';
import enjoyableTablet from 'Images/homepage/enjoyable-place-tablet.jpg';
import enjoyableTablet2 from 'Images/homepage/enjoyable-place-tablet@2x.jpg';
import localMobile from 'Images/homepage/locally-sourced-mobile.jpg';
import localMobile2 from 'Images/homepage/locally-sourced-mobile@2x.jpg';
import localTablet from 'Images/homepage/locally-sourced-tablet.jpg';
import localTablet2 from 'Images/homepage/locally-sourced-tablet@2x.jpg';
import localDesktop from 'Images/homepage/locally-sourced-desktop.jpg';
import localDesktop2 from 'Images/homepage/locally-sourced-desktop@2x.jpg';

export default function Feature() {
  return (
    <section className="features">
      <div className="m-feature">
        <div className="m-feature__imgBox">
          <picture className="img">
            <source
              srcSet={`${enjoyableMobile} 1x, ${enjoyableMobile2} 2x,`}
              media="(max-width: 48em)"
            />
            <source
              srcSet={`${enjoyableTablet} 1x, ${enjoyableTablet2} 2x,`}
              media="(min-width: 48em) and (max-width: 80em)"
            ></source>
            <source
              srcSet={`${enjoyableDesktop} 1x, ${enjoyableDesktop2} 2x,`}
              media="(min-width: 80em)"
            />
            <img src={enjoyableDesktop} alt="Sheep pasture on a meadow"></img>
          </picture>
        </div>
        <div className="m-feature__textBox">
          <h2 className="heading -h2 -black">
            Enjoyable place for all the family
          </h2>
          <p className="paragraph -black">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className="m-feature">
        <div className="m-feature__imgBox">
          <picture className="img">
            <source
              srcSet={`${localMobile} 1x, ${localMobile2} 2x,`}
              media="(max-width: 48em)"
            />
            <source
              srcSet={`${localTablet} 1x, ${localTablet2} 2x,`}
              media="(min-width: 48em) and (max-width: 80em)"
            />
            <source
              srcSet={`${localDesktop} 1x, ${localDesktop2} 2x,`}
              media="(min-width: 80em)"
            />
            <img src={localDesktop} alt="A hand pouring sauce on a dish" />
          </picture>
        </div>
        <div className="m-feature__textBox">
          <h2 className="heading -h2 -black">The most locally sourced food</h2>
          <p className="paragraph -black">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </section>
  );
}
