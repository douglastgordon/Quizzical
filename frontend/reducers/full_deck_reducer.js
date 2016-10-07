import merge from 'lodash/merge';
import { RECEIVE_CARDS } from '../actions/full_deck_actions';

const FullDeckReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_FULL_DECK:
      return action.fullDeck;
    default:
      return state;
  }
};
