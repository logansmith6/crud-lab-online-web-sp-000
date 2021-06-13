import cuid from 'cuid';
import {combineReducers} from 'redux'

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {...state, {text: action.text, id: cuid()}}

  default:
      return state;
  }

}
