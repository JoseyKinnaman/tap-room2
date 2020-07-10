import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kombuchaListReducer from '../../reducers/kombucha-list-reducer';
import * as c from '../../actions/ActionTypes'
import selectedKombuchaReducer from '../../reducers/selected-kombucha-reducer';
 
 let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKombuchaList: {},
      formVisibleOnPage: false,
      selectedKombucha: null
    });
  });
  test('Check that initial state of kombuchaListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_KOMBUCHA,
      name: "Purple Rain",
      brand: "Electric",
      price: 56,
      alcoholContent: 5.9,
      flavor: "Grape",
      pints: "124",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKombuchaList).toEqual(kombuchaListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
  test('Check that SELECT_KOMBUCHA causes change in selectedKombuchaReducer and root reducer', () => {
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
    store.dispatch(action);
    expect(store.getState().selectedKombucha).toEqual(selectedKombuchaReducer(undefined, action));
  });
});