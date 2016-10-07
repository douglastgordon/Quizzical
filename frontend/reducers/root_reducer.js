import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import DecksReducer from './decks_reducer';
import CardsReducer from './cards_reducer';

export default combineReducers({
  session: SessionReducer,
  decks: DecksReducer,
  full_deck: FullDeckReducer
});
