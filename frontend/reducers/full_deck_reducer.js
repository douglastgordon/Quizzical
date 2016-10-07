import merge from 'lodash/merge';
import { RECEIVE_FULL_DECK } from '../actions/full_deck_actions';

const FullDeckReducer = (state={}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_FULL_DECK:
      return action.fullDeck;
    default:
      return state;
  }
};

export default FullDeckReducer;
