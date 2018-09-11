import React from 'react';
import IGOTdefaultview from '../images/IGOT-default-view.png';
import IGOTadvanceddefaultview from '../images/IGOT-default-view.png';
import IGOTtableexpanded from '../images/IGOT-table-expanded.png';
import IGOTtablechart from '../images/IGOT-table-chart.png';
import IGOTsearchresults from '../images/IGOT-search-results.png';
import IGOTdatepicker from '../images/IGOT-datepicker.png';

const OptionsBacktester = () => (
  <div>
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
);

export default OptionsBacktester;
