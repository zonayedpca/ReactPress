import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    post: ''
  }

  getPost = async () => {
    const { match: { params : { id } } } = this.props;
    const { data: post } = await axios(`/wp-json/wp/v2/posts/${id}`);
    this.setState({post});
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { post } = this.state;
    return (
      <div className="blog-post">
        { !post ? <p>Loading</p> : <div className="single-post">
            <h3>{post.title.rendered}</h3>
            <ul className="meta">
              <li>{post.date}</li>
              <li>{post.author}</li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
          </div>
        }
      </div>
    )
  }
}

export default Posts;
