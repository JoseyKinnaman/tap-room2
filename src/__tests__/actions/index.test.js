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
});