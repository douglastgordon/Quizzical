import {
  receiveDecks,
  createDeck,
  receiveDeck,
  REQUEST_DECKS,
  REQUEST_DECK } from '../actions/deck_actions';
import { fetchDecks, fetchDeck, makeDeck } from '../util/deck_api_util';


const DecksMiddleware = ({ getState, dispatch }) => next => action => {
  let success = 0;
  switch(action.type){

    case REQUEST_DECKS:
      success = data => dispatch(receiveDecks(data));
      fetchDecks(success);
      return next(action);
    case REQUEST_DECK:
      success = data => dispatch(receiveDeck(data));
      fetchDeck(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default DecksMiddleware;
