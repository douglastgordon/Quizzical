import { hashHistory } from 'react-router';
import {
  REQUEST_LANGUAGES,
  receiveLanguages } from '../actions/language_actions';

import { fetchlanguages } from '../util/language_api_util';

const LanguagesMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  switch (action.type) {
    case REQUEST_LANGUAGES:
      success = data => dispatch(receiveLanguages(data));
      fetchlanguages(success);
      return next(action);
    default:
      return next(action);
  }
};

export default LanguagesMiddleware;
