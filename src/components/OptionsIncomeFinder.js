import React, { Fragment } from 'react';
import OptionsIncomeFinderDefaultView from '../images/OptionsIncomeFinderDefaultView.png';
import OptionsIncomeFinderAdditionalFilters from '../images/OptionsIncomeFinderAdditionalFilters.png';
import OptionsIncomeFinderExpandedResults from '../images/OptionsIncomeFinderExpandedResults.png';
import OptionsIncomeFinderMiniBacktester from '../images/OptionsIncomeFinderMinitBacktester.png';
import OptionsIncomeFinderResults from '../images/OptionsIncomeFinderResults.png';
import OptionsIncomeFinderSearch from '../images/OptionsIncomeFinderSearch.png';

const OptionsIncomeFinder = () => (
  <Fragment>
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
        <img className="col" src={OptionsIncomeFinderExpandedResults} alt="" />
        <img className="col" src={OptionsIncomeFinderMiniBacktester} alt="" />
      </div>
    </div>
  </Fragment>
);
export default OptionsIncomeFinder;
