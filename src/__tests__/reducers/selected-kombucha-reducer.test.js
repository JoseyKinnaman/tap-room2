import selectedKombuchaReducer from '../../reducers/selected-kombucha-reducer';
import * as c from './../../actions/ActionTypes';


describe("selectedKombuchaReducer", ()=>{
  test ('Should return default state if no action type is recognized', () => {
    expect(selectedKombuchaReducer(false, { type:null})).toEqual(false);
  });

  test('Should select a kombucha based on selection', () => {
    const action = {
    type: c.SELECT_KOMBUCHA,
      name: "Purple Rain",
      brand: "Electric",
      price: 56,
      alcoholContent: 5.9,
      flavor: "Grape",
      pints: "124",
      id: 1
     }
     expect(selectedKombuchaReducer(null, action)).toEqual({
       name: "Purple Rain",
       brand: "Electric",
       price: 56,
       alcoholContent: 5.9,
       flavor: "Grape",
       pints: "124",
       id: 1
    })
  });
});