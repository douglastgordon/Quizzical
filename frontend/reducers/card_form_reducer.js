import { ADD_CARD, UPDATE_CARD } from '../actions/card_form_actions';
import { CREATE_CARDS } from '../actions/card_actions';
import merge from 'lodash/merge';

const CardFormReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return merge({}, state, {[action.id]: {}});
    case UPDATE_CARD:
      let newCard = {
        [action.card.temp_id]: {
          term: action.card.term,
          definition: action.card.definition,
          deck_id: action.card.deck_id,
          audioFile: action.card.audioFile
        }
      };
      return merge({}, state, newCard);
    case CREATE_CARDS:
      return {};
    default:
      return state;
  }
};

export default CardFormReducer;
