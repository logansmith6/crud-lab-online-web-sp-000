import React, { Component } from 'react';
import Restaurant from './Restaurant'


  const Restaurants = props => {
    const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} />)
  }
  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }


export default Restaurants;
