import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: ''
  }

  getPost = async () => {
    const { data: posts } = await axios('/wp-json/wp/v2/posts?per_page=5');
    this.setState({posts});
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-posts"><ul>
          {!posts ? 'Loading': posts.map(post => <li key={post.id}>
              <h3>{post.title.rendered}</h3>
              <ul className="meta">
                <li>{post.date}</li>
                <li>{post.author}</li>
              </ul>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
              <Link className="btn-more" to={`/${post.categories[0]}/${post.id}`}>Read More...</Link>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default Posts;
