import React from 'react';
import FundIntro from './FundIntro';
import FundDetails from './FundDetails';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroller';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default class Content extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      openedFund: null,
      pagesLoaded: 1,
      search: '',
      category: 'all',
      subCategory: 'all',
      sortBy: 'year_3',
      plan: {
        growth: true,
        dividend: false,
      }
    }
  }

  handleOpenFundDetails = (newValue) => {
    this.setState({
      openedFund: newValue,
    })
  }

  handleUpdateFilter = (key, newValue) => {
    this.setState({
      [key]: newValue,
      pagesLoaded: 1,
    })
  }

  handleChangePlan = (key, newValue) => {
    this.setState({
      plan: {
        ...this.state.plan,
        [key]: newValue,
      },
      pagesLoaded: 1,
    })
  }

  render () {
    const filteredFundsBySearch =
      this.props.allFunds
      ?.filter((fund) => {
        if (this.state.search === '') {
          return true;
        } else {
          return fund.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
        }
      });

    const filteredFundsByPlan =
      filteredFundsBySearch
      ?.filter((fund) => {
        if ((this.state.plan.growth && fund.plan === 'GROWTH') || (this.state.plan.dividend && (fund.plan === 'DIVIDEND ANNUAL' || fund.plan === null))) {
          return true;
        } else if (this.state.plan.growth === this.state.plan.dividend) {
          return true;
        } else {
          return false;
        }
      });

    const sortedFunds =
      filteredFundsByPlan
      ?.sort((fundA, fundB) => {
        if (this.state.sortBy === 'volatility') {
          return fundA[this.state.sortBy] - fundB[this.state.sortBy];
        } else {
          return fundB['returns'][this.state.sortBy] - fundA['returns'][this.state.sortBy];
        }
      });


    const filteredFundsByCategory =
      sortedFunds
      ?.filter((fund) => {
        if (this.state.category === 'all') {
          return true;
        } else {
          return fund.fund_type === this.state.category
        }
      });

    const subCategories = this.state.category === 'all' ? {} : filteredFundsByCategory?.reduce((prev, curr) => {
      prev[curr['fund_category']] = true;
      return prev;
    }, {});

    const filteredFundsBySubCategory =
      filteredFundsByCategory
      ?.filter((fund) => {
        if (this.state.subCategory === 'all') {
          return true;
        } else {
          return fund.fund_category === this.state.subCategory
        }
      });

    const filteredFunds = filteredFundsBySubCategory;

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
          <div className="filters">
            <FormControl variant="outlined" className="control-item">
              <TextField
                id="outlined-basic-search"
                label="Search"
                variant="outlined"
                onChange={(e) => this.handleUpdateFilter('search', e.target.value)}
              />
            </FormControl>

            <FormControl variant="outlined" className="control-item plan-check">
              <FormControlLabel
                control={
                  <Checkbox
                    className="checkbox"
                    checked={this.state.plan.growth}
                    onChange={() => this.handleChangePlan('growth', !this.state.plan.growth)}
                    name="checkedB"
                    color="primary"
                  />
                }
                className="checkbox-container"
                label={<div className="checkbox-label">Growth</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className="checkbox"
                    checked={this.state.plan.dividend}
                    onChange={() => this.handleChangePlan('dividend', !this.state.plan.dividend)}
                    name="checkedB"
                    color="primary"
                  />
                }
                className="checkbox-container"
                label={<div className="checkbox-label">Dividend</div>}
              />
            </FormControl>

            <FormControl variant="outlined" className="control-item">
              <InputLabel id="sort-by-label">Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={this.state.sortBy}
                onChange={(e) => this.handleUpdateFilter('sortBy', e.target.value )}
                label="Sort By"
              >
                <MenuItem value={'year_3'}>3 Years</MenuItem>
                <MenuItem value={'year_5'}>5 Years</MenuItem>
                <MenuItem value={'year_1'}>1 Year</MenuItem>
                <MenuItem value={'inception'}>Since Launch (Inception)</MenuItem>
                <MenuItem value={'volatility'}>Volatility</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className="control-item">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={this.state.category}
                onChange={(e) => {
                  this.handleUpdateFilter('category', e.target.value );
                  this.handleUpdateFilter('subCategory', 'all' );
                  }}
                label="Category"
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'Debt'}>Debt</MenuItem>
                <MenuItem value={'Equity'}>Equity</MenuItem>
                <MenuItem value={'Hybrid'}>Hybrid</MenuItem>
                <MenuItem value={'Others'}>Others</MenuItem>
                <MenuItem value={'Solution Oriented'}>Solution Oriented</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className="control-item">
              <InputLabel id="sub-category-label">Sub Category</InputLabel>
              <Select
                labelId="sub-category-label"
                id="sub-category"
                value={this.state.subCategory}
                onChange={(e) => this.handleUpdateFilter('subCategory', e.target.value )}
                label="Sub Category"
              >
                <MenuItem value={'all'}>All</MenuItem>
                {
                  Object.keys(subCategories).map((val, index) => {
                    return (
                      <MenuItem key={index} value={val}>{val}</MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
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
              filteredFunds?.slice(0, this.state.pagesLoaded * 10)
              .map((fund, index) => {
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