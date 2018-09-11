import React from 'react';
import BiomarinCaseStudies from '../images/BiomarinCaseStudies.png';
import BiomarinCaseStudy from '../images/BiomarinCaseStudy.png';
import BiomarinCaseStudyWithAnswer from '../images/BiomarinCaseStudyWithAnswer.png';
import BiomarinChart from '../images/BiomarinChart.png';
import BiomarinCaseStudyWithWrongAnswer from '../images/BiomarineCaseStudyWithWrongAnswer.png';
import BiomarinHomePage from '../images/BiomarinHomePage.png';
import BiomarinIntroduction from '../images/BiomarinIntroduction.png';
import BiomarinRatingScale from '../images/BiomarinRatingScale.png';
import BiomarinSummary from '../images/BiomarinSummary.png';
import BiomarinVideoModal from '../images/BiomarinVideoModal.png';
import BiomarinVideoModal2 from '../images/BiomarinVideoModal2.png';
import BiomarinVideoPlayer from '../images/BiomarinVideoPlayer.png';

const BiomarinBranded = () => (
  <div>
    <div className="title">BioMarin CLN2 iPad App</div>
        <div className="body">
          <p className="description">
            I was the lead on this project when I was still realtively new to
            Viscira. The requirements from the client was unique. They had their
            own enterprsie iPad container that could accept webpages. I
            recommended that we use Angular 2 with the CLI to quickly build out
            the pages and router needed to move between the nav and subnavpages.
          </p>
          <div className="screenshots">
            <img className="col" src={BiomarinHomePage} alt="" />
            <img className="col" src={BiomarinIntroduction} alt="" />
            <img className="col" src={BiomarinCaseStudy} alt="" />
            <img className="col" src={BiomarinChart} alt="" />
            <img className="col" src={BiomarinRatingScale} alt="" />
            <img className="col" src={BiomarinCaseStudies} alt="" />
            <img className="col" src={BiomarinCaseStudyWithAnswer} alt="" />
            <img
              className="col"
              src={BiomarinCaseStudyWithWrongAnswer}
              alt=""
            />
            <img className="col" src={BiomarinVideoModal} alt="" />
            <img className="col" src={BiomarinVideoModal2} alt="" />
            <img className="col" src={BiomarinVideoPlayer} alt="" />
            <img className="col" src={BiomarinSummary} alt="" />
          </div>
        </div>
  </div>
);

export default BiomarinBranded;