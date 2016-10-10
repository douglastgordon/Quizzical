export const makeCards = (cards, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/cards/',
    data: {
      cards: JSON.stringify(cards)
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
