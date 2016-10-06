export const fetchUser = (id, success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/decks/${id}',
		success,
		error
	});
};
