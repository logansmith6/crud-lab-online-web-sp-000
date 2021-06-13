import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} {...this.props.actions} />
        <Reviews reviews={this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = dispatch => ({
  actions: {
    addReview: review=> dispatch({type: 'ADD_REVIEW', review})
    deleteReview: id=> dispatch({type: 'DELETE_REVIEW', id: id})
  }
})
export default ReviewsContainer;
