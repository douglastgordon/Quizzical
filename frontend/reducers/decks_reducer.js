import { RECEIVE_DECKS, RECEIVE_DECK } from '../actions/deck_actions';

const DecksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case RECEIVE_DECK:
      return action.deck;
    default:
      return state;

  }
};

export default DecksReducer;
