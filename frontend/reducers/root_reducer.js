import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DecksReducer from './decks_reducer';
import FullDeckReducer from './full_deck_reducer';
import LanguagesReducer from './languages_reducer';
import CardFormReducer from './card_form_reducer';
import ScoreReducer from './score_reducer';

export default combineReducers({
  session: SessionReducer,
  decks: DecksReducer,
  full_deck: FullDeckReducer,
  languages: LanguagesReducer,
  card_forms: CardFormReducer,
  high_score: ScoreReducer
});
