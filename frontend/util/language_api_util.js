export const fetchlanguages = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/languages',
		success,
		error
	});
};
