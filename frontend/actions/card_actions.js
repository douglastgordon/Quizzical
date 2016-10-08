export const CREATE_CARD = "CREATE_CARD";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const DESTROY_CARD = "DESTROY_CARD";
export const REMOVE_CARD = "REMOVE_CARD";


export const createCard = (card) => ({
  type: CREATE_CARD,
  card
});

export const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card
});

export const destroyCard = (id) => ({
  type: DESTROY_CARD,
  id
});

export const removeCard = (card) => ({
  type: REMOVE_CARD,
  card
});
