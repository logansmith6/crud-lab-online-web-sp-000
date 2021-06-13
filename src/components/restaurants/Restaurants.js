import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    return(
      <ul>
       {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
