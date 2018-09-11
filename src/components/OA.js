import React, { Fragment } from 'react';

import OAdefaultview from '../images/OA-default-view.png';
import OAresults from '../images/OA-results.png';
import OAchart from '../images/OA-chart.png';
import OAtablechart from '../images/OA-table-chart.png';

const OA = () => (
  <Fragment>
    <div className="title">E-Trade Options Analyzer</div>
    <div className="body">
      <p className="description">
        I worked on this project with one other engineer. We rebuilt it from the
        ground up using Angular.js, a forked version of bootstrap and
        ui-bootstrap. I primarly worked on the charting part of the UI.
      </p>
      <div className="screenshots">
        <img className="col" src={OAdefaultview} alt="" />
        <img className="col" src={OAresults} alt="" />
        <img className="col" src={OAchart} alt="" />
        <img className="col" src={OAtablechart} alt="" />
      </div>
    </div>
  </Fragment>
);

export default OA;
