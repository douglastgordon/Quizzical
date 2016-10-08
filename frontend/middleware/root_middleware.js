import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import DecksMiddleware from './decks_middleware';
import FullDeckMiddleware from './full_deck_middleware';
import LanguagesMiddleware from './languages_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DecksMiddleware,
  FullDeckMiddleware,
  LanguagesMiddleware
);

export default RootMiddleware;
