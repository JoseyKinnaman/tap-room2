import kombuchaListReducer from '../../reducers/kombucha-list-reducer';
import * as c from '../../actions/ActionTypes'

describe ('kombuchaListReducer', () => {

  const currentState ={
    1: {
      name: "Purple Rain",
      brand: "Electric",
      price: 56,
      alcoholContent: 5.9,
      flavor: "Grape",
      pints: 124,
      id: 1
    },
    2: {
      name: "The Red in the Sky is Ours",
      brand: "ATG",
      price: 59,
      alcoholContent: 6,
      flavor: "Blood Orange",
      pints: 124,
      id: 2
    }
  }
  let action;
  const kombuchaInfo = {
    name: "Purple Rain",
    brand: "Electric",
    price: 56,
    alcoholContent: 5.9,
    flavor: "Grape",
    pints: 124,
    id:1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add a new kombucha info to masterKombuchaList', () => {
    const { name, brand, price, alcoholContent,flavor, pints, id} = kombuchaInfo;
    action = {
      type: c.ADD_KOMBUCHA,
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

  test ('Should succesfully delete a kombucha', ()=>{
    action = {
      type: c.DELETE_KOMBUCHA,
      id: 1
    }
    expect(kombuchaListReducer(currentState, action)).toEqual({
      2: {
        name: "The Red in the Sky is Ours",
        brand: "ATG",
        price: 59,
        alcoholContent: 6,
        flavor: "Blood Orange",
        pints: 124,
        id: 2
      }
    });
  });

  test('Should let the user succesfully buy a pint', () => {
    const {name, brand, price, alcoholContent, flavor, pints, id} = kombuchaInfo
    const newPints = pints -1;
    action ={
      type: c.BUY_PINT,
      id: 1,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      flavor: flavor
    }
    expect(kombuchaListReducer(currentState, action)).toEqual({
      [id]:{
        id: id,
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: newPints,
        flavor: flavor
      },
      1: {
        name: "Purple Rain",
        brand: "Electric",
        price: 56,
        alcoholContent: 5.9,
        flavor: "Grape",
        pints: 123,
        id: 1
      },
      2: {
        name: "The Red in the Sky is Ours",
        brand: "ATG",
        price: 59,
        alcoholContent: 6,
        flavor: "Blood Orange",
        pints: 124,
        id: 2
      }
    })
  })
});