export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const requestUser = (id) => ({
  type: REQUEST_USER,
  id
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
