import cuid from 'cuid';
import {combineReducers} from 'redux'

function manageRestaurants(state=[], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, {text: action.text, id: cuid()}]

  default:
      return state;
  }

}
export default combineReducers({restaurants: manageRestaurants})
