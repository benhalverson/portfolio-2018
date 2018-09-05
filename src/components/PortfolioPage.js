import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap';

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
  <Container>
    <Row>
      <Col xs="4">
        <Card>
          <CardTitle>E-Trade Options Analyzer</CardTitle>
          <CardBody>
            <CardText>
              I worked on this project with one other engineer. We rebuilt it
              from the ground up using Angular.js, a forked version of bootstrap
              and ui-bootstrap. I primarly worked on the charting part of the UI
            </CardText>

            <div>
            <img src={OAdefaultview} alt="" width="100" height="100" />
            <img src={OAresults} alt="" width="100" height="100" />
            <img src={OAchart} alt="" width="100" height="100" />
            <img src={OAtablechart} alt="" width="100" height="100" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <CardTitle>E-Trade Options Income Finder</CardTitle>
          <CardBody>
            <CardText>
              I was the lead on this new product. I built the first prototype in
              Angular.js and version 1 of this product.
            </CardText>

            <div>
            <img src={OptionsIncomeFinderDefaultView} alt="" width="100" height="100" />
            <img src={OptionsIncomeFinderAdditionalFilters} alt="" width="100" height="100" />
            <img src={OptionsIncomeFinderSearch} alt="" width="100" height="100" />
            <img src={OptionsIncomeFinderResults} alt="" width="100" height="100" />
            <img src={OptionsIncomeFinderExpandedResults} alt="" width="100" height="100" />
            <img src={OptionsIncomeFinderMiniBacktester} alt="" width="100" height="100" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <CardTitle>E-Trade Options Backtester</CardTitle>
          <CardBody>
            <CardText>
              I was the lead on this new product. I built the first prototype in
              Angular.js and version 1 of this product.
            </CardText>

            <div>
            <img src={IGOTdefaultview} alt="" width="100" height="100" />
            <img src={IGOTadvanceddefaultview} alt="" width="100" height="100" />
            <img src={IGOTtableexpanded} alt="" width="100" height="100" />
            <img src={IGOTtablechart} alt="" width="100" height="100" />
            <img src={IGOTsearchresults} alt="" width="100" height="100" />
            <img src={IGOTdatepicker} alt="" width="100" height="100" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="4">
        <Card>
          <CardTitle>BioMarin CLN2 iPad App</CardTitle>
          <CardBody>
            <CardText>
              I was the lead on this project when I was still realtively new to
              Viscira. The requirements from the client was unique. They had
              their own enterprsie iPad container that could accept webpages. I
              recommended that we use Angular 2 with the CLI to quickly build
              out the pages and router needed to move between the nav and subnav
              pages.
            </CardText>
            <div>
              <img src={BiomarinHomePage} alt="" width="100" height="100" />
              <img src={BiomarinIntroduction} alt="" width="100" height="100" />
              <img src={BiomarinCaseStudy} alt="" width="100" height="100" />
              <img src={BiomarinChart} alt="" width="100" height="100" />
              <img src={BiomarinRatingScale} alt="" width="100" height="100" />
              <img src={BiomarinCaseStudies} alt="" width="100" height="100" />
              <img src={BiomarinCaseStudyWithAnswer} alt="" width="100" height="100" />
              <img src={BiomarinCaseStudyWithWrongAnswer} alt="" width="100" height="100" />
              <img src={BiomarinVideoModal} alt="" width="100" height="100" />
              <img src={BiomarinVideoModal2} alt="" width="100" height="100" />
              <img src={BiomarinVideoPlayer} alt="" width="100" height="100" />
              <img src={BiomarinSummary} alt="" width="100" height="100" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <CardTitle>BioMarin CLN2 iPad App (Unbranded)</CardTitle>
          <CardBody>
            <CardText>
              Same app just with a different skin for unbranded marketing
              purposes.
            </CardText>
            <div>Add screenshots here</div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <CardTitle>GSK Vaccines Eduaction Module</CardTitle>
          <CardBody>
            <CardText>
              This was a Web app based on an education framework called Adapt
              Learning. It was selected because of a really short deadline given
              by the client. The technology it used was Backbone.js and SCSS.
            </CardText>
            <div>Add screenshots here</div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="auto">
        <Card>
          <CardTitle>Jazz Pharmaceuticals</CardTitle>
          <CardBody>
            <CardText>
              This was a unique project becuae it took two different solutions
              that Viscira provided and combined them into one. I mostly worked
              on the Casebuilder part of this application. I
            </CardText>
            <div>
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
          </CardBody>
        </Card>
        <li />
      </Col>
    </Row>
  </Container>
);

export default PortfolioPage;
