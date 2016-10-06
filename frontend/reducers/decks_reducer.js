import { RECEIVE_DECKS } from '../actions/deck_actions';

const DecksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    default:
      return state;

  }
};

export default DecksReducer;
