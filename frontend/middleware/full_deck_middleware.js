import { hashHistory } from 'react-router';
import { REQUEST_FULL_DECK, receiveFullDeck } from '../actions/full_deck_actions';
import { fetchDeck } from '../util/full_deck_api_util';

const FullDeckMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  debugger
  switch (action.type) {
    case REQUEST_FULL_DECK:
      success = data => dispatch(receiveFullDeck(data));
      fetchDeck(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default FullDeckMiddleware;
