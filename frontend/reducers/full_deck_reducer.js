import merge from 'lodash/merge';
// import update from 'react-addons-update';
import update from 'immutability-helper';

import { RECEIVE_FULL_DECK } from '../actions/full_deck_actions';
import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';

const FullDeckReducer = (state={}, action) => {
  let newCards;
  let newState;
  switch (action.type) {
    case RECEIVE_FULL_DECK:
      return action.fullDeck;
    case RECEIVE_CARD:
      newCards = merge({}, state.cards, {[action.card.id]: action.card});
        newState = merge({}, state, {
          cards: newCards
        });
        return newState;
    case REMOVE_CARD:

      let cardKeys = Object.keys(state.cards);
      newCards = {};
      cardKeys.forEach((key)=>{
        if (parseInt(key) !== action.card.id){
          newCards[key]=state.cards[key];
        }
      });
      newState = merge({},{
        id: state.id,
        title: state.title,
        author_id: state.author_id,
        description: state.description,
        term_lang_id: state.term_lang_id,
        author: state.author,
        def_lang_id: state.def_lang_id,
        cards: newCards
      });
      return newState;
    default:
      return state;
  }
};

export default FullDeckReducer;
