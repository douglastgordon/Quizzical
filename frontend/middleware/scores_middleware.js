import {
   REQUEST_HIGH_SCORE,
   CREATE_SCORE,
   receiveHighScore} from '../actions/score_actions';

import {fetchScore, makeScore} from '../util/score_api_util';

const ScoreMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  switch (action.type) {
    case REQUEST_HIGH_SCORE:
      success = data => dispatch(receiveHighScore(data));
      fetchScore(action.deckId, success);
      return next(action);
    case CREATE_SCORE:
      makeScore(action.score, success);
      return next(action);
    default:
      return next(action);
  }
};

export default ScoreMiddleware;
