import React from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts';
import Post from './Post';

const Content = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Posts} />
      <Route exact path="/:cat/:id" render={(props) => <Post {...props} helo={console.log(props)} />} />
    </React.Fragment>
  )
}

export default Content;
