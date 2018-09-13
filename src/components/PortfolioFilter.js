import React, { Component } from 'react';

export default class PortfolioFilter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <ul>
          <li data-filter="*">Show All</li>
          <li data-filter=".finTech">FinTech</li>
          <li data-filter=".healthTech">HeathTech</li>
          <li data-filter=".corporates">Corporates</li>
        </ul>
      </div>
    );
  }
}
