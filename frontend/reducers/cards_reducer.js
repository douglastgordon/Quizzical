import merge from 'lodash/merge';
import { RECEIVE_CARD } from '../actions/card_actions';

const CardsReducer = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_CARD:
      return merge([], state, {[action.card.id]: action.card});
    default:
      return state;

  }
};
