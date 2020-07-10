import kombuchaListReducer from '../../reducers/kombucha-list-reducer';

describe ('kombuchaListReducer', () => {
  let action;
  const kombuchaInfo = {
    name: "Purple Rain",
    brand: "Electric",
    price: 56,
    alcoholContent: 5.9,
    flavor: "Grape",
    pints: "124",
    id:1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });
  test('Should successfully add a new kombucha info to masterKombuchaList', () => {
    const { name, brand, price, alcoholContent,flavor, pints, id} = kombuchaInfo;
    action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavor: flavor,
      pints: pints,
      id: id
    };
    expect(kombuchaListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        flavor: flavor,
        pints: pints,
        id: id
      }
    });
  });
});