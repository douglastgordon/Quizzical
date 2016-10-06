export const RECEIVE_DECK = "RECEIVE_DECK";
export const REQUEST_DECK = "REQUEST_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const REQUEST_DECKS = "REQUEST_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const DESTROY_DECK = "DESTROY_DECK";
export const UPDATE_DECK = "UPDATE_DECK";

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

export const requestDeck = id => ({
  type: REQUEST_DECK,
  id
});

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const requestDecks = () => ({
  type: REQUEST_DECKS,
});

export const createDeck = deck => ({
  type: CREATE_DECK,
  deck
});

export const destroyDeck = id => ({
  type: DESTROY_DECK,
  id
});

export const updateDeck = deck => ({
  type: UPDATE_DECK,
  deck
});
