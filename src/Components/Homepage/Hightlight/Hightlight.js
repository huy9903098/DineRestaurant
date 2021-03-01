import React from 'react';
import salmonMobile from 'Images/homepage/salmon-mobile.jpg';
import salmonMobile2 from 'Images/homepage/salmon-mobile@2x.jpg';
import salmonTablet from 'Images/homepage/salmon-desktop-tablet.jpg';
import salmonTablet2 from 'Images/homepage/salmon-desktop-tablet@2x.jpg';
import beefMobile from 'Images/homepage/beef-mobile.jpg';
import beefMobile2 from 'Images/homepage/beef-mobile@2x.jpg';
import beefDesktop from 'Images/homepage/beef-desktop-tablet.jpg';
import beefDesktop2 from 'Images/homepage/beef-desktop-tablet@2x.jpg';

import chocolateMobile from 'Images/homepage/chocolate-mobile.jpg';
import chocolateMobile2 from 'Images/homepage/chocolate-mobile@2x.jpg';
import chocolateDesktop from 'Images/homepage/chocolate-desktop-tablet.jpg';
import chocolateDesktop2 from 'Images/homepage/chocolate-desktop-tablet@2x.jpg';

import './Hightlight.scss';

export default function Hightlight() {
  return (
    <section class="highlights">
      <div class="m-highlights__textBox">
        <h2 class="heading -h2 -white">A few highlights from our menu</h2>
        <p class="paragraph -white">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <ul class="m-highlights__dishes">
        <li class="m-highlights__dish">
          <div class="m-highlights__imgBox">
            <picture class="img">
              <source
                srcSet={`${salmonMobile} 1x, ${salmonMobile2} 2x,`}
                media="(max-width: 48em)"
              />
              <source
                srcSet={`${salmonTablet} 1x, ${salmonTablet2} 2x,`}
                media="(min-width: 48em)"
              />
              <img src={salmonMobile} alt="Fried salmon on a plate" />
            </picture>
          </div>
          <div class="m-highlights__textBox">
            <h2 class="heading -h3 -white">Seared Salmon Fillet</h2>
            <p class="paragraph -small -white">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </li>

        <li class="m-highlights__dish">
          <div class="m-highlights__imgBox">
            <picture class="img">
              <source
                srcSet={`${beefMobile} 1x, ${beefMobile2} 2x,`}
                media="(max-width: 48em)"
              />
              <source
                srcSet={`${beefDesktop} 1x, ${beefDesktop2} 2x,`}
                media="(min-width: 48em)"
              />
              <img src={beefMobile} alt="Beef steak" />
            </picture>
          </div>
          <div class="m-highlights__textBox">
            <h2 class="heading -h3 -white">Rosemary Filet Mignon</h2>
            <p class="paragraph -small -white">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </li>

        <li className="m-highlights__dish">
          <div className="m-highlights__imgBox">
            <picture className="img">
              <source
                srcSet={`${chocolateMobile} 1x, ${chocolateMobile2} 2x,`}
                media="(max-width: 48em)"
              />
              <source
                srcSet={`${chocolateDesktop} 1x, ${chocolateDesktop2} 2x,`}
                media="(min-width: 48em)"
              />
              <img src={chocolateMobile} alt="Chocolate dessert" />
            </picture>
          </div>
          <div className="m-highlights__textBox">
            <h2 className="heading -h3 -white">
              Summer Fruit Chocolate Mousse
            </h2>
            <p className="paragraph -small -white">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
