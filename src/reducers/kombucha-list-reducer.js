import * as c from './../actions/ActionTypes'

export default  (state = {}, action) => {
  const { name, brand, price, alcoholContent, flavor, pints, id} = action;
  switch (action.type) {
    case c.ADD_KOMBUCHA:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          flavor: flavor,
          pints: pints,
          id: id
        }
      });

    case c.DELETE_KOMBUCHA:
        const newState = {...state};
        delete newState[id];
        return newState;
    
    case c.BUY_PINT:
      if (action.pints > 0){
        return Object.assign({}, state, {
          [id]: {
            name: name,
            brand: brand,
            price: price,
            alcoholContent: alcoholContent,
            flavor: flavor,
            pints: pints - 1,
            id: id
          }
        });
      } else{
        return state
      }
      default:
      return state;
  }
};