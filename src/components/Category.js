import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

export default class Category extends Component {
  state = {
    category: ''
  }

  getCategory = async () => {
    const { data: category } = await axios('/wp-json/wp/v2/categories');
    this.setState({category});
  }

  componentDidMount() {
    this.getCategory();
  }

  render() {
    const { category } = this.state;
    return (
      <div className="category">
        <h4>Category</h4>
        {!category ? <ClipLoader/> : <ul>{category.map(oneCat => <li><a href={`/category/${oneCat.slug}`}>{oneCat.name}</a></li>)}</ul>}
      </div>
    )
  }
}
