import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(rev=> <Review review={rev} actions={this.props.actions}/>)}
      </ul>
    );
  }
};

export default Reviews;
