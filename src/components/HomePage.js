import React from 'react';
import { NavLink } from 'react-router-dom';
const HomePage = () => (
  <div className="content">
    <section className="hero">
      <img src="https://via.placeholder.com/200x200" alt="my pic" />
      <div className="hero-content">
        <h1>About me</h1>
        <h2>Etrade - Online stock and options trading program for consumers</h2>
        <p>
          I worked on 3 products that consumers used to analyze various option
          trading scenarios.
        </p>
        <p>My focus was to implement the <NavLink to="/projects/etrade">user interface designs.</NavLink></p>
        <p>
          Technology used HTML, CSS, Javascript, Angular.js UI-Bootstrap,
          highcharts.js, Grunt, Gulp, Node.js
        </p>
        <strong>Management challenge:</strong>
        <p>I was called in when the program was already late </p>
        <strong>Result:</strong>
        <p>
          Within 6 months, accomplished product upgrade on time in the new
          timeline.
        </p>
        <strong>Special conditions:</strong>
        <p>
          Financial trading software requires financial trading protocols to
          protect customer data.
        </p>

        <h2>
          Viscira – Marketing agency focused on the pharmaceutical industry
        </h2>
        <div>
        <p>
        I worked on various B2B websites and mobile applications that are used
          for:
        </p>
          
          <ol>
            <li>
            <p>
            B2B sales from medical companies to medical doctors and hospitals.
            </p>
              
            </li>
            <li>
            <p>
            For medical doctors to train other doctors on procedures and
              products.
            </p>
              
            </li>
          </ol>
        </div>
        <p>
          My focus was to implement the user interface designs on tablets,
          laptops and browser based applications.
        </p>
        <p>
          Technology used: HTML, CSS, Typescript, Angular, React, React Native,
          Bootstrap, SCSS, Grunt, Node.js
        </p>
        <strong>Special conditions:</strong>
        <p>
          Because these are high priced medical institutions, the UX and the
          application needed to run near perfectly with very high attention to
          detail.
        </p>
        <div>
          <ol>
            <li><p>
            These applications contained specific medical and drug
              information, which requires following strict Federal regulations.
              The FDA prior to release inspected all finished applications.
            </p>
              
            </li>
            <li>
              <p>
              Very short deadlines that could not be missed because of big
              product launches after drug approval by the FDA.
              </p>
              
            </li>
          </ol>
        </div>
        {/* <p>With over 4 years of experience building websites, web applications, and mobile apps, I
      am passionate about UI development. I also contribute to open source projects in my free time.</p>
      <p>I enjoy working with people who care about well tested and documented code.</p> */}
        <a className="action-btn" href="/contact">
          Hire me
        </a>
      </div>
    </section>
  </div>
);

export default HomePage;
