import React from 'react';

import '../styles/FundIntro.css';
import CardItem from './CardItem';

export default class FundIntro extends React.PureComponent {
  render() {
    const {
      name,
      fund_type,
      fund_category,
      returns: {
        inception,
        year_1,
        year_3,
        year_5,
      },
      volatility,
    } = this.props.fund;

    return (
      <div
        className="fund-list card"
        onClick={() => this.props.onClick()}
      >
        <h3 className="fund-title inline-block">
          {name}
        </h3>
        <div className="inline-block">
          
        </div>

        <div className="fund-category">
          {`${fund_type} · ${fund_category}`}
        </div>

        <h4 className="fund-title">
          Past Performance
        </h4>
        {
          inception ?
          <CardItem
            label="SINCE LAUNCH (SL)"
            value={`${inception.toFixed(1)}%`}
          /> :
          null
        }
        {
          year_1 ?
          <CardItem
            label="1Y Return"
            value={`${year_1.toFixed(1)}%`}
          /> :
          null
        }
        {
          year_3 ?
          <CardItem
            label="3Y Return"
            value={`${year_3.toFixed(1)}%`}
          /> :
          null
        }
        {
          year_5 ?
          <CardItem
            label="5Y Return"
            value={`${year_5.toFixed(1)}%`}
          /> :
          null
        }
        {
          volatility ?
          <CardItem
            label="Volatility (Vol)"
            value={`${volatility.toFixed(1)}%`}
          /> :
          null
        }
      </div>
    )
  }
}