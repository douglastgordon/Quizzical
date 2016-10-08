export const makeCard = (card, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/cards/',
    data: {
      card
    },
    success,
    error
  });
};

export const deleteCard = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/cards/${id}`,
    data: {
      id
    },
    success,
    error
  });
};
