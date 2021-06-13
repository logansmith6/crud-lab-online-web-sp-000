import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={_ => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer />
        </li>
      </div>
    );
  }
};

export default Restaurant;
