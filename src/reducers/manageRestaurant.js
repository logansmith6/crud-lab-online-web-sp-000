import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { name: action.name}
      return {...state, restaurants: [...state.restaurants, restaurant]}

  default:
      return state;
  }

}
