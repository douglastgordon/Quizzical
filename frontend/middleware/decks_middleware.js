import { hashHistory } from 'react-router';
import {
  receiveDecks,
  receiveDeck,
  requestDeck,
  requestDecks,
  REQUEST_DECKS,
  REQUEST_DECK,
  DESTROY_DECK,
  CREATE_DECK,
  UPDATE_DECK
 } from '../actions/deck_actions';
import {
  fetchDecks,
  fetchDeck,
  makeDeck,
  deleteDeck,
  updateDeck } from '../util/deck_api_util';

import { receiveErrors } from '../actions/session_actions';


const DecksMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case REQUEST_DECKS:
      success = data => dispatch(receiveDecks(data));
      fetchDecks(success);
      return next(action);
    case REQUEST_DECK:
      success = data => dispatch(receiveDeck(data));
      fetchDeck(action.id, success);
      return next(action);
    case DESTROY_DECK:
      success = () => {
        hashHistory.push(`/home`);
      };
      deleteDeck(action.id, success);
      return next(action);
    case CREATE_DECK:
      success = data => {
        hashHistory.push(`${data.id}`);
        return dispatch(receiveDeck(data));
      };
      makeDeck(action.deck, success, errorCallback);
      return next(action);
    case UPDATE_DECK:
      success = data => {
        hashHistory.push(`${data.id}`);
        return dispatch(receiveDeck(data));
      };
      updateDeck(action.deck, success);
      return next(action);
    default:
      return next(action);
  }
};

export default DecksMiddleware;
