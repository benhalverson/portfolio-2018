import React from 'react';
import '../styles/css/portfolio.css';
import OA from './OA';
import OptionsIncomeFinder from './OptionsIncomeFinder';
import OptionsBacktester from './OptionsBacktester';
import BiomarinBranded from './BiomarinBranded';
import BiomarinUnBranded from './BiomarinUnbranded';
import GSKVaccines from './GSKVaccines';
import JazzErwinaze from './JazzErwinaze';

const PortfolioPage = () => (
  <div className="container">
    <div className="flex-grid">
      <div className="col">
      <OA />
      </div>
      <div className="col">
        <OptionsIncomeFinder />
      </div>
      <div className="col">
        <OptionsBacktester />
      </div>
    </div>
    <br />
    <div className="flex-grid">
      <div className="col">
        <BiomarinBranded />
      </div>
      <div className="col">
       <BiomarinUnBranded />
      </div>
      <div className="col">
       <GSKVaccines/>
      </div>
      <div className="col">
         <JazzErwinaze />
        </div>
    </div>
  </div>
);

export default PortfolioPage;
