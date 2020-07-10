import * as actions from './../../actions';

describe('tap room actions', () => {
  test('deleteKombucha should create DELETE_KOMBUCHA action', () => { expect(actions.deleteKombucha(1)).toEqual({
      type: 'DELETE_KOMBUCHA',
      id:1
    });
  });
  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKombucha should create ADD_KOMBUCHA action', () => {
    expect(actions.addKombucha({ name: "Purple Rain", brand: "Electric", price: 56, alcoholContent: 5.9, flavor: "Grape", pints: "124", id: 1 })).toEqual({
      type: 'ADD_KOMBUCHA',
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