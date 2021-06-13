import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  const Restaurants = props => {
    const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} />)
  }
  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;
