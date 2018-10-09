import React, { Fragment } from 'react';
import BiomarinUnbrandedCaseStudies from '../images/BiomarinUnbrandedCaseStudies.png';
import BiomarinUnbrandedHome from '../images/BiomarinUnbrandedHome.png';
import BiomarinUnbrandedIntro from '../images/BiomarinUnbrandedIntro.png';
import BiomarinUnbrandedNaturalHistory from '../images/BiomarinUnbrandedNaturalHistory.png';
import BiomarinUnbrandedNaturalHistoryWithModal from '../images/BiomarinUnbrandedNaturalHistoryWithModal.png';
import BiomarinUnbrandedRatingScale from '../images/BiomarinUnbrandedRatingScale.png';
import BiomarinUnbrandedSummary from '../images/BiomarinUnbrandedSummary.png';

const BiomarinUnBranded = () => (
  <Fragment>
    <div className="title">BioMarin CLN2 iPad App (Unbranded)</div>
    <div className="body">
      <p>
        Same app just with a different skin for unbranded marketing purposes.
      </p>
      <div className="screenshots">
        <img className="col" src={BiomarinUnbrandedHome} alt="" />
        <img className="col" src={BiomarinUnbrandedIntro} alt="" />
        <img className="col" src={BiomarinUnbrandedNaturalHistory} alt="" />
        <img
          className="col"
          src={BiomarinUnbrandedNaturalHistoryWithModal}
          alt=""
        />
        <img className="col" src={BiomarinUnbrandedCaseStudies} alt="" />
        <img className="col" src={BiomarinUnbrandedRatingScale} alt="" />
        <img className="col" src={BiomarinUnbrandedSummary} alt="" />
      </div>
    </div>
  </Fragment>
);

export default BiomarinUnBranded;
