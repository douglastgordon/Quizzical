export const makeCards = (formData, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/cards/',
    contentType: false,
    processData: false,
    data: formData,
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
