import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { name: action.name}
  }

}
