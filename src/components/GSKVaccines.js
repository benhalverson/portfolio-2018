import React, { Fragment } from 'react';

import GSK001 from '../images/GSK001.png';
import GSK002 from '../images/GSK002.png';
import GSK003 from '../images/GSK003.png';
import GSK004 from '../images/GSK004.png';
import GSK005 from '../images/GSK005.png';

const GSKVaccines = () => (
  <Fragment>
    <div className="title">GSK Vaccines Eduaction Module</div>
    <div className="body">
      <p>
        This was a Web app based on an education framework called Adapt
        Learning. It was selected because of a really short deadline given by
        the client. The technology it used was Backbone.js and SCSS.
      </p>
      <div className="screenshots">
        <img className="col" src={GSK001} alt="" />
        <img className="col" src={GSK002} alt="" />
        <img className="col" src={GSK003} alt="" />
        <img className="col" src={GSK004} alt="" />
        <img className="col" src={GSK005} alt="" />
      </div>
    </div>
  </Fragment>
);

export default GSKVaccines;
