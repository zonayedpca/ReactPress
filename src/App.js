import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

import './App.css';

class App extends Component {
  state = {
    info: null,
    show: false
  }

  getSiteInfo = async () => {
    const { data: info } = await axios('/wp-json');
    this.setState({info});
  }

  componentDidMount() {
    this.getSiteInfo();
  }

  render() {
    const { info, show } = this.state;

    return (
      <HashRouter>
        <div className="App">
          <Header info={info} />
          <p className="App-intro">
            Create WordPress template using React! To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          { show ? <Content /> : <button onClick={() => this.setState({show: true})}>Load Posts</button>}
        </div>
      </HashRouter>
    );
  }
}

export default App;
