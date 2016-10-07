import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import DecksMiddleware from './decks_middleware';
import FullDeckMiddleware from './full_deck_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DecksMiddleware,
  FullDeckMiddleware
);

export default RootMiddleware;
