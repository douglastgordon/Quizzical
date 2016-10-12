export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";

export const addCard = id => ({
  type: ADD_CARD,
  id
});

export const updateCard = card => ({
  type: UPDATE_CARD,
  card
});
