import React from 'react';
import FundIntro from './FundIntro';
import FundDetails from './FundDetails';
import Loading from './Loading';

export default class Content extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      openedFund: null,
    }
  }

  handleOpenFundDetails = (newValue) => {
    this.setState({
      openedFund: newValue,
    })
  }
  render () {
    
    if (this.state.openedFund) {
      return (
        <FundDetails
          fund={this.state.openedFund}
          handleBackButton={() => this.handleOpenFundDetails(null)}
        />
      )
    }

    return (
      <div className="container">
        <h2 className="top-title">Mutual Funds</h2>
        {
          !this.props.allFunds ?
          <div className="push-20">
            <Loading />
          </div> :
          null
        }
        {
          this.props.allFunds?.map((fund, index) => {
            return (
              <FundIntro
                key={index}
                fund={fund}
                onClick={() => this.handleOpenFundDetails(fund)}
              />
            )
          })
        }
      </div>
    )
  }
}