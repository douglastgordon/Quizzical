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
