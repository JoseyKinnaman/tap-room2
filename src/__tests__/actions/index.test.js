import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes'

describe('tap room actions', () => {
  test('deleteKombucha should create DELETE_KOMBUCHA action', () => { expect(actions.deleteKombucha(1)).toEqual({
      type: c.DELETE_KOMBUCHA,
      id:1
    });
  });
  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addKombucha should create ADD_KOMBUCHA action', () => {
    expect(actions.addKombucha({ name: "Purple Rain", brand: "Electric", price: 56, alcoholContent: 5.9, flavor: "Grape", pints: "124", id: 1 })).toEqual({
      type: c.ADD_KOMBUCHA,
      name: "Purple Rain",
      brand: "Electric",
      price: 56,
      alcoholContent: 5.9,
      flavor: "Grape",
      pints: "124",
      id: 1
    });
  });

});