export const CREATE_CARD = "CREATE_CARD";
export const RECEIVE_CARD = "RECEIVE_CARD";

export const createCard = (card) => ({
  type: CREATE_CARD,
  card
});

export const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card
});
