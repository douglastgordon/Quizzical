import merge from 'lodash/merge';
import update from 'immutability-helper';

import { RECEIVE_HIGH_SCORE } from '../actions/score_actions';

const ScoreReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_HIGH_SCORE:
      if (action.score == null){
        return state;
      }
      return action.score;
    default:
      return state;
  }
};

export default ScoreReducer;
