import merge from 'lodash/merge';
// import update from 'react-addons-update';
import update from 'immutability-helper';

import { RECEIVE_FULL_DECK } from '../actions/full_deck_actions';
import { RECEIVE_CARD } from '../actions/card_actions';

const FullDeckReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_FULL_DECK:
      return action.fullDeck;
    case RECEIVE_CARD:
    let newCards = merge({}, state.cards, {[action.card.id]: action.card});
      let newState = merge({}, state, {
        cards: newCards
      });
      return newState;
    default:
      return state;
  }
};

export default FullDeckReducer;
