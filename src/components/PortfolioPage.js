import React from 'react';
import image001 from '../images/Jazz-Erwinize001.png';
import image002 from '../images/Jazz-Erwinize002.png';
import image003 from '../images/Jazz-Erwinize003.png';
import image004 from '../images/Jazz-Erwinize004.png';
import image005 from '../images/Jazz-Erwinize005.png';
import image006 from '../images/Jazz-Erwinize006.png';
import image007 from '../images/Jazz-Erwinize007.png';
import image008 from '../images/Jazz-Erwinize008.png';
import image009 from '../images/Jazz-Erwinize009.png';

const PortfolioPage = () => (
  <div>
    <ul>
      <li>
        E-Trade Options Analyzer
        <div>
          I worked on this project with one other engineer. We rebuilt it from
          the ground up using Angular.js, a forked version of bootstrap and
          ui-bootstrap. I primarly worked on the charting part of the UI
        </div>
        <div>Add screenshots here</div>
      </li>
      <li>
        E-Trade Options Income Finder
        <div>
          I was the lead on this new product. I built the first prototype in
          Angular.js and version 1 of this product.
        </div>
        <div>Add screenshots here</div>
      </li>
      <li>
        E-Trade Options Backtester
        <div>
          I was the lead on this new product. I built the first prototype in
          Angular.js and version 1 of this product.
        </div>
        <div>Add screenshots here</div>
      </li>
      <li>
        BioMarin CLN2 iPad App
        <div>
          I was the lead on this project when I was still realtively new to
          Viscira. The requirements from the client was unique. They had their
          own enterprsie iPad container that could accept webpages. I
          recommended that we use Angular 2 with the CLI to quickly build out
          the pages and router needed to move between the nav and subnav pages.
        </div>
        <div>Add screenshots here</div>
      </li>
      <li>
        BioMarin CLN2 iPad App (Unbranded)
        <div>
          Same app just with a different skin for unbranded marketing purposes.
        </div>
      </li>
      <li>
        GSK Vaccines Eduaction Module
        <div>
          This was a Web app based on an education framework called Adapt
          Learning. It was selected because of a really short deadline given by
          the client. The technology it used was Backbone.js and SCSS.
        </div>
        <div>Add screenshots here</div>
      </li>
      <li>Jazz Pharmaceuticals</li>
      <div>
        <ul>
          <li>
            <img src={image001} width="100" height="100" />
          </li>
          <li>
            <img src={image002} width="100" height="100" />
          </li>
          <li>
            <img src={image003} width="100" height="100" />
          </li>
          <li>
            <img src={image004} width="100" height="100" />
          </li>
          <li>
            <img src={image005} width="100" height="100" />
          </li>
          <li>
            <img src={image006} width="100" height="100" />
          </li>
          <li>
            <img src={image007} width="100" height="100" />
          </li>
          <li>
            <img src={image008} width="100" height="100" />
          </li>
          <li>
            <img src={image009} width="100" height="100" />
          </li>
        </ul>
      </div>
    </ul>
  </div>
);

export default PortfolioPage;
