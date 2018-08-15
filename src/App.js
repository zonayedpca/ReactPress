import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

import './App.css';

class App extends Component {
  state = {
    info: null
  }

  getSiteInfo = async () => {
    const { data: info } = await axios('/wp-json');
    this.setState({info});
  }

  componentDidMount() {
    this.getSiteInfo();
  }

  render() {
    const { info } = this.state;

    return (
      <HashRouter>
        <div className="App">
          <Header info={info} />
          <Content />
        </div>
      </HashRouter>
    );
  }
}

export default App;
