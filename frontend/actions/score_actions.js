export const RECEIVE_HIGH_SCORE = "RECEIVE_HIGH_SCORE";
export const REQUEST_HIGH_SCORE = "REQUEST_HIGH_SCORE";
export const CREATE_SCORE = "CREATE_SCORE";

export const receiveHighScore = (score) => ({
  type: RECEIVE_HIGH_SCORE,
  score
});

export const requestHighScore = (deckId) => ({
  type: REQUEST_HIGH_SCORE,
  deckId
});

export const createScore = (score) => ({
  type: CREATE_SCORE,
  score
});
