import React from 'react';
import './App.css';

import {
  getAllFunds,
} from './utils/initialData';
import Loading from './components/Loading';
import Content from './components/Content';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allFunds: null,
    }
  }

  componentDidMount () {
    getAllFunds(this.setData);
  }

  setData = (stateKey, data) => {
    this.setState({
      [stateKey]: data,
    });
  }

  render () {
    const {
      allFunds,
    } = this.state;



    if (!allFunds) {
      return (
        <div className="push-20">
          <Loading />
        </div>
      )
    }

    return (
      <Content {...this.state} />
    );
  }
}

export default App;
