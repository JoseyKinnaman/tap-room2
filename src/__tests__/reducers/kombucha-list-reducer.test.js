import kombuchaListReducer from '../../reducers/kombucha-list-reducer';

describe ('kombuchaListReducer', () => {
  TextDecoderStream('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });
});