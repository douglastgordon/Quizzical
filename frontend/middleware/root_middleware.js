import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import DecksMiddleware from './decks_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DecksMiddleware
);

export default RootMiddleware;
