import React from 'react';

import backArrow from '../images/back.svg';
import { getFundDetails } from '../utils/initialData';
import Loading from './Loading';

export default class FundDetails extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      fundDetails: null,
    }
  }

  componentDidMount () {
    getFundDetails(this.props.fund.code, this.setData);
  }

  setData = (stateKey, data) => {
    this.setState({
      [stateKey]: data,
    });
  }

  render () {
    const {
      name,
    } = this.props.fund;

    const {
      fundDetails,
    } = this.state;

    return (
      <div className="container">
        <img
          src={backArrow}
          alt="Go back"
          className="back-button"
          onClick={() => this.props.handleBackButton()}
        />
        <div className="title">
          {name}
        </div>

        {
          !fundDetails ?
          <div className="push-20">
            <Loading />
          </div> :
          null
        }
      </div>
    )
  }
}