export default  (state = {}, action) => {
  const { name, brand, price, alcoholContent, flavor, pints, id} = action;
  switch (action.type) {
    case 'ADD_KOMBUCHA':
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
    default:
      return state;
  }
};