import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import DecksReducer from './decks_reducer';
import FullDeckReducer from './full_deck_reducer';

export default combineReducers({
  session: SessionReducer,
  decks: DecksReducer,
  full_deck: FullDeckReducer
});
