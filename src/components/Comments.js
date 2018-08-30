import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

export default class Comments extends Component {
  state = {
    comments: ''
  }

  getComment = async () => {
    const { data: comments } = await axios('/wp-json/wp/v2/comments?post=32');
    this.setState({comments});
  }

  componentDidMount() {
    this.getComment();
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="comment">
        <ul>
          {!comments ? <ClipLoader/> : {comments.map(comment => {

          })}}
        </ul>
      </div>
    )
  }
}
