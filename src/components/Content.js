import React from 'react';
import FundIntro from './FundIntro';
import FundDetails from './FundDetails';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroller';

export default class Content extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      openedFund: null,
      pagesLoaded: 1,
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
          this.props.allFunds ?
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              setTimeout(() => {
                this.setState({
                pagesLoaded: this.state.pagesLoaded + 1,
              })
              }, 500); // This Delay is added to demonstrate the effect that we show a loader and then show the rest of the data
            }}
            hasMore={true || false}
            loader={<div key={this.state.pagesLoaded} className="push-20"><Loading /></div>}
          >
            {
              this.props.allFunds?.slice(0, this.state.pagesLoaded * 10).map((fund, index) => {
                return (
                  <FundIntro
                    key={index}
                    fund={fund}
                    onClick={() => this.handleOpenFundDetails(fund)}
                  />
                )
              })
            }
          </InfiniteScroll> :
          null
        }
      </div>
    )
  }
}