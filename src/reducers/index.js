import formVisibleReducer from './form-visible-reducer';
import kombuchaListReducer from './kombucha-list-reducer';
import selectedKombuchaReducer from './selected-kombucha-reducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKombuchaList: kombuchaListReducer,
  selectedKombucha: selectedKombuchaReducer
});

export default rootReducer;