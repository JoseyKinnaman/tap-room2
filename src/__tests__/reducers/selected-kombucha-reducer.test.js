import selectedKombuchaReducer from '../../reducers/selected-kombucha-reducer';

describe("selectedKombuchaReducer", ()=>{
  test ('Should return default state if no action type is recognized', () => {
    expect(selectedKombuchaReducer(false, { type:null})).toEqual(false);
  });
});