import { hashHistory } from 'react-router';
import { REQUEST_FULL_DECK, receiveFullDeck } from '../actions/full_deck_actions';
import { fetchDeck } from '../util/full_deck_api_util';

import { CREATE_CARD, receiveCard } from '../actions/card_actions';
import { makeCard } from '../util/card_api_util';


const FullDeckMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  switch (action.type) {
    case REQUEST_FULL_DECK:
      success = data => dispatch(receiveFullDeck(data));
      fetchDeck(action.id, success);
      return next(action);
    case CREATE_CARD:
      success = data => dispatch(receiveCard(data));
      makeCard(action.card, success);
      return next(action);
    default:
      return next(action);
  }
};

export default FullDeckMiddleware;
