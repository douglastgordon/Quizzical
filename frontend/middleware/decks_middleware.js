import { receiveDecks, REQUEST_DECKS } from '../actions/deck_actions';
import { fetchDecks } from '../util/deck_api_util';

const DecksMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_DECKS:
      const success = data => dispatch(receiveDecks(data));
      fetchDecks(success);
      return next(action);
    default:
      return next(action);
  }
};

export default DecksMiddleware;
