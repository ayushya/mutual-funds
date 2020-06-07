import React from 'react';

import { getFundDetails } from '../utils/initialData';
import Loading from './Loading';
import { ReactSVG } from 'react-svg'

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
        <ReactSVG
          className="back-button"
          src={require('../images/back.svg')}
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