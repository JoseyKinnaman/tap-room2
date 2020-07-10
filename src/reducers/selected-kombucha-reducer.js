import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, price, alcoholContent, flavor, pints, id} = action;
  switch (action.type) {
    case c.SELECT_KOMBUCHA:
      if(state===null){
        return {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          flavor: flavor,
          pints: pints,
          id: id,
        }
      }else {
        state = null;
        return state;
    }
    default:
    return state;
  };
};
