import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

state = {
  text: ''
}

handleOnChange(event) {
  this.setState({
    text: event.target.value
  })
}

handleOnSubmit(event) {
  event.preventDefault();
  this.props.addRestaurant(this.state.text)
}
  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

export default ReviewsContainer;
