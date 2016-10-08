import { RECEIVE_LANGUAGES } from '../actions/language_actions';
import merge from 'lodash/merge';

const LanguagesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LANGUAGES:
      return action.languages;
    default:
      return state;
  }
};

export default LanguagesReducer;
