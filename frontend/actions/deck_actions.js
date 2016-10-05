export const RECEIVE_DECK = "RECEIVE_DECK";
export const REQUEST_DECK = "REQUEST_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const REQUEST_DECKS = "REQUEST_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const DESTROY_DECK = "DESTROY_DECK";

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});
