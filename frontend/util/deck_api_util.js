export const fetchDecks = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/decks',
		success,
		error
	});
};

export const fetchDeck = (id, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/decks/${id}`,
		success,
		error
	});
};

export const makeDeck = (deck, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/decks/',
    data: {
      deck
    },
    success,
    error
  });
};

export const updateDeck = (deck, success, error) => {
  $.ajax({
      method: 'PATCH',
      url: `api/decks/${deck.id}`,
      data: {
        deck
      },
      success,
      error
  });
};

export const deleteDeck = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/decks/${id}`,
    success,
    error
  });
};
