import React from 'react';
import { Helmet } from 'react-helmet';

import Menubar from './Menubar';

export default ({ info }) =>
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{!info ? 'ReactPress - Built Wordpress Theme using React!' : `${info.name} - ${info.description}`}</title>
    </Helmet>
    <Menubar />
  </React.Fragment>
