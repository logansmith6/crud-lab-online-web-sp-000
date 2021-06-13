import React, { Component } from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
      const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} />)

  return (
    <ul>
      {bands}
      </ul>
  )

  }

export default Restaurants;
