import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

import Sidebar from './Sidebar';
import About from './About';
import Category from './Category';
import Tags from './Tags';

class Posts extends Component {
  state = {
    posts: ''
  }

  getPost = async () => {
    const { data: posts } = await axios('/wp-json/wp/v2/posts?per_page=10&_embed');
    this.setState({posts});
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-posts">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <ul className="posts">
                {!posts ? <ClipLoader className="loader" /> : posts.map(post => <li key={post.id}>
                    <Media>
                      <Media.Left>
                        <img className="author-img" width={48} height={48} src={post._embedded['author'][0].avatar_urls['48']} alt={post._embedded['author'][0].name} />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>{post._embedded['author'][0].name}</Media.Heading>
                        <ul className="meta">
                          <li>{post.date}</li>
                        </ul>
                      </Media.Body>
                    </Media>
                    <h3 className="title"><Link className="btn-more" to={`/post/${post.id}`}>{post.title.rendered}</Link></h3>
                    {post._embedded['wp:featuredmedia'] ? (post._embedded['wp:featuredmedia'][0].media_details.sizes ? <img alt="featured_image" className="featured_image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url} /> : console.log('Again Not Found')) : console.log('Not Found')}
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substr(0,120)}} />
                  </li>)}
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <Sidebar>
                <About />
                <Category />
                <Tags />
              </Sidebar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Posts;
