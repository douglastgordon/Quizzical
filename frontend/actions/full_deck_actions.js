export const RECEIVE_FULL_DECK = "RECEIVE_FULL_DECK";
export const REQUEST_FULL_DECK = "REQUEST_FULL_DECK";

export const receiveFullDeck = fullDeck => ({
  type: RECEIVE_FULL_DECK,
  fullDeck
});

export const requestFullDeck = (id) => ({
  type: REQUEST_FULL_DECK,
  id
});
