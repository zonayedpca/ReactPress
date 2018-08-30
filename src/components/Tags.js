import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

export default class Tags extends Component {
  state = {
    tags: ''
  }

  getTags = async () => {
    const { data: tags } = await axios('/wp-json/wp/v2/tags');
    this.setState({tags});
  }

  componentDidMount() {
    this.getTags();
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="tags">
        <h4>Tags</h4>
        {!tags ? <ClipLoader/> : <ul className="list-inline">{tags.map(tag => <li><a href={`/tag/${tag.slug}`}>{tag.name}</a></li>)}</ul>}
      </div>
    )
  }
}
