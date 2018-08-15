import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

class Posts extends Component {
  state = {
    post: '',
    category: [],
    tags: []
  }

  getPost = async () => {
    const { match: { params : { id } } } = this.props;
    const { data: post } = await axios(`/wp-json/wp/v2/posts/${id}`);
    this.setState({post});
    this.getCategory();
    this.getTags();
  }

  getCategory = async () => {
    const { post } = this.state;
    await post ? post.categories.map(async oneCat => {
      const { data: { name, slug} } = await axios(`/wp-json/wp/v2/categories/${oneCat}`);
      let category = this.state.category;
      category = [...category, {name, slug}];
      this.setState({category})
    }) : '';
  }

  getTags = async () => {
    const { post } = this.state;
    await post ? post.tags.map(async oneTag => {
      const { data: { name, slug} } = await axios(`/wp-json/wp/v2/tags/${oneTag}`);
      let tags = this.state.tags;
      tags = [...tags, {name, slug}];
      this.setState({tags})
    }) : '';
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    const { post } = this.state;
    return (
      <div className="blog-post">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div className="single-post">
              { !post ? <ClipLoader className="loader" /> :
                <React.Fragment>
                  <ul className="category list-inline">
                    {this.state.category ? this.state.category.map(oneCat =>
                      <li key={oneCat.slug}><a href="#">{oneCat.name}</a></li>
                    ) : '...'}
                  </ul>
                  <h3 className="title">{post.title.rendered}</h3>
                  <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                  <ul className="tags list-inline">
                    <li key="tags">Tags: </li>
                    {this.state.tags ? this.state.tags.map(oneTag =>
                      <li key={oneTag.slug}><a href="#">{oneTag.name}</a></li>
                    ) : '...'}
                  </ul>
                  </React.Fragment>
                 }
                 </div>
            </Col>
            <Col xs={6} md={4}>
              Sidebar Content Will go Here
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Posts;
