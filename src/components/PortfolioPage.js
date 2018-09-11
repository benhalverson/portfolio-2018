import React from 'react';
import '../styles/css/portfolio.css';

import OAdefaultview from '../images/OA-default-view.png';
import OAresults from '../images/OA-results.png';
import OAchart from '../images/OA-chart.png';
import OAtablechart from '../images/OA-table-chart.png';

import IGOTdefaultview from '../images/IGOT-default-view.png';
import IGOTadvanceddefaultview from '../images/IGOT-default-view.png';
import IGOTtableexpanded from '../images/IGOT-table-expanded.png';
import IGOTtablechart from '../images/IGOT-table-chart.png';
import IGOTsearchresults from '../images/IGOT-search-results.png';
import IGOTdatepicker from '../images/IGOT-datepicker.png';

import OptionsIncomeFinderDefaultView from '../images/OptionsIncomeFinderDefaultView.png';
import OptionsIncomeFinderAdditionalFilters from '../images/OptionsIncomeFinderAdditionalFilters.png';
import OptionsIncomeFinderExpandedResults from '../images/OptionsIncomeFinderExpandedResults.png';
import OptionsIncomeFinderMiniBacktester from '../images/OptionsIncomeFinderMinitBacktester.png';
import OptionsIncomeFinderResults from '../images/OptionsIncomeFinderResults.png';
import OptionsIncomeFinderSearch from '../images/OptionsIncomeFinderSearch.png';

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

import BiomarinUnbrandedCaseStudies from '../images/BiomarinUnbrandedCaseStudies.png';
import BiomarinUnbrandedHome from '../images/BiomarinUnbrandedHome.png';
import BiomarinUnbrandedIntro from '../images/BiomarinUnbrandedIntro.png';
import BiomarinUnbrandedNaturalHistory from '../images/BiomarinUnbrandedNaturalHistory.png';
import BiomarinUnbrandedNaturalHistoryWithModal from '../images/BiomarinUnbrandedNaturalHistoryWithModal.png';
import BiomarinUnbrandedRatingScale from '../images/BiomarinUnbrandedRatingScale.png';
import BiomarinUnbrandedSummary from '../images/BiomarinUnbrandedSummary.png';

import GSK001 from '../images/GSK001.png';
import GSK002 from '../images/GSK002.png';
import GSK003 from '../images/GSK003.png';
import GSK004 from '../images/GSK004.png';
import GSK005 from '../images/GSK005.png';

import jazz001 from '../images/Jazz-Erwinize001.png';
import jazz002 from '../images/Jazz-Erwinize002.png';
import jazz003 from '../images/Jazz-Erwinize003.png';
import jazz004 from '../images/Jazz-Erwinize004.png';
import jazz005 from '../images/Jazz-Erwinize005.png';
import jazz006 from '../images/Jazz-Erwinize006.png';
import jazz007 from '../images/Jazz-Erwinize007.png';
import jazz008 from '../images/Jazz-Erwinize008.png';
import jazz009 from '../images/Jazz-Erwinize009.png';

const PortfolioPage = () => (
  <div className="container">
    <div className="flex-grid">
      <div className="col">
        <div className="title">E-Trade Options Analyzer</div>
        <div className="body">
          <p className="description">
            I worked on this project with one other engineer. We rebuilt it from
            the ground up using Angular.js, a forked version of bootstrap and
            ui-bootstrap. I primarly worked on the charting part of the UI.
          </p>
          <div className="screenshots">
            <img className="col" src={OAdefaultview} alt="" />
            <img className="col" src={OAresults} alt="" />
            <img className="col" src={OAchart} alt="" />
            <img className="col" src={OAtablechart} alt="" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="title">E-Trade Options Income Finder</div>
        <div className="body">
          <p className="description">
            I was the lead on this new product. I built the first prototype in
            Angular.js and version 1 of this product.
          </p>
          <div className="screenshots">
            <img className="col" src={OptionsIncomeFinderDefaultView} alt="" />
            <img
              className="col"
              src={OptionsIncomeFinderAdditionalFilters}
              alt=""
            />
            <img className="col" src={OptionsIncomeFinderSearch} alt="" />
            <img className="col" src={OptionsIncomeFinderResults} alt="" />
            <img
              className="col"
              src={OptionsIncomeFinderExpandedResults}
              alt=""
            />
            <img
              className="col"
              src={OptionsIncomeFinderMiniBacktester}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="title">E-Trade Options Backtester</div>
        <div className="body">
          <p className="description">
            I was the lead on this new product. I built the first prototype in
            Angular.js and version 1 of this product.
          </p>
          <div className="screenshots">
            <img className="col" src={IGOTdefaultview} alt="" />
            <img className="col" src={IGOTadvanceddefaultview} alt="" />
            <img className="col" src={IGOTtableexpanded} alt="" />
            <img className="col" src={IGOTtablechart} alt="" />
            <img className="col" src={IGOTsearchresults} alt="" />
            <img className="col" src={IGOTdatepicker} alt="" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="flex-grid">
      <div className="col">
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
      <div className="col">
        <div className="title">BioMarin CLN2 iPad App (Unbranded)</div>
        <div className="body">
          <p>
            Same app just with a different skin for unbranded marketing
            purposes.
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
      </div>
      <div className="col">
        <div className="title">GSK Vaccines Eduaction Module</div>
        <div className="body">
          <p>
            This was a Web app based on an education framework called Adapt
            Learning. It was selected because of a really short deadline given
            by the client. The technology it used was Backbone.js and SCSS.
          </p>
          <div className="screenshots">
            <img className="col" src={GSK001} alt="" />
            <img className="col" src={GSK002} alt="" />
            <img className="col" src={GSK003} alt="" />
            <img className="col" src={GSK004} alt="" />
            <img className="col" src={GSK005} alt="" />
          </div>
        </div>
      </div>
      <div className="col">
          <div className="title">Jazz Pharmaceuticals</div>
          <div className="body">
            <p>
              {' '}
              This was a unique project becuae it took two different solutions
              that Viscira provided and combined them into one. I mostly worked
              on the Casebuilder part of this application.
            </p>
            <div className="screenshots">
              <img src={jazz001} alt="" width="100" height="100" />
              <img src={jazz002} alt="" width="100" height="100" />
              <img src={jazz003} alt="" width="100" height="100" />
              <img src={jazz004} alt="" width="100" height="100" />
              <img src={jazz005} alt="" width="100" height="100" />
              <img src={jazz006} alt="" width="100" height="100" />
              <img src={jazz007} alt="" width="100" height="100" />
              <img src={jazz008} alt="" width="100" height="100" />
              <img src={jazz009} alt="" width="100" height="100" />
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default PortfolioPage;
