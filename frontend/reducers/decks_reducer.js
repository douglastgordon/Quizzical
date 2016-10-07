import { RECEIVE_DECKS, RECEIVE_DECK } from '../actions/deck_actions';
import merge from 'lodash/merge';

const DecksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case RECEIVE_DECK:
      let id = action.deck.id;
      return merge({}, state, {[id]: action.deck});
    default:
      return state;

  }
};

export default DecksReducer;
