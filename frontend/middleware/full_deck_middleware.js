import { hashHistory } from 'react-router';
import {
   REQUEST_FULL_DECK,
   receiveFullDeck,
   requestFullDeck } from '../actions/full_deck_actions';

import { fetchDeck } from '../util/full_deck_api_util';

import {
  CREATE_CARDS,
  receiveCards,
  DESTROY_CARD,
  destroyCard,
  removeCard
 } from '../actions/card_actions';

import { makeCards, deleteCard } from '../util/card_api_util';

const FullDeckMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  switch (action.type) {
    case REQUEST_FULL_DECK:
      success = data => dispatch(receiveFullDeck(data));
      fetchDeck(action.id, success);
      return next(action);
    case CREATE_CARDS:
      success = data => dispatch(receiveCards(data));
      makeCards(action.cards, success);
      return next(action);
    case DESTROY_CARD:
      success = (res) =>dispatch(removeCard(res));
      deleteCard(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default FullDeckMiddleware;
