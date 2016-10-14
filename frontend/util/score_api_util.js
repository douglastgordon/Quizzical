export const makeScore = (score, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/scores/',
    data: {
      score
    },
    success,
    error
  });
};

export const fetchScore = (deckId, success, error) => {

	$.ajax({
		method: 'GET',
		url: `/api/scores/${deckId}`,
		success,
		error
	});
};
