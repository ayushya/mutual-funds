import React from 'react';
import './styles/App.css';

import {
  getAllFunds,
} from './utils/initialData';
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
    return (
      <Content {...this.state} />
    );
  }
}

export default App;
