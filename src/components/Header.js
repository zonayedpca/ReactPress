import React from 'react';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';

export default ({ info }) => <React.Fragment>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{!info ? 'ReactPress - Built Wordpress Theme using React!' : `${info.name} - ${info.description}`}</title>
  </Helmet>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to ReactPress</h1>
  </header>
</React.Fragment>
